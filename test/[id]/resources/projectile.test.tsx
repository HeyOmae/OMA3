import ProjectilePage from "../../../pages/[id]/resources/projectile"
import {
  render,
  setupIndexedDB,
  withTestRouter,
  waitFor,
} from "../../testUtils"
import ProjectileData from "../../../data/projectiles"

describe("Projectile Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<ProjectilePage />, { query: { id: "10" } }))

  it("should display projectile weapons that are not firearms", async () => {
    const { getByText } = setup()

    expect(getByText("Projectile Weapons")).toBeInTheDocument()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })
    ProjectileData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
