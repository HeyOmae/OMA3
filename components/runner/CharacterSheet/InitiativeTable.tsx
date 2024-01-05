import { FC, useMemo } from "react"
import { CharSheetTableProps } from "."
import { AttackRatingModifier } from "@/types/Resources"

interface Props extends CharSheetTableProps {
  attributes: Record<string, number>
}

export const InitiativeTable: FC<Props> = ({ attributes, runner }) => {
  return (
    <section>
      <h2 id="initiative-table">Initiative</h2>
      <table aria-labelledby="initiative-table">
        <thead>
          <tr>
            <th id="phy-init">Phy Init</th>
            <th id="mat-cold-init">Mat Cold Init</th>
            <th id="mat-hot-init">Mat Hot Init</th>
            <th>Ast Init</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-labelledby="phy-init">
              <PhysicalInit runner={runner} attributes={attributes} />
            </td>
            <MatrixInit runner={runner} attributes={attributes} />
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

const MatrixInit: FC<Props> = ({ runner, attributes }) => {
  const dni = runner.resources?.cyberware?.some(({ name }) => {
      return /(Cyber)jack/i.test(name)
    }),
    simmod = runner.resources?.cyberdeck?.length > 0,
    dataprocessing = attributes.log,
    { int } = attributes,
    init =
      runner.magres === "Technomancer" ? dataprocessing + int : `DP + ${int}`

  return runner.magres === "Technomancer" || (dni && simmod) ?
      <>
        <td aria-labelledby="mat-cold-init">{init} + 2d6</td>
        <td aria-labelledby="mat-hot-init">{init} + 3d6</td>
      </>
    : <>
        <td aria-labelledby="mat-cold-init">N/A</td>
        <td aria-labelledby="mat-hot-init">N/A</td>
      </>
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

const PhysicalInit: FC<Props> = ({ runner, attributes }) => {
  const physicalInitDice = useMemo(() => {
    const adeptPower = runner.powers?.find(
      ({ name }) => name === "Improved Reflexes",
    )
    if (adeptPower) {
      return adeptPower.level ?? 1
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
  return `${attributes.rea + attributes.int} + ${physicalInitDice + 1}d6`
}
