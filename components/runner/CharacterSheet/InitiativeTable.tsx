import { FC, useMemo } from "react"
import { CharSheetTableProps } from "."

interface Props extends CharSheetTableProps {
  attributes: Record<string, number>
}

export const InitiativeTable: FC<Props> = ({ attributes, runner }) => {
  const physicalInitDice = useMemo(() => {
    const wiredReflex = runner.resources.cyberware.find(({ name }) =>
      /Wired Reflexes/.test(name),
    )
    return Array.isArray(wiredReflex.modifications.attrmod) ?
        wiredReflex.modifications.attrmod.find(
          ({ attribute }) => attribute === "INITIATIVE DICE PHYSICAL",
        ).value
      : 0
  }, [runner.resources.cyberware])
  return (
    <section>
      <h2 id="initiative-table">Initiative</h2>
      <table aria-labelledby="initiative-table">
        <thead>
          <tr>
            <th id="phy-init">Phy Init</th>
            <th>Mat Cold Init</th>
            <th>Mat Hot Init</th>
            <th>Ast Init</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-labelledby="phy-init">
              {attributes.rea + attributes.int} + {physicalInitDice + 1}d6
            </td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
