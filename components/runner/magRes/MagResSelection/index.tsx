import { useCallback, FC, ChangeEvent } from "react"
import { FormControlLabel, Radio, RadioGroup, Grid } from "@material-ui/core"
import { SET_MAGRES } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { MagRes } from "../../../../types/MagRes"
import { MagResPriorityTableOptions } from "../../../../types/PriorityRating"
import { Payload } from "../"

export interface Props {
  selected?: MagRes
  priority: MagResPriorityTableOptions
  dispatch: DispatchAction<symbol, Payload>
}

type OnChange = (event: ChangeEvent<HTMLInputElement>, value: string) => void

export const MagResSelection: FC<Props> = ({
  selected = "",
  priority,
  dispatch,
}) => {
  const onChange: OnChange = useCallback(
    (event, value: MagRes) => {
      dispatch({ type: SET_MAGRES, payload: { magres: value } })
    },
    [dispatch],
  )

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <h1>Awakened</h1>
        <RadioGroup
          aria-label="selection awakened"
          name="magres"
          value={selected}
          onChange={onChange}
        >
          <FormControlLabel
            value="Full"
            control={<Radio />}
            label="Full Mage"
            disabled={!priority.Full}
          />
          <FormControlLabel
            value="Aspected"
            control={<Radio />}
            label="Aspected"
            disabled={!priority.Aspected}
          />
          <FormControlLabel
            value="Mystic Adept"
            control={<Radio />}
            label="Mystic Adept"
            disabled={!priority["Mystic Adept"]}
          />
          <FormControlLabel
            value="Adept"
            control={<Radio />}
            label="Adept"
            disabled={!priority.Adept}
          />
        </RadioGroup>
      </Grid>
      <Grid item sm={12} md={6}>
        <h1>Emergent</h1>
        <RadioGroup
          aria-label="selection awakened"
          name="magres"
          value={selected}
          onChange={onChange}
        >
          <FormControlLabel
            value="Technomancer"
            control={<Radio />}
            label="Technomancer"
            disabled={!priority.Technomancer}
          />
        </RadioGroup>
        <h1>Mundane</h1>
        <RadioGroup
          aria-label="selection awakened"
          name="magres"
          value={selected}
          onChange={onChange}
        >
          <FormControlLabel
            value="Mundane"
            control={<Radio />}
            label="Mundane"
            disabled={!priority.Mundane}
          />
        </RadioGroup>
      </Grid>
    </Grid>
  )
}
