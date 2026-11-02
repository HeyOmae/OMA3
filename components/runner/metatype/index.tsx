import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { useState } from "react"
import metatypeData from "@/data/metatype"
import priorityData from "@/data/priorityTable"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { keyOf } from "@/components/util"
import { metatypeReducer } from "./metatypeReducer"
import { Payload, SET_METATYPE } from "./metatypeActions"
import { DisplayPoints } from "./DisplayPoints"
import { AttributeSelection } from "./AttributeSelection"
import { ADJUSTMENT, SpendingPointsToggle } from "./SpendingPointsToggle"
import { PriorityWarning } from "../../priorityWarning"

// The actions are imported from here by everything that dispatches them
export * from "./metatypeActions"

export const Metatype = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(metatypeReducer)

  const [pointToSpend, setPointToSpend] = useState(ADJUSTMENT)

  const metatypePriority = runner?.priority?.metatype
  const availibleMetatypes: string[] =
    metatypePriority ?
      priorityData.metatypes[metatypePriority].supportedMetatypes
    : []

  return (
    runner ?
      runner.priority?.metatype ?
        <FormGroup>
          <FormControl component="fieldset">
            <FormLabel component="legend">Metatypes</FormLabel>
            <RadioGroup
              aria-label="metatypes"
              name="metatypes"
              value={runner.metatype ?? ""}
              onChange={(event, metatype) =>
                dispatch({
                  type: SET_METATYPE,
                  payload: { metatype: keyOf(metatype, metatypeData) },
                })
              }
            >
              {Object.keys(metatypeData).map((metatypeName) => (
                <FormControlLabel
                  disabled={!availibleMetatypes.includes(metatypeName)}
                  key={metatypeName}
                  value={metatypeName}
                  control={<Radio />}
                  label={metatypeName}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {runner.attributes && (
            <section>
              <h1>Attributes</h1>
              {runner.priority.attributes ?
                <>
                  <DisplayPoints runner={runner} />
                  <SpendingPointsToggle
                    pointToSpend={pointToSpend}
                    selectSpending={setPointToSpend}
                  />
                  <AttributeSelection
                    runner={runner}
                    dispatch={dispatch}
                    pointToSpend={pointToSpend}
                  />
                </>
              : <PriorityWarning requirement="attributes" />}
            </section>
          )}
        </FormGroup>
      : <PriorityWarning requirement="metatype" />
    : <CircularProgress />
  )
}

export default Metatype
