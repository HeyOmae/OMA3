import { ProjectileTable, ProjectileRow, RowProps, Props } from "."
import ProjectileData from "../../../../../data/projectiles"
import { render } from "../../../../../test/testUtils"
import { AddProjectileButton } from "./AddProjectileButton"
import { RemoveProjectileButton } from "./RemoveProjectileButton"

describe("<ProjectileTable/>", () => {
  describe("table", () => {
    const setup = ({
      ActionButton = AddProjectileButton,
      labelActionButton,
    }: Partial<Props> = {}) => {
      const props: Props = {
        dispatch: jest.fn(),
        weapons: ProjectileData,
        ActionButton,
        labelActionButton,
      }
      return { ...render(<ProjectileTable {...props} />), props }
    }
    it("should be display all the projectile weapons", () => {
      const { getByText } = setup()

      ProjectileData.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })

    it("should dispatch the add weapon projectile", () => {
      const { getByLabelText, props } = setup()

      getByLabelText("Add Bow1").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: ProjectileData[0],
      })
    })

    it("should dispatch the remove projectile action", () => {
      const { getByLabelText, getByText, props } = setup({
        ActionButton: RemoveProjectileButton,
        labelActionButton: "Sell",
      })

      expect(getByText("Sell")).toBeInTheDocument()
      getByLabelText("Remove Bow2").click()

      expect(props.dispatch).toHaveBeenCalledWith({
        type: undefined,
        payload: 1,
      })
    })
  })

  describe("row", () => {
    const rowProps: RowProps = {
      projectile: ProjectileData[0],
      children: <button>+</button>,
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
