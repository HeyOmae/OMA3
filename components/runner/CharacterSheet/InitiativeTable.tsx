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
            <th id="ast-init">Ast Init</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-labelledby="phy-init">
              <PhysicalInit runner={runner} attributes={attributes} />
            </td>
            <MatrixInit runner={runner} attributes={attributes} />
            <td aria-labelledby="ast-init">
              {attributes.log + attributes.int} + 2d6
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

type SimModes = "hot" | "cold" | undefined

const simModuleModes = {
  "Sim Module": "cold",
  "Sim Module Hot": "hot",
}

const MatrixInit: FC<Props> = ({ runner, attributes: { int } }) => {
  const hasDni =
      runner.magres === "Technomancer" ||
      runner.resources?.cyberware?.some(({ name }) =>
        /(Cyber|Data)jack|Control\sRig/i.test(name),
      ) ||
      runner.resources?.electronicAccessories?.some(
        ({ name }) => name === "Trodes",
      ),
    simmod: SimModes =
      runner.magres === "Technomancer" ? "hot"
      : (
        (runner.resources?.cyberdeck?.length ||
          runner.resources?.riggerConsole?.length) > 0
      ) ?
        "hot"
      : simModuleModes[
          runner.resources?.electronicAccessories?.find(({ name }) =>
            /Sim Module/.test(name),
          ).name
        ]

  return (
    <>
      <td aria-labelledby="mat-cold-init">
        {(hasDni && simmod && `DP + ${int} + 2d6`) || "N/A"}
      </td>
      <td aria-labelledby="mat-hot-init">
        {(hasDni && simmod === "hot" && `DP + ${int} + 3d6`) || "N/A"}
      </td>
    </>
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
