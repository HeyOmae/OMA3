import { Spells } from "./index"
import spellsData from "../../../../data/spells.json"
import { render } from "../../../../test/testUtils"

describe("<Spells/>", () => {
  const setup = () => render(<Spells />)
  it("should display combat spells", () => {
    const { getByText } = setup()

    spellsData.Combat.forEach(
      ({ name, category, spellfeature: [{ ref }, area] }) => {
        expect(
          getByText(
            `${name} (${ref} ${category}${area ? `, ${area.ref}` : ""})`,
          ),
        ).toBeInTheDocument()
      },
    )
  })

  it("should display detection spells", () => {
    const { getByText } = setup()

    spellsData.Detection.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
