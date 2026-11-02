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
import { ADJUSTMENT, ATTRIBUTE } from "../SpendingPointsToggle"
import { startingMagResRating } from "@/data/priorityTable"
import { initRunnerAttributes } from "@/types/runner"
import { isAwakened } from "@/types/MagRes"
import { defined, keyOf } from "@/components/util"

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
      ({ name }: { name: string }) =>
        name === qualityName
    const exceptionalAttribute = runner.qualities?.positive?.find(
      findQuality("Exceptional Attribute"),
    )?.selected

    const imparedAttribute = runner.qualities?.negative?.find(
      findQuality("Impaired"),
    )?.selected

    return (attribute: string) => {
      switch (attribute) {
        case exceptionalAttribute:
          return 1
        case imparedAttribute:
          return -1
        case "Magic":
          return runner.initiation?.length ?? 0
        default:
          return 0
      }
    }
  }, [
    runner.initiation?.length,
    runner.qualities?.negative,
    runner.qualities?.positive,
  ])

  const disableSlider = useCallback(
    (att: string, max: number) => {
      switch (pointToSpend) {
        case ADJUSTMENT:
          return max <= 6 && att !== "Edge"

        case ATTRIBUTE:
          return att === "Edge"

        default:
          // karma can raise any attribute
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
      default:
        return SPEND_KARMA
    }
  }, [pointToSpend])

  return (
    <>
      {runner.metatype && (
        <>
          {Object.entries<{ min: number; max: number }>(
            metatypeData[runner.metatype].Attributes,
          ).map(([attributeName, { min, max }]) => {
            const attribute = keyOf(attributeName, initRunnerAttributes)
            const modifiedMax = max + maxAttributeModifier(attribute)
            return (
              <AttributeSlider
                key={attribute}
                attribute={attribute}
                min={min}
                max={max}
                modifiedMax={modifiedMax}
                runner={runner}
                dispatch={dispatch}
                dispatchType={dispatchType}
                disableSlider={disableSlider}
              />
            )
          })}
          {isAwakened(runner.magres) && (
            <AttributeSlider
              attribute={
                runner.magres === "Technomancer" ? "Resonance" : "Magic"
              }
              min={startingMagResRating(runner.priority, runner.magres)}
              max={6}
              modifiedMax={
                6 +
                maxAttributeModifier(
                  runner.magres === "Technomancer" ? "Resonance" : "Magic",
                )
              }
              runner={runner}
              dispatch={dispatch}
              dispatchType={dispatchType}
              disableSlider={() => pointToSpend === ATTRIBUTE}
            />
          )}
        </>
      )}
    </>
  )
}

interface AttributeSliderProps {
  attribute: Attributes
  min: number
  max: number
  modifiedMax: number
  runner: Runner
  dispatch: DispatchAction<Payload>
  dispatchType: symbol
  disableSlider: (att: string, max: number) => boolean
}

// the points spent on an attribute, on top of the metatype's minimum
const attributeTotal = (runner: Runner, attribute: Attributes) => {
  const {
    adjustment,
    points,
    karma = 0,
  } = defined(runner.attributes?.[attribute], attribute)
  return adjustment + points + karma
}

const AttributeSlider: FC<AttributeSliderProps> = ({
  attribute,
  min,
  max,
  modifiedMax,
  runner,
  dispatch,
  dispatchType,
  disableSlider,
}) => (
  <div>
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
      value={min + attributeTotal(runner, attribute)}
      data-testid={`${attribute}-slider`}
      disabled={disableSlider(attribute, max)}
      onChange={(event, value: number) => {
        dispatch({
          type: dispatchType,
          payload: {
            key: attribute,
            value: value - min,
          },
        })
      }}
    />
  </div>
)
