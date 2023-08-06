import { FC, useCallback, useMemo } from "react"
import {
  Payload,
  SPEND_ADJUSTMENT_POINTS,
  SPEND_ATTRIBUTE_POINTS,
  SPEND_KARMA,
} from ".."
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { Runner } from "@/types/runner"
import { Attributes } from "@/types/RunnerAttributes"
import metatypeData from "@/data/metatype.json"
import { Typography, Slider } from "@mui/material"
import { ADJUSTMENT, ATTRIBUTE, KARMA } from "../SpendingPointsToggle"

export interface Props {
  dispatch: DispatchAction<Payload>
  runner: Runner
  pointToSpend: string
}

export const AttributeSelection: FC<Props> = ({
  runner,
  dispatch,
  pointToSpend,
}) => {
  const maxAttributeModifier = useMemo(() => {
    const findQuality =
      (qualityName: string) =>
      ({ name }) =>
        name === qualityName
    const exceptionalAttribute = runner.qualities?.positive.find(
      findQuality("Exceptional Attribute"),
    ).selected

    const imparedAttribute = runner.qualities?.negative.find(
      findQuality("Impaired"),
    ).selected

    return (attribute: string) => {
      switch (attribute) {
        case exceptionalAttribute:
          return 1
        case imparedAttribute:
          return -1
        default:
          return 0
      }
    }
  }, [runner.qualities?.negative, runner.qualities?.positive])

  const disableSlider = useCallback(
    (att: string, max: number) => {
      switch (pointToSpend) {
        case ADJUSTMENT:
          return max <= 6 && att !== "Edge"

        case ATTRIBUTE:
          return att === "Edge"

        case KARMA:
          return false
      }
    },
    [pointToSpend],
  )

  const dispatchType = useMemo(() => {
    switch (pointToSpend) {
      case ADJUSTMENT:
        return SPEND_ADJUSTMENT_POINTS
      case ATTRIBUTE:
        return SPEND_ATTRIBUTE_POINTS
      case KARMA:
        return SPEND_KARMA
    }
  }, [pointToSpend])

  return (
    <>
      {metatypeData[runner.metatype] &&
        Object.entries(metatypeData[runner.metatype].Attributes).map(
          ([attribute, { min, max }]) => {
            const modifiedMax = max + maxAttributeModifier(attribute)
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
                    runner.attributes[attribute].points +
                    (runner.attributes[attribute].karma ?? 0)
                  }
                  data-testid={`${attribute}-slider`}
                  disabled={disableSlider(attribute, max)}
                  onChange={(event, value: number) => {
                    dispatch({
                      type: dispatchType,
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
