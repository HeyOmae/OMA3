import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material"
import priorityData from "@/data/priorityTable"
import { PriorityRating, PriorityTypes } from "@/types/PriorityRating"
import { keyOf } from "@/components/util"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import styles from "./priorityTable.module.css"

const SET_PRIORITY = Symbol("SET_PRIORITY")

interface Payload {
  key: PriorityTypes
  rating: PriorityRating
}

export const PriorityTable = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { payload: { key, rating } }) => ({
      ...runner,
      priority: { ...runner.priority, [key]: rating },
    }),
  )

  // the radio buttons give back the rating as a string
  const setPriority =
    (key: PriorityTypes) => (event: unknown, rating: string) =>
      dispatch({
        type: SET_PRIORITY,
        // every column of the table has the same ratings
        payload: { key, rating: keyOf(rating, priorityData.resources) },
      })

  return runner ?
      <div className={styles.priortiyTable}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Metatype</FormLabel>
          <RadioGroup
            className={styles.column}
            aria-label="metatype"
            name="metatype"
            value={runner.priority?.metatype ?? ""}
            onChange={setPriority("metatype")}
          >
            {Object.entries(priorityData.metatypes).map(
              ([key, { supportedMetatypes, adjustmentPoints }]) => (
                <FormControlLabel
                  className={styles.item}
                  key={key}
                  value={key}
                  control={<Radio />}
                  label={`${supportedMetatypes.join(
                    ", ",
                  )} (${adjustmentPoints})`}
                />
              ),
            )}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Attributes</FormLabel>
          <RadioGroup
            className={styles.column}
            aria-label="attributes"
            name="attributes"
            value={runner.priority?.attributes ?? ""}
            onChange={setPriority("attributes")}
          >
            {Object.entries(priorityData.attributes).map(([key, value]) => (
              <FormControlLabel
                className={styles.item}
                key={key}
                value={key}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Skills</FormLabel>
          <RadioGroup
            className={styles.column}
            aria-label="skills"
            name="skills"
            value={runner.priority?.skills ?? ""}
            onChange={setPriority("skills")}
          >
            {Object.entries(priorityData.skills).map(([key, value]) => (
              <FormControlLabel
                className={styles.item}
                key={key}
                value={key}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Mag/Res</FormLabel>
          <RadioGroup
            className={styles.column}
            aria-label="mag/res"
            name="mag/res"
            value={runner.priority?.["mag/res"] ?? ""}
            onChange={setPriority("mag/res")}
          >
            {Object.entries(priorityData["mag/res"]).map(([key, value]) => (
              <FormControlLabel
                className={styles.item}
                key={key}
                value={key}
                control={<Radio />}
                label={Object.entries(value)
                  .map(
                    ([type, [attribute, rating]]) =>
                      `${type}${attribute ? `: ${rating} ${attribute}` : ""}`,
                  )
                  .join(", ")}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Resources</FormLabel>
          <RadioGroup
            className={styles.column}
            aria-label="resources"
            name="resources"
            value={runner.priority?.resources ?? ""}
            onChange={setPriority("resources")}
          >
            {Object.entries(priorityData.resources).map(([key, value]) => (
              <FormControlLabel
                className={styles.item}
                key={key}
                value={key}
                control={<Radio />}
                label={<>{value}&yen;</>}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    : <CircularProgress />
}

export default PriorityTable
