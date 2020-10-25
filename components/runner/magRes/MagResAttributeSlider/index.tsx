import { FC } from "react"
import { Slider } from "@material-ui/core"
import { Payload, SET_MAGIC, SET_RESONANCE } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { SpecialAttributes } from "../../../../types/RunnerAttributes"

export interface Props {
  adjustmentPoints: number
  attribute: SpecialAttributes
  min: number
  max: number
  dispatch: DispatchAction<symbol, Payload>
}

export const MagResAttributeSlider: FC<Props> = ({
  adjustmentPoints,
  attribute,
  min,
  max,
  dispatch,
}) => (
  <>
    <h1>{attribute}</h1>
    <Slider
      value={min + adjustmentPoints}
      aria-labelledby={`${attribute} attribute`}
      getAriaValueText={(value) => value.toString()}
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
