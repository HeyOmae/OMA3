import { cyberware } from "@/data/cyberware"
import {
  render,
  setupIndexedDB,
  withTestRouter,
  userEvent,
  screen,
  SliderHelper,
} from "@/test/testUtils"
import Cyberware from "."

describe("<Cyberware />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") => {
    const user = userEvent.setup()
    render(
      withTestRouter(<Cyberware />, { query: { id }, asPath: "/cyberware" }),
    )
    return user
  }

  it("should display cyberware that has essence cost", async () => {
    setup()

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    cyberware.forEach(({ name, useAs }) => {
      // I'm a terrible programmer for doing this in my test
      if (useAs.some((useage) => "essence" in useage)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(screen.queryByText(name)).toBeInTheDocument()
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(screen.queryByText(name)).not.toBeInTheDocument()
      }
    })
  })

  it("should change a runner's essence when buying or selling cyberware", async () => {
    const user = setup()

    expect(
      await screen.findByLabelText("Add Cyberarm Obvious"),
    ).toBeInTheDocument()

    const essenceDisplay = screen.getByText("Essence").closest("dl")
    expect(essenceDisplay).toHaveTextContent("6")

    await user.click(screen.getByLabelText("Add Cyberarm Obvious"))
    expect(essenceDisplay).toHaveTextContent("5")

    await user.click(screen.getByLabelText("Remove Cyberarm Obvious"))
    expect(essenceDisplay).toHaveTextContent("6")
  })

  it("should not error if a runner does not have cyberware yet", async () => {
    setup("11")

    expect(
      await screen.findByLabelText("Add Cyberarm Obvious"),
    ).toBeInTheDocument()
  })

  it("should have a link to the mod page for ware with capacity", async () => {
    setup("10")

    expect(
      await screen.findByLabelText("Remove Cybereye 3"),
    ).toBeInTheDocument()

    expect(screen.queryByLabelText("Mod Cybereye 3 (0)")).toBeInTheDocument()
    expect(
      screen.queryByLabelText("Mod Cybereye 3 (0)").closest("a").href,
    ).toContain("/cyberware/0")

    expect(
      screen.queryByLabelText("Mod Wired Reflexes 2 (1)"),
    ).not.toBeInTheDocument()
  })

  test("changing the rating should change essense costs displayed", async () => {
    setup()

    const cyberwareRatingRow = (
      await screen.findByText("Muscle Replacement")
    ).closest("tr")

    expect(cyberwareRatingRow).toHaveTextContent("0.7")
    // Make sure there are no trailing zeros
    expect(cyberwareRatingRow).not.toHaveTextContent("0.700000000000")

    const ratingSlider = screen.getByTestId("Muscle Replacement-rating")
    SliderHelper.change(ratingSlider, 3, 1, 4)

    expect(cyberwareRatingRow).toHaveTextContent("2.1")
  })

  test("Cyberjacks should cost the essence cost of what is listed", async () => {
    const user = setup()

    const displayEssence = (await screen.findByText("Essence")).closest("dl")
    expect(displayEssence).toHaveTextContent("6")

    const cyberjackRow = screen.getByText("Cyberjack 4").closest("tr")

    expect(cyberjackRow).toHaveTextContent("95000¥")
    expect(cyberjackRow).toHaveTextContent("2.3")

    await user.click(screen.getByLabelText("Add Cyberjack 4"))

    const boughtCyberjackRow = screen
      .getByLabelText("Remove Cyberjack 4")
      .closest("tr")

    expect(boughtCyberjackRow).toHaveTextContent("95000¥")
    expect(boughtCyberjackRow).toHaveTextContent("2.3")
    expect(displayEssence).toHaveTextContent("3.7")
  })
})
