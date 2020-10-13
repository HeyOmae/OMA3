import { FC } from "react"
import { FormControlLabel, Typography, Grid, Switch } from "@material-ui/core"
import styles from "./SpendingPointsToggle.module.css"

export interface Props {
  toggleSpending: () => void
  isSpendingAdjustmentPoints: boolean
}

export const SpendingPointsToggle: FC<Props> = ({
  isSpendingAdjustmentPoints,
  toggleSpending,
}) => (
  <Typography component="div">
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item className={!isSpendingAdjustmentPoints ? styles.active : ""}>
        Attribute
      </Grid>
      <Grid item>
        <FormControlLabel
          value="Spend Points"
          control={
            <Switch
              checked={isSpendingAdjustmentPoints}
              onChange={toggleSpending}
              color="primary"
            />
          }
          label="Spend Points"
          labelPlacement="top"
        />
      </Grid>
      <Grid item className={isSpendingAdjustmentPoints ? styles.active : ""}>
        Adjustment
      </Grid>
    </Grid>
  </Typography>
)
