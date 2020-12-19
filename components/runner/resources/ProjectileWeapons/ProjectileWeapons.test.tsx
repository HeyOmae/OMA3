import ProjectileWeapons, { ProjectileRow, RowProps } from "./"
import ProjectileData from "../../../../data/projectiles"
import { render } from "../../../../test/testUtils"

describe("<ProjectileWeapons/>", () => {
  describe("table", () => {
    const setup = () => render(<ProjectileWeapons />)
    it("should be display all the projectile weapons", () => {
      const { getByText } = setup()

      ProjectileData.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })
  })

  describe("row", () => {
    const rowProps: RowProps = {
      projectile: ProjectileData[0],
    }
    const setup = () =>
      render(
        <table>
          <tbody>
            <ProjectileRow {...rowProps} />
          </tbody>
        </table>,
      )

    it("should display the weapons stats", () => {
      const { getByText } = setup()

      expect(getByText(rowProps.projectile.name)).toBeInTheDocument()
      expect(
        getByText(rowProps.projectile.weapon.ar.join("/")),
      ).toBeInTheDocument()
      expect(getByText(rowProps.projectile.availability)).toBeInTheDocument()
      expect(getByText(`${rowProps.projectile.cost}¥`)).toBeInTheDocument()
    })
  })
})
