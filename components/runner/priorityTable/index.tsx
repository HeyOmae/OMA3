import { useState } from "react"
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core"
import priorityData from "../../../data/priorityTable.json"

type priorityRating = "a" | "b" | "c" | "d" | "e"

export const PriorityTable = () => {
  const [metatype, setMetatype] = useState<priorityRating>("a")

  return (
    <Grid container direction="column" justify="center" alignItems="baseline">
      <FormControl component="fieldset">
        <FormLabel component="legend">Metatype</FormLabel>
        <RadioGroup
          aria-label="metatype"
          name="metatype"
          value={metatype}
          onChange={(event, value: priorityRating) => setMetatype(value)}
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
    </Grid>
  )
}

export default PriorityTable
