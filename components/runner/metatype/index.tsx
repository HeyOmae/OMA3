import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"
import metatypeData from "../../../data/metatype.json"

export const Metatype = () => (
  <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Metatypes</FormLabel>
      <RadioGroup aria-label="metatypes" name="metatypes">
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
  </div>
)
