import { render } from "@/test/testUtils"
import ImagingMods from "."

describe("ImagingMods", () => {
  const setup = () => {
    return render(<ImagingMods />)
  }
  it("should display a list of imaging mods", () => {
    const { getByText } = setup()
  })
})
