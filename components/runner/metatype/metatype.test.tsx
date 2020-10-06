import {
  getByLabelText,
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../test/testUtils"
import { Metatype } from "./index"

describe("<Metatype/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<Metatype />, { query: { id: "1" } }))
  it("should have a radio buttons with the metatypes", async () => {
    const { getByRole } = setup()

    await waitFor(() => {
      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })

      expect(getByLabelText(metatypeRadio, "Human")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Dwarf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Elf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Ork")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Troll")).toBeInTheDocument()
    })
  })

  it("should save the metatype selection", async () => {
    const { getByRole } = setup()

    expect(
      indexedDB._databases.get("omae").rawObjectStores.get("runners").records
        .records[0].value.metatype
    ).toBeUndefined()

    await waitFor(() => {
      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })
      getByLabelText(metatypeRadio, "Ork").click()
    })

    await waitFor(() => {
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].value.metatype
      ).toEqual("Ork")

      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })
      expect(
        (getByLabelText(metatypeRadio, "Ork") as HTMLInputElement).checked
      ).toBe(true)
    })
  })
})
