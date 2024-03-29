import ProjectileWeapons from "."
import {
  render,
  runnerFromDB,
  setupIndexedDB,
  userEvent,
  waitFor,
  withTestRouter,
} from "../../../../test/testUtils"

describe("<ProjectileWeapons/>", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<ProjectileWeapons />, { query: { id } }))

  it("should add a weapon to the runner", async () => {
    const { getByLabelText, getByText } = setup()

    expect(runnerFromDB(8).resources).toBeUndefined()

    await waitFor(() => {
      expect(getByText("Resources")).toHaveAttribute("href", "/9/resources")
    })
    expect(getByText("8000¥/8000¥")).toBeInTheDocument()
    await userEvent.click(getByLabelText("Add Crossbow Light"))
    expect(getByText("7850¥/8000¥")).toBeInTheDocument()

    await waitFor(() => {
      expect(runnerFromDB(8).resources.projectile).toHaveLength(1)
    })
  })

  it("should remove projectile weapons", async () => {
    const { getByLabelText, getByText } = setup("10")

    expect(runnerFromDB(9).resources.projectile).toHaveLength(1)
    await waitFor(() => {
      expect(getByText("Purchased Projectile Weapons")).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText("Remove Bow10"))

    await waitFor(() => {
      expect(runnerFromDB(9).resources.projectile).toHaveLength(0)
    })
  })
})
