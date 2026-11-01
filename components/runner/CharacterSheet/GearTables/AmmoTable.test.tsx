import { render, screen, within } from "@/test/testUtils"
import ammo from "@/data/ammo"
import { AmmoTable } from "./AmmoTable"

describe("<AmmoTable />", () => {
  it("shows the type and number of rounds bought", () => {
    render(
      <table>
        <AmmoTable
          gearRow={[
            {
              ...ammo[1],
              name: "Caseless Explosive Heavy Pistol/SMG Ammo",
              currentRating: 4,
              ammo: { type: "Explosive", caseless: true },
            },
            { ...ammo[2], currentRating: 1 },
          ]}
        />
      </table>,
    )

    const [, caselessRow, regularRow] = screen.getAllByRole("row")

    expect(within(caselessRow).getAllByRole("cell")).toHaveLength(4)
    expect(caselessRow).toHaveTextContent(
      "Caseless Explosive Heavy Pistol/SMG AmmoExplosiveYes40",
    )
    expect(regularRow).toHaveTextContent("Rifle AmmoRegularNo10")
  })
})
