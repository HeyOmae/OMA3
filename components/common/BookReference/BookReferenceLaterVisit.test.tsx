import { render, screen, userEvent, waitFor } from "@/test/testUtils"
import { BookReference } from "."
import { saveBookHandle } from "./rulebookFiles"

// a later visit: the PDF was picked before, but nothing is open yet
describe("<BookReference/> on a later visit", () => {
  beforeEach(() => {
    // the fake IndexedDB can't copy a handle with functions, so store it as is
    jest.spyOn(global, "structuredClone").mockImplementation((value) => value)
    jest.spyOn(URL, "createObjectURL").mockReturnValue("blob:berlin")
    jest.spyOn(window, "open").mockReturnValue(null)
    window.showOpenFilePicker = jest.fn()
  })
  afterEach(() => {
    jest.restoreAllMocks()
    Reflect.deleteProperty(window, "showOpenFilePicker")
  })

  it("should ask for permission again, and open nothing when it is turned down", async () => {
    const user = userEvent.setup()
    const handle = {
      getFile: jest.fn(),
      queryPermission: jest.fn().mockResolvedValue("prompt"),
      requestPermission: jest.fn().mockResolvedValue("denied"),
    }
    await saveBookHandle("SR6 Berlin", handle)

    render(<BookReference reference={[{ book: "SR6 Berlin", page: 133 }]} />)
    await waitFor(() => expect(handle.queryPermission).toHaveBeenCalled())

    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.133" }))

    expect(handle.requestPermission).toHaveBeenCalledWith({ mode: "read" })
    expect(window.showOpenFilePicker).not.toHaveBeenCalled()
    expect(window.open).not.toHaveBeenCalled()
    expect(
      screen.getByRole("button", { name: "SR6 Berlin p.133" }),
    ).toBeInTheDocument()
  })

  it("should ask for the PDF again when it was moved", async () => {
    const user = userEvent.setup()
    await saveBookHandle("SR6 Berlin", {
      getFile: jest.fn().mockRejectedValue(new DOMException("", "NotFound")),
      queryPermission: jest.fn().mockResolvedValue("prompt"),
      requestPermission: jest.fn().mockResolvedValue("granted"),
    })
    window.showOpenFilePicker = jest.fn().mockResolvedValue([
      {
        getFile: jest.fn().mockResolvedValue(new File(["%PDF"], "moved.pdf")),
      },
    ])

    render(<BookReference reference={[{ book: "SR6 Berlin", page: 133 }]} />)
    await user.click(screen.getByRole("button", { name: "SR6 Berlin p.133" }))

    expect(window.showOpenFilePicker).toHaveBeenCalled()
    expect(window.open).toHaveBeenCalledWith(
      "blob:berlin#page=134",
      "oma3-rulebook",
    )
  })
})
