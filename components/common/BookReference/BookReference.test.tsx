import { render, screen, userEvent } from "@/test/testUtils"
import { BookReference } from "."

const pdfHandle = () => ({
  getFile: jest.fn().mockResolvedValue(new File(["%PDF"], "berlin.pdf")),
  queryPermission: jest.fn().mockResolvedValue("granted"),
  requestPermission: jest.fn().mockResolvedValue("granted"),
})

describe("<BookReference/>", () => {
  afterEach(() => {
    jest.restoreAllMocks()
    Reflect.deleteProperty(window, "showOpenFilePicker")
  })

  it("should show a dash when there is no reference", () => {
    render(<BookReference />)

    expect(screen.getByText("—")).toBeInTheDocument()
  })

  it("should show plain text when the browser can't open local files", () => {
    render(
      <BookReference
        reference={[
          { book: "SR6 Berlin", page: 133 },
          { book: "SR6 Berlin", page: 134 },
        ]}
      />,
    )

    expect(
      screen.getByText("SR6 Berlin p.133, SR6 Berlin p.134"),
    ).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("should show plain text for a book it has no PDF page numbers for", () => {
    window.showOpenFilePicker = jest.fn()
    render(<BookReference reference={[{ book: "SR6", page: 133 }]} />)

    expect(screen.getByText("SR6 p.133")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("should ask for the PDF the first time and then open it at the page", async () => {
    const user = userEvent.setup()
    // the fake IndexedDB can't copy a handle with functions, so store it as is
    jest.spyOn(global, "structuredClone").mockImplementation((value) => value)
    jest.spyOn(URL, "createObjectURL").mockReturnValue("blob:berlin")
    const open = jest.spyOn(window, "open").mockReturnValue(null)
    window.showOpenFilePicker = jest
      .fn()
      .mockRejectedValueOnce(new DOMException("closed", "AbortError"))
      .mockResolvedValue([pdfHandle()])

    const { unmount } = render(
      <BookReference
        reference={[
          { book: "SR6 Berlin", page: 133 },
          { book: "SR6 Berlin", page: 140 },
        ]}
      />,
    )

    // closing the file picker leaves the reference as it was
    await user.click(
      await screen.findByRole("button", { name: "SR6 Berlin p.133" }),
    )
    expect(window.showOpenFilePicker).toHaveBeenCalledTimes(1)
    expect(open).not.toHaveBeenCalled()

    // the PDF's page numbers run one ahead of the printed ones
    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.133" }))
    expect(open).toHaveBeenCalledWith("blob:berlin#page=134", "_blank")
    expect(
      await screen.findByRole("link", { name: "SR6 Berlin p.133" }),
    ).toHaveAttribute("href", "blob:berlin#page=134")
    expect(
      screen.getByRole("link", { name: "SR6 Berlin p.140" }),
    ).toHaveAttribute("href", "blob:berlin#page=141")

    // other tables use the PDF that is already open
    unmount()
    render(<BookReference reference={[{ book: "SR6 Berlin", page: 72 }]} />)
    expect(
      screen.getByRole("link", { name: "SR6 Berlin p.72" }),
    ).toHaveAttribute("href", "blob:berlin#page=73")
  })
})
