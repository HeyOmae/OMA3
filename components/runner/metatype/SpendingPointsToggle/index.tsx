import { FC } from "react"
import {
  FormControlLabel,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material"

export interface Props {
  selectSpending: (isAdjustmentPointsSelected: string) => void
  pointToSpend: string
}

export const ATTRIBUTE = "Attribute"
export const ADJUSTMENT = "Adjustment"
export const KARMA = "Karma"

export const SpendingPointsToggle: FC<Props> = ({
  pointToSpend,
  selectSpending,
}) => (
  <Typography component="div">
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Points to Use</FormLabel>
      <RadioGroup
        aria-label="select-points"
        name="select-points"
        value={pointToSpend}
        onChange={(event, pointsToSpend) => selectSpending(pointsToSpend)}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <FormControlLabel
              value={ATTRIBUTE}
              control={<Radio />}
              label={ATTRIBUTE}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              value={ADJUSTMENT}
              control={<Radio />}
              label={ADJUSTMENT}
            />
          </Grid>
          <Grid item>
            <FormControlLabel value={KARMA} control={<Radio />} label={KARMA} />
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  </Typography>
)
