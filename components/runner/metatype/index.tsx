import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Slider,
} from "@material-ui/core"
import { useEffect } from "react"
import metatypeData from "../../../data/metatype.json"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { Metatypes } from "../../../types/runner"

const SET_METATYPE = Symbol("SET_METATYPE")

export const Metatype = () => {
  const [runner, dispatch, save] = useRunnerAccess<symbol, Metatypes>(
    (runner, { type, payload }) => {
      switch (type) {
        case SET_METATYPE:
          return {
            ...runner,
            metatype: payload,
          }
      }
    }
  )

  useEffect(() => {
    if (runner) save(runner)
  }, [runner])

  return runner ? (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Metatypes</FormLabel>
        <RadioGroup
          aria-label="metatypes"
          name="metatypes"
          value={runner.metatype ?? ""}
          onChange={(event, payload: Metatypes) =>
            dispatch({ type: SET_METATYPE, payload })
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
              />
            </div>
          )
        )}
    </div>
  ) : (
    <CircularProgress />
  )
}
