import { RemainingSpells, Props } from "."
import { mockedRunners } from "../../../../test/mocks"
import { render } from "../../../../test/testUtils"

describe("<RemainingSpell/>", () => {
  const setup = ({ rating = 4, spells = {} }: Partial<Props> = {}) =>
    render(<RemainingSpells rating={rating} spells={spells} />)
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
})
