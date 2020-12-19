import ProjectilePage from "../../../pages/[id]/resources/projectile"
import { render, setupIndexedDB, withTestRouter } from "../../testUtils"
import ProjectileData from "../../../data/projectiles"

describe("Projectile Page", () => {
  beforeAll(setupIndexedDB)

  const setup = () =>
    render(withTestRouter(<ProjectilePage />, { query: { id: "10" } }))

  it("should display projectile weapons that are not firearms", () => {
    const { getByText } = setup()

    expect(getByText("Projectile Weapons")).toBeInTheDocument()

    ProjectileData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
