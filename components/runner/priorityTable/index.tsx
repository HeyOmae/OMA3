import { useEffect } from "react"
import {
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
import styles from "./priorityTable.module.css"

// Action Types
const METATYPE = Symbol("METATYPE")
const ATTRIBUTES = Symbol("ATTRIBUTES")
const SKILLS = Symbol("SKILLS")
const MAGRES = Symbol("MAGRES")
const RESOURCES = Symbol("RESOURCES")

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

        case SKILLS:
          return {
            ...runner,
            priority: {
              ...runner.priority,
              skills: payload,
            },
          }

        case MAGRES:
          return {
            ...runner,
            priority: {
              ...runner.priority,
              "mag/res": payload,
            },
          }

        case RESOURCES:
          return {
            ...runner,
            priority: {
              ...runner.priority,
              resources: payload,
            },
          }
      }
    }
  )

  useEffect(() => {
    if (runner) save(runner)
  }, [runner])

  return runner ? (
    <div className={styles.priortiyTable}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Metatype</FormLabel>
        <RadioGroup
          className={styles.column}
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
                className={styles.item}
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
          className={styles.column}
          aria-label="attributes"
          name="attributes"
          value={runner.priority?.attributes ?? ""}
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: ATTRIBUTES, payload })
          }
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
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: SKILLS, payload })
          }
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
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: MAGRES, payload })
          }
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
                    `${type}${attribute ? `: ${rating} ${attribute}` : ""}`
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
          onChange={(event, payload: PriorityRating) =>
            dispatch({ type: RESOURCES, payload })
          }
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
  ) : (
    <CircularProgress />
  )
}

export default PriorityTable
