import { Gear } from "@/types/Resources"
import { Runner } from "@/types/runner"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
}

// const weapons = {
//   melee: (gear: GearWeaponMelee) => {},
// }

export const GearTable: FC<Props> = ({ runner }) => {
  const gear = useMemo(
    () =>
      Object.entries(runner.resources ?? {}).sort(([categoryA], [categoryB]) =>
        categoryA.localeCompare(categoryB),
      ),
    [runner.resources],
  )
  return (
    <section>
      <h2 id="gear-table">Gear</h2>
      {gear.map(([key, gearRow]) => (
        <section key={key}>
          <h3>{key}</h3>
          <table aria-labelledby="weapons-table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {gearRow.map((gearItem: Gear, index: number) => (
                <tr key={index}>
                  <td>{gearItem.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </section>
  )
}
