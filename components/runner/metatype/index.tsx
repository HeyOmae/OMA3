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
import metatypeData from "@/data/metatype.json"
import priorityData from "@/data/priorityTable.json"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { initRunnerAttributes, Metatypes, Runner } from "@/types/runner"
import { Attributes } from "@/types/RunnerAttributes"
import { DisplayPoints } from "./DisplayPoints"
import { AttributeSelection } from "./AttributeSelection"
import { ADJUSTMENT, SpendingPointsToggle } from "./SpendingPointsToggle"
import { PriorityWarning } from "../../priorityWarning"

const SET_METATYPE = Symbol("SET_METATYPE")
export const SPEND_ATTRIBUTE_POINTS = Symbol("SPEND_ATTRIBUTE_POINTS")
export const SPEND_ADJUSTMENT_POINTS = Symbol("SPEND_ADJUSTMENT_POINTS")
export const SPEND_KARMA = Symbol("SPEND_KARMA")

export interface Payload {
  metatype?: Metatypes
  key?: Attributes
  value?: number
}

function updateRunnerAttribute(
  runner: Runner,
  attributeKey: Attributes,
  pointsKey: string,
  newValue: number,
) {
  const attribute = runner.attributes?.[attributeKey]
  return {
    ...runner,
    attributes: {
      ...runner.attributes,
      [attributeKey]: {
        ...attribute,
        [pointsKey]: newValue < 0 ? 0 : newValue,
      },
    },
  }
}

export const Metatype = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { type, payload }) => {
      switch (type) {
        case SET_METATYPE:
          return {
            ...runner,
            metatype: payload.metatype,
            attributes: initRunnerAttributes,
          }
        case SPEND_ATTRIBUTE_POINTS: {
          const attribute = runner.attributes?.[payload.key]
          const newValue =
            payload.value - attribute.adjustment - (attribute.karma ?? 0)
          return updateRunnerAttribute(runner, payload.key, "points", newValue)
        }
        case SPEND_ADJUSTMENT_POINTS: {
          const attribute = runner.attributes?.[payload.key]
          const newValue =
            payload.value - attribute.points - (attribute.karma ?? 0)
          return updateRunnerAttribute(
            runner,
            payload.key,
            "adjustment",
            newValue,
          )
        }
        case SPEND_KARMA: {
          const attribute = runner.attributes?.[payload.key]
          const newValue =
            payload.value - attribute.points - attribute.adjustment
          return updateRunnerAttribute(runner, payload.key, "karma", newValue)
        }
      }
    },
  )

  const [pointToSpend, setPointToSpend] = useState(ADJUSTMENT)

  const availibleMetatypes =
    priorityData.metatypes[runner?.priority?.metatype]?.supportedMetatypes

  return runner ? (
    runner.priority?.metatype ? (
      <FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend">Metatypes</FormLabel>
          <RadioGroup
            aria-label="metatypes"
            name="metatypes"
            value={runner.metatype ?? ""}
            onChange={(event, metatype: Metatypes) =>
              dispatch({ type: SET_METATYPE, payload: { metatype } })
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
            {runner.priority.attributes ? (
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
            ) : (
              <PriorityWarning requirement="attributes" />
            )}
          </section>
        )}
      </FormGroup>
    ) : (
      <PriorityWarning requirement="metatype" />
    )
  ) : (
    <CircularProgress />
  )
}

export default Metatype
