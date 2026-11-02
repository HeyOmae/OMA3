import { FC, useCallback, useMemo } from "react"
import { Runner } from "@/types/runner"
import { PriorityRating } from "@/types/PriorityRating"
import priorityTableData from "@/data/priorityTable"
import { Gear } from "@/types/Resources"
import { useSinnerQualityNuyenModifier } from "@/hooks/useSinnerQualityNuyenModifier"

export interface Props {
  runner: Runner
}

const { resources } = priorityTableData

// nothing until the runner picks a priority for resources
const startingNuyen = (priority?: PriorityRating) =>
  priority ? resources[priority] : 0

export const RemainingNuyen: FC<Props> = ({ runner }) => {
  const sinnerModifier = useSinnerQualityNuyenModifier(runner)
  const costModifier = useCallback(
    (cost: number, gearType: string) => {
      switch (gearType) {
        case "lifestyle":
          return cost * sinnerModifier
        default:
          return cost
      }
    },
    [sinnerModifier],
  )

  const totalNuyen = useMemo(
      () =>
        startingNuyen(runner.priority?.resources) +
        ((
          (runner.qualities?.negative ?? []).some(
            ({ name }) => name === "In Debt",
          )
        ) ?
          5000
        : 2000) *
          (runner.karmaToNuyen ?? 0),
      [
        runner.karmaToNuyen,
        runner.priority?.resources,
        runner.qualities?.negative,
      ],
    ),
    { resources: runnerResouces } = runner,
    remainingNuyen: number = useMemo(() => {
      return Object.entries(runnerResouces ?? {}).reduce(
        (
          nuyenLeft: number,
          [gearType, categoryOfGear]: [string, (Gear & Gear)[]],
        ) =>
          nuyenLeft -
          categoryOfGear.reduce((totalNuyenForThisCategory, { cost, mods }) => {
            if (mods) {
              return (
                totalNuyenForThisCategory +
                cost +
                mods.reduce((acc, { cost }) => acc + cost, 0)
              )
            }
            return totalNuyenForThisCategory + costModifier(cost, gearType)
          }, 0),
        totalNuyen,
      )
    }, [costModifier, runnerResouces, totalNuyen])
  return (
    <dl>
      <dt aria-label="Nuyen">Nuyen:</dt>
      <dd aria-label="Nuyen Value">
        {remainingNuyen}&yen;/{totalNuyen}&yen;
      </dd>
    </dl>
  )
}
