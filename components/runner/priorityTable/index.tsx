import { useEffect } from "react"
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@material-ui/core"
import priorityData from "../../../data/priorityTable.json"
import { PriorityRating } from "../../../types/runner"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"

// Action Types
const METATYPE = Symbol("METATYPE")
const ATTRIBUTES = Symbol("ATTRIBUTES")

export const PriorityTable = () => {
  const [runner, dispatch, save] = useRunnerAccess<symbol, PriorityRating>(
    (runner, { type, payload }) => {
      switch (type) {
        case METATYPE:
          return {
            ...runner,
            priority: {
              ...runner.priority,
              metatype: payload,
            },
          }

        case ATTRIBUTES:
          return {
            ...runner,
            priority: {
              ...runner.priority,
              attributes: payload,
            },
          }

        default:
          return runner
      }
    }
  )

  useEffect(() => {
    if (runner) save(runner)
  }, [runner])

  return runner ? (
    <Grid container direction="column" justify="center" alignItems="baseline">
      <FormControl component="fieldset">
        <FormLabel component="legend">Metatype</FormLabel>
        <RadioGroup
          aria-label="metatype"
          name="metatype"
          value={runner.priority?.metatype ?? ""}
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: METATYPE, payload })
          }
        >
          {Object.entries(priorityData.metatypes).map(
            ([key, { supportedMetatypes, adjustmentPoints }]) => (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio />}
                label={`${supportedMetatypes.join(", ")} (${adjustmentPoints})`}
              />
            )
          )}
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Attributes</FormLabel>
        <RadioGroup
          aria-label="attributes"
          name="attributes"
          value={runner.priority?.attributes ?? ""}
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: ATTRIBUTES, payload })
          }
        >
          {Object.entries(priorityData.attributes).map(([key, value]) => (
            <FormControlLabel
              key={key}
              value={key}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  ) : (
    <CircularProgress />
  )
}

export default PriorityTable
