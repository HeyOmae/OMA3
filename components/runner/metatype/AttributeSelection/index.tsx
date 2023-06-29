import { FC, useMemo } from "react"
import { Payload, SPEND_ADJUSTMENT_POINTS, SPEND_ATTRIBUTE_POINTS } from ".."
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { Runner } from "@/types/runner"
import { Attributes } from "@/types/RunnerAttributes"
import metatypeData from "@/data/metatype.json"
import { Typography, Slider } from "@mui/material"

export interface Props {
  dispatch: DispatchAction<Payload>
  runner: Runner
  isSpendingAdjustmentPoints: boolean
}

export const AttributeSelection: FC<Props> = ({
  runner,
  dispatch,
  isSpendingAdjustmentPoints,
}) => {
  const exceptionalAttribute = useMemo(
    () =>
      runner?.qualities?.positive.find(
        ({ name }) => name === "Exceptional Attribute",
      ).selected,
    [runner?.qualities?.positive],
  )
  return (
    <>
      {metatypeData[runner.metatype] &&
        Object.entries(metatypeData[runner.metatype].Attributes).map(
          ([attribute, { min, max }]) => {
            const modifiedMax =
              max + (exceptionalAttribute === attribute ? 1 : 0)
            return (
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
                  max={modifiedMax}
                  value={
                    min +
                    runner.attributes[attribute].adjustment +
                    runner.attributes[attribute].points
                  }
                  data-testid={`${attribute}-slider`}
                  disabled={
                    isSpendingAdjustmentPoints
                      ? modifiedMax <= 6 && attribute !== "Edge"
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
            )
          },
        )}
    </>
  )
}
