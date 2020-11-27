import { RemainingSpells, Props } from "."
import { mockedRunners } from "../../../../test/mocks"
import { render } from "../../../../test/testUtils"
import complexFormData from "../../../../data/complexForm.json"
import { ComplexForm } from "../../../../types/MagRes"

describe("<RemainingSpell/>", () => {
  const setup = ({
    rating = 4,
    adjustmentPoints = 0,
    spells,
    rituals,
    powers,
    complexForms,
    magRes = "Full",
  }: Partial<Props> = {}) =>
    render(
      <RemainingSpells
        rating={rating}
        adjustmentPoints={adjustmentPoints}
        spells={spells}
        rituals={rituals}
        powers={powers}
        magRes={magRes}
        complexForms={complexForms}
      />,
    )
  it("should display the number of spells a runner can know", () => {
    const { getByText } = setup()

    expect(getByText("8/8")).toBeInTheDocument()
  })

  it("should display the number of remaining spells able to learn", () => {
    const { getByText } = setup({ spells: mockedRunners[4].spells })

    expect(getByText("0/8")).toBeInTheDocument()
  })

  it("should add bad-stuff class when remaining spells is negative", () => {
    const { getByText } = setup({
      spells: {
        ...mockedRunners[4].spells,
        Illusion: [
          {
            name: "Invisibility",
            category: "Illusion",
            range: "Touch",
            type: "Mana",
            duration: "Sustained",
            drain: 3,
            spellfeature: [
              {
                ref: "Sense single",
              },
            ],
          },
        ],
      },
    })

    expect(getByText("-1/8")).toHaveClass("bad-stuff")
  })

  it("should count rituals in the remaining spell count", () => {
    const { getByText } = setup({ rituals: mockedRunners[6].rituals })

    expect(getByText("5/8")).toBeInTheDocument()
  })

  it("should display the power points left for adepts based off magic rating", () => {
    const { getByText, queryByText } = setup({
      adjustmentPoints: 1,
      powers: mockedRunners[7].powers,
      magRes: "Adept",
    })

    expect(queryByText("Spells Remaining")).not.toBeInTheDocument()
    expect(getByText("Power Points Left")).toBeInTheDocument()
    expect(getByText("3/5")).toBeInTheDocument()
  })

  it("should display the power points and spells for mystic adepts", () => {
    const { getByText } = setup({
      adjustmentPoints: 2,
      spells: mockedRunners[4].spells,
      powers: mockedRunners[7].powers,
      magRes: "Mystic Adept",
    })

    expect(getByText("Spells Remaining")).toBeInTheDocument()
    expect(getByText("0/8")).toBeInTheDocument()
    expect(getByText("Power Points Left")).toBeInTheDocument()
    expect(getByText("0/2")).toBeInTheDocument()
  })

  it("should style the power points with bad-stuff when negative", () => {
    const { getByText } = setup({
      adjustmentPoints: 2,
      spells: mockedRunners[4].spells,
      rituals: mockedRunners[6].rituals,
      powers: mockedRunners[7].powers,
      magRes: "Mystic Adept",
    })

    expect(getByText("-3/8")).toHaveClass("bad-stuff")
    expect(getByText("-2/0")).toHaveClass("bad-stuff")
  })

  it("should display how many complex forms are left to learn", () => {
    const { getByText, queryByText } = setup({
      magRes: "Technomancer",
      complexForms: mockedRunners[8].complexForms,
    })

    expect(queryByText("Spells Remaining")).not.toBeInTheDocument()
    expect(queryByText("Power Points Left")).not.toBeInTheDocument()

    expect(getByText("Complex Forms Remaining")).toBeInTheDocument()
    expect(getByText("4/8")).toBeInTheDocument()
  })

  it("should style the remaining complex forms with bad-stuff when negative", () => {
    const { getByText } = setup({
      magRes: "Technomancer",
      complexForms: complexFormData.splice(0, 9) as ComplexForm[],
    })

    expect(getByText("-1/8")).toHaveClass("bad-stuff")
  })
})
