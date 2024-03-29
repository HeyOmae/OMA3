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

    test("Qualities should have a select for Mentor Spirits", async () => {
      const user = setup()

      expect(await screen.findByText("Mentor Spirit")).toBeInTheDocument()

      const qualityRow = screen.getByText("Mentor Spirit").closest("tr")
      const select = getByTextInElement(qualityRow, "Bear")
      await user.click(select)
      await user.click(screen.getByText("Thunderbird"))
      expect(qualityRow).toHaveTextContent("Thunderbird")

      await user.click(screen.getByLabelText("Add Mentor Spirit"))

      const qualityPurchasedRow = screen
        .getByLabelText("Remove Mentor Spirit")
        .closest("tr")

      expect(qualityPurchasedRow).toHaveTextContent("Thunderbird")
    })

    test("Qualities should have a spirits type to be selected", async () => {
      const user = setup()

      expect(await screen.findByText("Spirit Affinity")).toBeInTheDocument()

      const qualityRow = screen.getByText("Spirit Affinity").closest("tr")
      const select = getByTextInElement(qualityRow, "Air")
      await user.click(select)
      await user.click(screen.getByText("Water"))
      expect(qualityRow).toHaveTextContent("Water")

      await user.click(screen.getByLabelText("Add Spirit Affinity"))

      const qualityPurchasedRow = screen
        .getByLabelText("Remove Spirit Affinity")
        .closest("tr")

      expect(qualityPurchasedRow).toHaveTextContent("Water")
    })

    test("Qualities should have a sprites type to be selected", async () => {
      const user = setup()

      expect(await screen.findByText("Sprite Bane")).toBeInTheDocument()

      const qualityRow = screen.getByText("Sprite Bane").closest("tr")
      const select = getByTextInElement(qualityRow, "Courier")
      await user.click(select)
      await user.click(screen.getByText("Fault"))
      expect(qualityRow).toHaveTextContent("Fault")

      await user.click(screen.getByLabelText("Add Sprite Bane"))

      const qualityPurchasedRow = screen
        .getByLabelText("Remove Sprite Bane")
        .closest("tr")

      expect(qualityPurchasedRow).toHaveTextContent("Fault")
    })
  })

  test("qualities should allow selecting levels", async () => {
    const user = setup()

    expect(await screen.findByText("Built Tough")).toBeInTheDocument()

    const qualityRow = screen.getByText("Built Tough").closest("tr")
    const select = getByTextInElement(qualityRow, "1")
    await user.click(select)
    // make sure there is no 0 level
    expect(screen.queryByRole("option", { name: "0" })).not.toBeInTheDocument()
    // just make sure that the max level is there
    expect(screen.getByRole("option", { name: "4" })).toBeInTheDocument()
    await user.click(screen.getByRole("option", { name: "3" }))
    expect(qualityRow).toHaveTextContent("3")

    await user.click(screen.getByLabelText("Add Built Tough"))

    const qualityPurchasedRow = screen
      .getByLabelText("Remove Built Tough")
      .closest("tr")

    expect(qualityPurchasedRow).toHaveTextContent("3")
  })

  test("a quality should allows to select a name and level", async () => {
    const user = setup()

    expect(await screen.findByText("Dependents")).toBeInTheDocument()

    const qualityRow = screen.getByText("Dependents").closest("tr")

    // Select level
    const select = getByTextInElement(qualityRow, "1")
    await user.click(select)
    await user.click(screen.getByRole("option", { name: "3" }))

    // Select name
    await user.click(screen.getByLabelText("Select Dependents Name"))
    await user.keyboard("Wife and kids")

    await user.click(screen.getByLabelText("Add Dependents"))

    const qualityPurchasedRow = screen
      .getByLabelText("Remove Dependents")
      .closest("tr")

    expect(qualityPurchasedRow).toHaveTextContent("3")
    expect(qualityPurchasedRow).toHaveTextContent("Wife and kids")
  })

  test("display karma", async () => {
    setup("6")

    const karmaEl = (await screen.findAllByRole("term")).at(0)
    expect(karmaEl).toHaveTextContent("Karma")
    expect(karmaEl.closest("dl")).toHaveTextContent("50")
    expect(
      screen.getByRole("definition", { name: "Qualities Value" }),
    ).toHaveTextContent("0/6")
    expect(
      screen.getByRole("definition", { name: "Bonus Karma Value" }),
    ).toHaveTextContent("0/20")
  })
})
