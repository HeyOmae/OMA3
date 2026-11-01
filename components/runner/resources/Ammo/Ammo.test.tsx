import ammo from "@/data/ammo"
import {
  render,
  runnerFromDB,
  screen,
  setupIndexedDB,
  SliderHelper,
  userEvent,
  waitFor,
  within,
  withTestRouter,
  closest,
} from "@/test/testUtils"
import Ammo from "./index"

describe("<Ammo />", () => {
  beforeAll(setupIndexedDB)
  const setup = () => render(withTestRouter(<Ammo />, { query: { id: "10" } }))

  const heavyPistolRow = () =>
    screen.getByLabelText(/Add .*Heavy Pistol\/SMG Ammo/).closest("tr")

  it("lists a row for each class of weapon", async () => {
    setup()

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    ammo.forEach(({ name }) => {
      expect(screen.getByLabelText(`Add Regular ${name}`)).toBeInTheDocument()
    })
  })

  it("has ammo for each class of weapon in the ammo costs table", async () => {
    setup()
    await screen.findByText("Buy")

    // class, then cost per bundle of 10 rounds, from the ammo costs table
    const classes = {
      "Holdout/Light Pistol/Machine Pistol": "5¥",
      "Heavy Pistol/SMG": "10¥",
      Rifle: "20¥",
      "Machine Gun": "15¥",
      Shotgun: "15¥",
      DMSO: "10¥",
      Taser: "10¥",
      "Injection Dart": "5¥",
      "Assault Cannon": "50¥",
    }

    expect(ammo).toHaveLength(Object.keys(classes).length)
    Object.entries(classes).forEach(([name, cost]) => {
      expect(
        screen.getByLabelText(`Add Regular ${name} Ammo`).closest("tr"),
      ).toHaveTextContent(cost)
    })
  })

  it("prices a bundle of 10 rounds by weapon class", async () => {
    setup()
    await screen.findByText("Buy")

    expect(heavyPistolRow()).toHaveTextContent("10¥")
    expect(heavyPistolRow()).toHaveTextContent("10")
  })

  it("prices by ammo type and bundles bought", async () => {
    setup()
    await screen.findByText("Buy")

    await userEvent.click(
      within(heavyPistolRow()).getByRole("combobox", { name: "Ammo type" }),
    )
    await userEvent.click(screen.getByRole("option", { name: "APDS" }))
    // x3 for APDS
    expect(heavyPistolRow()).toHaveTextContent("30¥")

    SliderHelper.change(
      screen.getByTestId("APDS Heavy Pistol/SMG Ammo-rating"),
      5,
      1,
      50,
    )
    expect(heavyPistolRow()).toHaveTextContent("150¥")
    // 5 bundles of 10 rounds
    expect(heavyPistolRow()).toHaveTextContent("50")
  })

  it("doubles the cost of caseless ammo", async () => {
    setup()
    await screen.findByText("Buy")

    await userEvent.click(
      within(heavyPistolRow()).getByRole("checkbox", { name: "Caseless" }),
    )

    expect(
      screen.getByLabelText("Add Caseless Regular Heavy Pistol/SMG Ammo"),
    ).toBeInTheDocument()
    expect(heavyPistolRow()).toHaveTextContent("20¥")
  })

  it("only offers regular rounds for DMSO, darts, tasers and assault cannons", async () => {
    setup()
    await screen.findByText("Buy")

    ;["Assault Cannon", "DMSO", "Injection Dart", "Taser"].forEach((name) => {
      const row = closest(
        screen.getByLabelText(`Add Regular ${name} Ammo`),
        "tr",
      )

      expect(
        within(row).queryByRole("combobox", { name: "Ammo type" }),
      ).not.toBeInTheDocument()
      expect(
        within(row).queryByRole("checkbox", { name: "Caseless" }),
      ).not.toBeInTheDocument()
    })
  })

  it("buys and sells ammo", async () => {
    setup()
    await screen.findByText("Buy")

    await userEvent.click(
      within(heavyPistolRow()).getByRole("combobox", { name: "Ammo type" }),
    )
    await userEvent.click(screen.getByRole("option", { name: "Gel" }))
    SliderHelper.change(
      screen.getByTestId("Gel Heavy Pistol/SMG Ammo-rating"),
      3,
      1,
      50,
    )
    await userEvent.click(
      screen.getByLabelText("Add Gel Heavy Pistol/SMG Ammo"),
    )

    const sellButton = await screen.findByLabelText(
      "Remove Gel Heavy Pistol/SMG Ammo",
    )
    expect(sellButton.closest("tr")).toHaveTextContent("30")
    expect(sellButton.closest("tr")).toHaveTextContent("45¥")
    await waitFor(() =>
      expect(runnerFromDB(9).resources?.ammo?.[0]).toMatchObject({
        name: "Gel Heavy Pistol/SMG Ammo",
        cost: 45,
        currentRating: 3,
        ammo: { type: "Gel", caseless: false },
      }),
    )

    await userEvent.click(sellButton)

    await waitFor(() =>
      expect(
        screen.queryByLabelText("Remove Gel Heavy Pistol/SMG Ammo"),
      ).not.toBeInTheDocument(),
    )
  })
})
