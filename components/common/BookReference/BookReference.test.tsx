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

  it("should tell the user to link their PDF of the book", async () => {
    const user = userEvent.setup()
    window.showOpenFilePicker = jest.fn()
    render(<BookReference reference={[{ book: "SR6 Berlin", page: 133 }]} />)

    await user.hover(screen.getByRole("button", { name: "SR6 Berlin p.133" }))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Link your PDF of SR6 Berlin to open it at this page",
    )
  })

  it("should ask for the PDF the first time and then open it at the page", async () => {
    const user = userEvent.setup()
    // the fake IndexedDB can't copy a handle with functions, so store it as is
    jest.spyOn(global, "structuredClone").mockImplementation((value) => value)
    jest
      .spyOn(URL, "createObjectURL")
      .mockReturnValueOnce("blob:first")
      .mockReturnValueOnce("blob:second")
      .mockReturnValueOnce("blob:third")
    const revoke = jest
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => undefined)
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

    // every reference opens in the same tab, and the PDF's page numbers run
    // one ahead of the printed ones
    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.133" }))
    expect(open).toHaveBeenCalledWith("blob:first#page=134", "oma3-rulebook")

    // the PDF viewer only reads the page when it loads, so each click gives
    // the PDF a new URL, and lets go of the last one
    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.140" }))
    expect(window.showOpenFilePicker).toHaveBeenCalledTimes(2)
    expect(open).toHaveBeenLastCalledWith(
      "blob:second#page=141",
      "oma3-rulebook",
    )
    expect(revoke).toHaveBeenCalledWith("blob:first")

    // other tables use the PDF that was picked
    unmount()
    render(<BookReference reference={[{ book: "SR6 Berlin", page: 72 }]} />)
    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.72" }))
    expect(open).toHaveBeenLastCalledWith("blob:third#page=73", "oma3-rulebook")
  })
})
