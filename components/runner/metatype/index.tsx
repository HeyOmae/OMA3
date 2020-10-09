import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Slider,
} from "@material-ui/core"
import { useEffect } from "react"
import metatypeData from "../../../data/metatype.json"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { Attributes, Metatypes } from "../../../types/runner"

const SET_METATYPE = Symbol("SET_METATYPE")
const SET_ATTRIBUTE = Symbol("SET_ATTRIBUTE")

interface Payload {
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
          }
        case SET_ATTRIBUTE:
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              [payload.key]: {
                ...runner.attributes?.[payload.key],
                points: payload.value,
              },
            },
          }
      }
    }
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
                data-testid={`${attribute}-slider`}
                onChange={(event, value: number) => {
                  dispatch({
                    type: SET_ATTRIBUTE,
                    payload: {
                      key: attribute as Attributes,
                      value,
                    },
                  })
                }}
              />
            </div>
          )
        )}
    </FormGroup>
  ) : (
    <CircularProgress />
  )
}
