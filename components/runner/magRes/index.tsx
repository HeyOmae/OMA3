import { CircularProgress, Grid } from "@mui/material"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
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
    runner.priority["mag/res"]
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
        : <>
            <MagResAttributeSlider
              adjustmentPoints={
                priorityData.metatypes[runner.priority.metatype]
                  .adjustmentPoints
              }
              attribute={priority[runner.magres][0]}
              min={priority[runner.magres][1]}
              max={6}
              attributes={runner.attributes}
              dispatch={dispatch}
            />
            <Grid container spacing={2}>
              <Grid size={12}>
                <RemainingSpells
                  runner={runner}
                  baseMagic={priority[runner.magres][1]}
                />
              </Grid>
              <Grid size={{ sm: 12, md: 6 }} className={styles.scrollGrid}>
                <LearnableMagRes runner={runner} dispatch={dispatch} />
              </Grid>
              <Grid size={{ sm: 12, md: 6 }} className={styles.scrollGrid}>
                <KnownMagRes runner={runner} dispatch={dispatch} />
              </Grid>
            </Grid>
          </>)}
      <GrowthSections runner={runner} />
    </>
  )
}

export default MagRes
