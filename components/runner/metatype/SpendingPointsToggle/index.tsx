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
  toggleSpending: (isAdjustmentPointsSelected: boolean) => void
  isSpendingAdjustmentPoints: boolean
}

const ATTRIBUTE = "Attribute"
const ADJUSTMENT = "Adjustment"

export const SpendingPointsToggle: FC<Props> = ({
  isSpendingAdjustmentPoints,
  toggleSpending,
}) => (
  <Typography component="div">
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Points to Use</FormLabel>
      <RadioGroup
        aria-label="select-points"
        name="select-points"
        value={isSpendingAdjustmentPoints ? ATTRIBUTE : ADJUSTMENT}
        onChange={(event, pointsToSpend) =>
          toggleSpending(pointsToSpend === ATTRIBUTE)
        }
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
        </Grid>
      </RadioGroup>
    </FormControl>
  </Typography>
)
