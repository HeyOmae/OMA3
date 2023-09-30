import { mockedRunners } from "@/test/mocks"
import {
  withTestRouter,
  render,
  userEvent,
  waitFor,
  setupIndexedDB,
  screen,
  getByText as getByTextIn,
} from "@/test/testUtils"
import { initRunnerAttributes } from "@/types/runner"
import KnowledgeSkills from "./index"

describe("knowledge", () => {
  beforeAll(() =>
    setupIndexedDB({
      payload: [
        ...mockedRunners,
        {
          id: mockedRunners.length + 1,
          name: "",
          describe: "",
          attributes: initRunnerAttributes,
        },
        { id: mockedRunners.length + 2, name: "Blanky", describe: "" },
      ],
    }),
  )
  const setup = (id = "7") => {
    const user = userEvent.setup()
    render(withTestRouter(<KnowledgeSkills />, { query: { id } }))
    return user
  }
  it("should be able to add a knowledge skills", async () => {
    const user = setup()
    const knowledgeSkill = "Gangs of Seattle"

    expect(
      await screen.findByLabelText("input knowledge skill"),
    ).toBeInTheDocument()

    const pointsElement = screen
      .getAllByText("Knowledge Points")[0]
      .closest("dl")
    expect(getByTextIn(pointsElement, "4")).toBeInTheDocument()

    const input = screen.getByLabelText("input knowledge skill")

    await user.click(input)
    await user.keyboard(knowledgeSkill + "{enter}")

    expect(getByTextIn(pointsElement, "3")).toBeInTheDocument()

    expect(screen.getByText(knowledgeSkill)).toBeInTheDocument()

    const knowledgeSkill2 = "Magical Traditions"
    await user.click(input)
    await user.click(screen.getByText(knowledgeSkill2))
    await user.click(screen.getByLabelText("submit knowledge skill"))

    expect(getByTextIn(pointsElement, "2")).toBeInTheDocument()

    expect(screen.getByText(knowledgeSkill2)).toBeInTheDocument()

    // TODO: figure out how to reset the input without needing to click the clear button
    await user.click(screen.getByLabelText("Clear"))
    await user.click(input)
    await user.keyboard("Pizza")
    await user.click(screen.getByLabelText("submit knowledge skill"))

    expect(getByTextIn(pointsElement, "1")).toBeInTheDocument()
    expect(screen.getByText("Pizza")).toBeInTheDocument()
  })

  it("should remove a knowledge skill", async () => {
    const user = setup("10")

    await user.click(
      await screen.findByLabelText("Remove Weapons Manufacturers"),
    )

    expect(screen.queryByText("Weapons Manufacturers")).not.toBeInTheDocument()
    expect(screen.queryByText("Craft Beers")).toBeInTheDocument()
    expect(screen.queryByText("Law Enforcement Corps")).toBeInTheDocument()
  })

  it("should fall back to say 'Runner' if the name isn't set", async () => {
    const user = setup((mockedRunners.length + 1).toString())

    await user.click(await screen.findByLabelText("input knowledge skill"))
    await user.keyboard("Tacos{enter}")

    await waitFor(() => {
      expect(screen.getByText("Runner's Knowledge Skills")).toBeInTheDocument()
    })
  })

  it("should show the priority warning if there is no Logic attibute", async () => {
    setup((mockedRunners.length + 2).toString())

    expect(
      await screen.findByText("You need to set the attributes priority"),
    ).toBeInTheDocument()
  })

  test("knowledge skills more then availble points cost 3 karma", async () => {
    const user = setup()

    expect(
      (
        await screen.findAllByRole("definition", {
          name: "Knowledge Points Value",
        })
      )[0],
    ).toHaveTextContent("1")
    expect(
      screen.getAllByRole("definition", { name: "Available Karma Value" })[0],
    ).toHaveTextContent("40")

    await user.click(
      screen.getByRole("combobox", { name: "input knowledge skill" }),
    )
    await user.keyboard("Immortal Elf Politics{enter}")
    await user.click(screen.getByLabelText("Clear"))

    expect(
      screen.getAllByRole("definition", {
        name: "Knowledge Points Value",
      })[0],
    ).toHaveTextContent("0")
    expect(
      screen.getAllByRole("definition", { name: "Available Karma Value" })[0],
    ).toHaveTextContent("40")

    await user.click(
      screen.getByRole("combobox", { name: "input knowledge skill" }),
    )
    await user.keyboard("Dragon Politics{enter}")

    expect(
      screen.getAllByRole("definition", {
        name: "Knowledge Points Value",
      })[0],
    ).toHaveTextContent("0")
    expect(
      screen.getAllByRole("definition", { name: "Available Karma Value" })[0],
    ).toHaveTextContent("37")
  })
})
