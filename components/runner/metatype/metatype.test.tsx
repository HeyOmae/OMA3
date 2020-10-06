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
    const { getByRole, queryByText } = setup()

    await waitFor(() => {
      const metatypeRadio = getByRole("radiogroup", { name: "metatypes" })

      expect(getByLabelText(metatypeRadio, "Human")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Dwarf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Elf")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Ork")).toBeInTheDocument()
      expect(getByLabelText(metatypeRadio, "Troll")).toBeInTheDocument()

      // if metatype is not selected attributes should not display
      expect(queryByText("Body")).not.toBeInTheDocument()
      expect(queryByText("Agility")).not.toBeInTheDocument()
      expect(queryByText("Reaction")).not.toBeInTheDocument()
      expect(queryByText("Strength")).not.toBeInTheDocument()
      expect(queryByText("Willpower")).not.toBeInTheDocument()
      expect(queryByText("Logic")).not.toBeInTheDocument()
      expect(queryByText("Intuition")).not.toBeInTheDocument()
      expect(queryByText("Charisma")).not.toBeInTheDocument()
      expect(queryByText("Edge")).not.toBeInTheDocument()
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

  describe("attributes sliders", () => {
    it("should be visible if metatype is selected", async () => {
      const { getByLabelText, getByText } = setup()
      await waitFor(() => {
        getByLabelText("Ork").click()
      })
      expect(
        indexedDB._databases.get("omae").rawObjectStores.get("runners").records
          .records[0].value.metatype
      ).toEqual("Ork")

      await waitFor(() => {
        expect(getByText("Body")).toBeInTheDocument()
        expect(getByText("Agility")).toBeInTheDocument()
        expect(getByText("Reaction")).toBeInTheDocument()
        expect(getByText("Strength")).toBeInTheDocument()
        expect(getByText("Willpower")).toBeInTheDocument()
        expect(getByText("Logic")).toBeInTheDocument()
        expect(getByText("Intuition")).toBeInTheDocument()
        expect(getByText("Charisma")).toBeInTheDocument()
        expect(getByText("Edge")).toBeInTheDocument()
      })
    })
  })
})
