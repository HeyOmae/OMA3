import { CircularProgress, Grid } from "@mui/material"
import { DispatchAction, useRunnerAccess } from "@/hooks/useRunnerAccess"
import { FC } from "react"
import { defined } from "@/components/util"
import { MagRes as MagicResonance } from "@/types/MagRes"
import { MagResSelection } from "./MagResSelection"
import priorityData from "@/data/priorityTable.json"
import {
  MagResPriorityTableOptions,
  PriorityTypes,
} from "@/types/PriorityRating"
import { Runner } from "@/types/runner"
import { MagResAttributeSlider } from "./MagResAttributeSlider"
import { PriorityWarning } from "../../priorityWarning"
import { RemainingSpells } from "./RemainingSpells"
import styles from "./magRes.module.css"
import { Payload } from "./magResActions"
import { magResReducer } from "./magResReducer"
import { GrowthSections, KnownMagRes, LearnableMagRes } from "./MagResSections"

// The actions are imported from here by everything that dispatches them
export * from "./magResActions"

// The part of the priority table the runner still has to fill in
const missingRequirement = (runner: Runner): PriorityTypes | undefined => {
  if (!runner.priority?.metatype) return "metatype"
  if (!runner.priority["mag/res"]) return "mag/res"
  if (!runner.attributes && runner.priority["mag/res"] !== "E") {
    return "attributes"
  }
}

interface AwakenedProps {
  runner: Runner
  magres: Exclude<MagicResonance, "Mundane">
  priority: MagResPriorityTableOptions
  dispatch: DispatchAction<Payload>
}

const Awakened: FC<AwakenedProps> = ({
  runner,
  magres,
  priority,
  dispatch,
}) => {
  const [attribute, baseRating] = defined(priority[magres], magres)
  const metatypePriority = defined(runner.priority?.metatype, "metatype")

  return (
    <>
      <MagResAttributeSlider
        adjustmentPoints={
          priorityData.metatypes[metatypePriority].adjustmentPoints
        }
        attribute={attribute}
        min={baseRating}
        max={6}
        attributes={defined(runner.attributes, "attributes")}
        dispatch={dispatch}
      />
      <Grid container spacing={2}>
        <Grid size={12}>
          <RemainingSpells runner={runner} baseMagic={baseRating} />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} className={styles.scrollGrid}>
          <LearnableMagRes runner={runner} dispatch={dispatch} />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} className={styles.scrollGrid}>
          <KnownMagRes runner={runner} dispatch={dispatch} />
        </Grid>
      </Grid>
    </>
  )
}

export const MagRes = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(magResReducer)

  if (!runner) {
    return <CircularProgress />
  }
  const missing = missingRequirement(runner)
  if (missing) {
    return <PriorityWarning requirement={missing} />
  }
  const priority = priorityData["mag/res"][
    defined(runner.priority?.["mag/res"], "mag/res")
  ] as MagResPriorityTableOptions

  return (
    <>
      <MagResSelection
        selected={runner.magres}
        dispatch={dispatch}
        priority={priority}
      />
      {runner.magres &&
        (runner.magres === "Mundane" ?
          <h1>Nothing Special Here...</h1>
        : <Awakened
            runner={runner}
            magres={runner.magres}
            priority={priority}
            dispatch={dispatch}
          />)}
      <GrowthSections runner={runner} />
    </>
  )
}

export default MagRes
