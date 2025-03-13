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
      {gear.map(([key, gearRow]) => {
        const label = `${key}-table`
        return (
          <section key={key}>
            <h3 id={label}>{key}</h3>
            <table aria-labelledby={label}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>DV</th>
                  <th>AR</th>
                </tr>
              </thead>
              <tbody>
                {gearRow.map((gearItem, index: number) => (
                  <tr key={index}>
                    <td>{gearItem.name}</td>
                    <td>{gearItem?.weapon?.dv}</td>
                    <td>
                      {gearItem?.weapon?.ar
                        .map((n) => (n === 0 ? "-" : n))
                        .join("/")}
                    </td>
                    <td>{}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )
      })}
    </section>
  )
}
