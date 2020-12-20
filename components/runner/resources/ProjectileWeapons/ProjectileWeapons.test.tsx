import ProjectileWeapons from "."
import {
  render,
  runnerFromDB,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "../../../../test/testUtils"

describe("<ProjectileWeapons/>", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<ProjectileWeapons />, { query: { id: "9" } }))

  it("should add a weapon to weapon to the runner", async () => {
    const { getByLabelText } = setup()

    expect(runnerFromDB(8).resources).toBeUndefined()

    await waitFor(() => {
      expect(getByLabelText("Add Crossbow Light")).toBeInTheDocument()
    })
    getByLabelText("Add Crossbow Light").click()

    await waitFor(() => {
      expect(runnerFromDB(8).resources.projectile).toHaveLength(1)
    })
  })
})
