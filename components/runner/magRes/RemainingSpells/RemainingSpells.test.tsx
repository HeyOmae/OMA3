import { RemainingSpells, Props } from "."
import { mockedRunners } from "@/test/mocks"
import { render, screen } from "@/test/testUtils"
import complexFormData from "@/data/complexForm.json"
import { ComplexForm } from "@/types/MagRes"

describe("<RemainingSpell/>", () => {
  const setup = (
    { runner, baseMagic = 4 }: Partial<Props> = {
      runner: mockedRunners[4],
      baseMagic: 4,
    },
  ) => render(<RemainingSpells runner={runner} baseMagic={baseMagic} />)

  it("should display the number of spells a runner can know", () => {
    setup({ runner: mockedRunners[1] })

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("8/8")
  })

  it("should display the number of remaining spells able to learn", () => {
    setup({ runner: mockedRunners[4] })

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("0/8")
  })

  it("should add bad-stuff class when remaining spells is negative", () => {
    setup({
      runner: {
        ...mockedRunners[4],
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
      },
    })

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("-1/8")

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveClass("bad-stuff")
  })

  it("should count rituals in the remaining spell count", () => {
    setup({ runner: mockedRunners[6] })

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("5/8")
  })

  it("should display the power points left for adepts based off magic rating", () => {
    setup({
      runner: mockedRunners[7],
    })

    expect(screen.queryByText("Spells Remaining")).not.toBeInTheDocument()
    expect(screen.getByText("Power Points Left")).toBeInTheDocument()
    expect(
      screen.getByRole("definition", { name: "Power Points Left Value" }),
    ).toHaveTextContent("5/7")
  })

  it("should display the power points and spells for mystic adepts", () => {
    setup({
      runner: {
        ...mockedRunners[4],
        attributes: mockedRunners[6].attributes,
        powers: mockedRunners[7].powers,
        magres: "Mystic Adept",
      },
    })

    expect(screen.getByText("Spells Remaining")).toBeInTheDocument()
    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("0/8")
    expect(screen.getByText("Power Points Left")).toBeInTheDocument()
    expect(
      screen.getByRole("definition", { name: "Power Points Left Value" }),
    ).toHaveTextContent("0/2")
  })

  it("should style the power points with bad-stuff when negative", () => {
    setup({
      runner: {
        ...mockedRunners[4],
        attributes: mockedRunners[6].attributes,
        spells: mockedRunners[4].spells,
        rituals: mockedRunners[6].rituals,
        powers: mockedRunners[7].powers,
        magres: "Mystic Adept",
      },
    })

    expect(
      screen.getByRole("definition", { name: "Power Points Left Value" }),
    ).toHaveTextContent("-2/0")
    expect(
      screen.getByRole("definition", { name: "Power Points Left Value" }),
    ).toHaveClass("bad-stuff")

    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveTextContent("-3/8")
    expect(
      screen.getByRole("definition", { name: "Spells Remaining Value" }),
    ).toHaveClass("bad-stuff")
  })

  it("should display how many complex forms are left to learn", () => {
    setup({ runner: mockedRunners[8] })

    expect(screen.queryByText("Spells Remaining")).not.toBeInTheDocument()
    expect(screen.queryByText("Power Points Left")).not.toBeInTheDocument()

    expect(screen.getByText("Complex Forms Remaining")).toBeInTheDocument()
    expect(
      screen.getByRole("definition", { name: "Complex Forms Remaining Value" }),
    ).toHaveTextContent("4/8")
  })

  it("should style the remaining complex forms with bad-stuff when negative", () => {
    setup({
      runner: {
        ...mockedRunners[8],
        complexForms: complexFormData.splice(0, 9) as ComplexForm[],
      },
    })

    expect(
      screen.getByRole("definition", { name: "Complex Forms Remaining Value" }),
    ).toHaveTextContent("-1/8")
    expect(
      screen.getByRole("definition", { name: "Complex Forms Remaining Value" }),
    ).toHaveClass("bad-stuff")
    expect(screen.getByText("-1/8")).toHaveClass("bad-stuff")
  })

  // test("adept should be able to get extra power points from rasing magic with karma and getting the power metamagic", () => {
  //   setup({})
  // })
})
