import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"
import { useEffect, useState } from "react"
import metatypeData from "../../../data/metatype.json"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import {
  Attributes,
  initRunnerAttributes,
  Metatypes,
} from "../../../types/runner"
import { DisplayPoints } from "./DisplayPoints"
import { AttributeSelection } from "./AttributeSelection"
import { SpendingPointsToggle } from "./SpendingPointsToggle"

const SET_METATYPE = Symbol("SET_METATYPE")
export const SPEND_ATTRIBUTE_POINTS = Symbol("SPEND_ATTRIBUTE_POINTS")
export const SPEND_ADJUSTMENT_POINTS = Symbol("SPEND_ADJUSTMENT_POINTS")

export interface Payload {
  metatype?: Metatypes
  key?: Attributes
  value?: number
}

export const Metatype = () => {
  const [runner, dispatch, save] = useRunnerAccess<symbol, Payload>(
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
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              [payload.key]: {
                ...attribute,
                points: payload.value - attribute.adjustment,
              },
            },
          }
        }
        case SPEND_ADJUSTMENT_POINTS: {
          const attribute = runner.attributes?.[payload.key]
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              [payload.key]: {
                ...attribute,
                adjustment: payload.value - attribute.points,
              },
            },
          }
        }
      }
    }
  )

  const [isSpendingAdjustmentPoints, setIsSpendingAdjustmentPoints] = useState(
    true
  )

  useEffect(() => {
    if (runner) save(runner)
  }, [runner])

  return runner ? (
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
              key={metatypeName}
              value={metatypeName}
              control={<Radio />}
              label={metatypeName}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <h1>Attributes</h1>
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
    </FormGroup>
  ) : (
    <CircularProgress />
  )
}

export default Metatype
