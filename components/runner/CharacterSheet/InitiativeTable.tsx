import { FC, useMemo } from "react"
import { CharSheetTableProps } from "."
import { AttackRatingModifier } from "@/types/Resources"

interface Props extends CharSheetTableProps {
  attributes: Record<string, number>
}

export const InitiativeTable: FC<Props> = ({ attributes, runner }) => {
  const physicalInitDice = useMemo(() => {
    const adeptPower = runner.powers?.find(
      ({ name }) => name === "Improved Reflexes",
    )
    if (adeptPower) {
      return adeptPower.level
    }
    const wiredReflex = runner.resources?.cyberware?.find(({ name }) =>
      /Wired Reflexes/.test(name),
    )
    const synapticBooster = runner.resources?.bioware?.find(({ name }) =>
      /Synaptic Booster/.test(name),
    )
    const initiativeBoosterWare = wiredReflex || synapticBooster
    return Array.isArray(initiativeBoosterWare?.modifications.attrmod) ?
        findInitBonusDices(
          initiativeBoosterWare.modifications.attrmod,
          initiativeBoosterWare.currentRating,
        )
      : 0
  }, [runner.powers, runner.resources?.bioware, runner.resources?.cyberware])
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

function findInitBonusDices(
  modifiers: AttackRatingModifier[],
  rating: number = 1,
) {
  return (
    modifiers.find(({ attribute }) => attribute === "INITIATIVE DICE PHYSICAL")
      .value * rating
  )
}
