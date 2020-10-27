import { FC } from "react"
import { Payload, SPEND_ADJUSTMENT_POINTS, SPEND_ATTRIBUTE_POINTS } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { Runner } from "../../../../types/runner"
import { Attributes } from "../../../../types/RunnerAttributes"
import metatypeData from "../../../../data/metatype.json"
import { Typography, Slider } from "@material-ui/core"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
  runner: Runner
  isSpendingAdjustmentPoints: boolean
}

export const AttributeSelection: FC<Props> = ({
  runner,
  dispatch,
  isSpendingAdjustmentPoints,
}) => (
  <>
    {metatypeData[runner.metatype] &&
      Object.entries(metatypeData[runner.metatype].Attributes).map(
        ([attribute, { min, max }]) => (
          <div key={attribute}>
            <Typography id={`${attribute}-slider`} gutterBottom>
              {attribute}
            </Typography>
            <Slider
              defaultValue={1}
              getAriaValueText={(value) => value.toString()}
              aria-labelledby={`${attribute}-slider`}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={min}
              max={max}
              value={
                min +
                runner.attributes[attribute].adjustment +
                runner.attributes[attribute].points
              }
              data-testid={`${attribute}-slider`}
              disabled={
                isSpendingAdjustmentPoints
                  ? max <= 6 && attribute !== "Edge"
                  : attribute === "Edge"
              }
              onChange={(event, value: number) => {
                dispatch({
                  type: isSpendingAdjustmentPoints
                    ? SPEND_ADJUSTMENT_POINTS
                    : SPEND_ATTRIBUTE_POINTS,
                  payload: {
                    key: attribute as Attributes,
                    value: value - min,
                  },
                })
              }}
            />
          </div>
        ),
      )}
  </>
)
