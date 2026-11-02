import { render, screen, userEvent } from "@/test/testUtils"
import RulebookSettings from "."
import { saveBookHandle } from "../common/BookReference/rulebookFiles"

describe("<RulebookSettings/>", () => {
  afterEach(() => {
    jest.restoreAllMocks()
    Reflect.deleteProperty(window, "showOpenFilePicker")
  })

  it("should show nothing when the browser can't open local files", () => {
    const { container } = render(<RulebookSettings />)

    expect(container).toBeEmptyDOMElement()
  })

  it("should reopen the PDF picked on an earlier visit, and let it be changed", async () => {
    const user = userEvent.setup()
    // the fake IndexedDB can't copy a handle with functions, so store it as is
    jest.spyOn(global, "structuredClone").mockImplementation((value) => value)
    await saveBookHandle("SR6 Berlin", {
      getFile: jest.fn().mockResolvedValue(new File(["%PDF"], "first.pdf")),
      queryPermission: jest.fn().mockResolvedValue("granted"),
      requestPermission: jest.fn(),
    })
    window.showOpenFilePicker = jest.fn().mockResolvedValue([
      {
        getFile: jest.fn().mockResolvedValue(new File(["%PDF"], "second.pdf")),
      },
    ])

    render(<RulebookSettings />)

    await user.click(
      await screen.findByRole("button", { name: "Change SR6 Berlin PDF" }),
    )

    expect(window.showOpenFilePicker).toHaveBeenCalled()
    expect(
      screen.getByRole("button", { name: "Change SR6 Berlin PDF" }),
    ).toBeInTheDocument()
  })
})
