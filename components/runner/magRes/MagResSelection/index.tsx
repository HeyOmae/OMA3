import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"

export const MagResSelection = () => (
  <>
    <h1>Awakened</h1>
    <RadioGroup aria-label="selection awakened" name="magres" value="">
      <FormControlLabel value="Full" control={<Radio />} label="Full Mage" />
      <FormControlLabel value="Aspected" control={<Radio />} label="Aspected" />
      <FormControlLabel
        value="Mystic Adept"
        control={<Radio />}
        label="Mystic Adept"
      />
      <FormControlLabel value="Adept" control={<Radio />} label="Adept" />
    </RadioGroup>
    <h1>Emergent</h1>
    <RadioGroup aria-label="selection awakened" name="magres" value="">
      <FormControlLabel
        value="Technomancer"
        control={<Radio />}
        label="Technomancer"
      />
    </RadioGroup>
    <h1>Mundane</h1>
    <RadioGroup aria-label="selection awakened" name="magres" value="">
      <FormControlLabel value="Mundane" control={<Radio />} label="Mundane" />
    </RadioGroup>
  </>
)
