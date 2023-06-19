import { negative, positive } from "@/data/qualities"
import {
  renderWithTestRouter,
  screen,
  userEvent,
  setupIndexedDB,
  getByText as getByTextInElement,
} from "@/test/testUtils"
import Qualities from "."

describe("<Qualities />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "7") => {
    const user = userEvent.setup()
    renderWithTestRouter(<Qualities />, { query: { id } })
    return user
  }

  test("displayes poitive qualities", async () => {
    setup()

    expect(await screen.findByText("Positive Qualities")).toBeInTheDocument()

    positive.forEach((quality) => {
      const qualityRow = screen.getByText(quality.name).closest("tr")
      expect(qualityRow).toHaveTextContent(quality.karma.toString())
    })
  })

  test("display negative qualities", async () => {
    setup()

    expect(await screen.findByText("Negative Qualities")).toBeInTheDocument()

    negative.forEach((quality) => {
      const qualityRow = screen.getByText(quality.name).closest("tr")
      expect(qualityRow).toHaveTextContent(quality.karma.toString())
    })
  })

  test("should be able to buy a quality", async () => {
    const user = setup()

    // test buy positive
    await user.click(await screen.findByLabelText("Add Astral Chameleon"))

    expect(
      await screen.findByText("Frosty's Positive Qualities"),
    ).toBeInTheDocument()

    expect(
      await screen.findByLabelText("Remove Astral Chameleon"),
    ).toBeInTheDocument()

    // test buy negative
    await user.click(await screen.findByLabelText("Add AR Vertigo"))

    expect(screen.getByLabelText("Remove AR Vertigo")).toBeInTheDocument()
  })

  test("should be able to remove qualities", async () => {
    const user = setup("10")

    await user.click(await screen.findByLabelText("Remove Will To Live"))

    // remove positive
    expect(
      screen.queryByLabelText("Remove Will To Live"),
    ).not.toBeInTheDocument()
    expect(screen.getByLabelText("Remove Guts")).toBeInTheDocument()

    //remove negative
    await user.click(screen.getByLabelText("Remove AR Vertigo"))
    expect(screen.queryByLabelText("Remove AR Vertigo")).not.toBeInTheDocument()
  })

  describe("select", () => {
    test("Qualities without a select should not have a select", async () => {
      const user = setup()

      const qualityRow = (await screen.findByText("Gremlins")).closest("tr")

      expect(qualityRow).toHaveTextContent("N/A")

      await user.click(screen.getByLabelText("Add Gremlins"))

      const purchasedQualityRow = screen
        .getByLabelText("Remove Gremlins")
        .closest("tr")

      expect(purchasedQualityRow).toHaveTextContent("N/A")
    })

    test("Qualities should allow a skill to select", async () => {
      const user = setup()

      expect(await screen.findByText("Aptitude")).toBeInTheDocument()

      const aptitudeRow = screen.getByText("Aptitude").closest("tr")

      const select = getByTextInElement(aptitudeRow, "Astral")

      await user.click(select)
      await user.click(screen.getByText("Firearms"))

      expect(aptitudeRow).toHaveTextContent("Firearms")

      await user.click(screen.getByLabelText("Add Aptitude"))

      const aptitudePurchasedRow = screen
        .getByLabelText("Remove Aptitude")
        .closest("tr")

      expect(aptitudePurchasedRow).toHaveTextContent("Firearms")
    })

    test("Qualities should have an input to take a name", async () => {
      const user = setup()

      expect(await screen.findByText("Prejudiced")).toBeInTheDocument()

      await user.click(screen.getByLabelText("Select Prejudiced Name"))
      await user.keyboard("Elves")
      await user.click(screen.getByLabelText("Add Prejudiced"))

      const aptitudePurchasedRow = screen
        .getByLabelText("Remove Prejudiced")
        .closest("tr")
      expect(aptitudePurchasedRow).toHaveTextContent("Elves")
    })

    test("Qualities should allow an attribute to be selected", async () => {
      const user = setup()

      expect(
        await screen.findByText("Exceptional Attribute"),
      ).toBeInTheDocument()

      const qualityRow = screen.getByText("Exceptional Attribute").closest("tr")

      const select = getByTextInElement(qualityRow, "Body")
      await user.click(select)
      await user.click(screen.getByText("Agility"))
      expect(qualityRow).toHaveTextContent("Agility")

      await user.click(screen.getByLabelText("Add Exceptional Attribute"))

      const qualityPurchasedRow = screen
        .getByLabelText("Remove Exceptional Attribute")
        .closest("tr")

      expect(qualityPurchasedRow).toHaveTextContent("Agility")
    })

    test("quality should allow an elemental effect to be selected", async () => {
      const user = setup()

      expect(
        await screen.findByText("Elemental Resistance"),
      ).toBeInTheDocument()

      const qualityRow = screen.getByText("Elemental Resistance").closest("tr")

      const select = getByTextInElement(qualityRow, "Electrical")
      await user.click(select)
      await user.click(screen.getByText("Cold"))
      expect(qualityRow).toHaveTextContent("Cold")

      await user.click(screen.getByLabelText("Add Elemental Resistance"))

      const qualityPurchasedRow = screen
        .getByLabelText("Remove Elemental Resistance")
        .closest("tr")

      expect(qualityPurchasedRow).toHaveTextContent("Cold")
    })
  })
})
