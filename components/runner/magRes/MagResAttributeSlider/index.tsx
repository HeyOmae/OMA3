import { FC } from "react"
import { Slider } from "@material-ui/core"
import { Payload, SET_MAGIC, SET_RESONANCE } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import {
  RunnerAttributes,
  SpecialAttributes,
} from "../../../../types/RunnerAttributes"
import { useSpendPoints } from "../../../../hooks/useSpendPoints"

export interface Props {
  adjustmentPoints: number
  attributes: RunnerAttributes
  attribute: SpecialAttributes
  min: number
  max: number
  dispatch: DispatchAction<symbol, Payload>
}

export const MagResAttributeSlider: FC<Props> = ({
  adjustmentPoints,
  attributes,
  attribute,
  min,
  max,
  dispatch,
}) => {
  const [adjustmentPointsLeft] = useSpendPoints(adjustmentPoints, 0, attributes)
  return (
    <>
      <h1>{attribute}</h1>
      <dl>
        <dt>Adjustment Points</dt>
        <dd className={adjustmentPointsLeft < 0 ? "bad-stuff" : ""}>
          {adjustmentPointsLeft}/{adjustmentPoints}
        </dd>
      </dl>
      <Slider
        value={min + attributes[attribute].adjustment}
        aria-labelledby={`${attribute} attribute`}
        getAriaValueText={(value) => value.toString()}
        valueLabelDisplay="auto"
        marks
        defaultValue={min}
        min={min}
        max={max}
        data-testid={`${attribute}-attribute-slider`}
        onChange={(event, value) =>
          dispatch({
            type: attribute === "Magic" ? SET_MAGIC : SET_RESONANCE,
            payload: { adjustment: +value - min },
          })
        }
      />
    </>
  )
}
