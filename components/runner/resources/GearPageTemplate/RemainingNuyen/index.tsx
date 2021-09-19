import { FC, useMemo } from "react"
import { Runner } from "@/types/runner"
import priorityTableData from "@/data/priorityTable.json"
import { Gear, GearModdableRated } from "@/types/Resources"

export interface Props {
  runner: Runner
}

const { resources } = priorityTableData

export const RemainingNuyen: FC<Props> = ({ runner }) => {
  const totalNuyen = resources[runner.priority.resources],
    { resources: runnerResouces } = runner,
    remainingNuyen: number = useMemo(() => {
      return Object.values(runnerResouces ?? {}).reduce(
        (nuyenLeft: number, categoryOfGear: (Gear & GearModdableRated)[]) =>
          nuyenLeft -
          categoryOfGear.reduce((totalNuyenForThisCategory, { cost, mods }) => {
            if (mods) {
              return (
                totalNuyenForThisCategory +
                cost +
                mods.reduce((acc, { cost }) => acc + cost, 0)
              )
            }
            return totalNuyenForThisCategory + cost
          }, 0),
        totalNuyen,
      )
    }, [runnerResouces, totalNuyen])
  return (
    <dl>
      <dt>Nuyen:</dt>
      <dd>
        {remainingNuyen}&yen;/{totalNuyen}&yen;
      </dd>
    </dl>
  )
}
