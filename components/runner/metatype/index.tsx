import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"
import { useState } from "react"
import metatypeData from "@/data/metatype.json"
import priorityData from "@/data/priorityTable.json"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { initRunnerAttributes, Metatypes } from "@/types/runner"
import { Attributes } from "@/types/RunnerAttributes"
import { DisplayPoints } from "./DisplayPoints"
import { AttributeSelection } from "./AttributeSelection"
import { SpendingPointsToggle } from "./SpendingPointsToggle"
import { PriorityWarning } from "../../priorityWarning"

const SET_METATYPE = Symbol("SET_METATYPE")
export const SPEND_ATTRIBUTE_POINTS = Symbol("SPEND_ATTRIBUTE_POINTS")
export const SPEND_ADJUSTMENT_POINTS = Symbol("SPEND_ADJUSTMENT_POINTS")

export interface Payload {
  metatype?: Metatypes
  key?: Attributes
  value?: number
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
          const newValue = payload.value - attribute.adjustment
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              [payload.key]: {
                ...attribute,
                points: newValue < 0 ? 0 : newValue,
              },
            },
          }
        }
        case SPEND_ADJUSTMENT_POINTS: {
          const attribute = runner.attributes?.[payload.key]
          const newValue = payload.value - attribute.points
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              [payload.key]: {
                ...attribute,
                adjustment: newValue < 0 ? 0 : newValue,
              },
            },
          }
        }
      }
    },
  )

  const [isSpendingAdjustmentPoints, setIsSpendingAdjustmentPoints] =
    useState(true)

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
          <>
            <h1>Attributes</h1>
            {runner.priority.attributes ? (
              <>
                <DisplayPoints runner={runner} />
                <SpendingPointsToggle
                  isSpendingAdjustmentPoints={isSpendingAdjustmentPoints}
                  toggleSpending={() =>
                    setIsSpendingAdjustmentPoints(!isSpendingAdjustmentPoints)
                  }
                />
                <AttributeSelection
                  runner={runner}
                  dispatch={dispatch}
                  isSpendingAdjustmentPoints={isSpendingAdjustmentPoints}
                />
              </>
            ) : (
              <PriorityWarning requirement="attributes" />
            )}
          </>
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
