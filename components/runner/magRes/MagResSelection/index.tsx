import { defined } from "@/components/util"
import { useCallback, FC, ChangeEvent } from "react"
import { FormControlLabel, Radio, RadioGroup, Grid } from "@mui/material"
import { SET_MAGRES } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { MagRes } from "../../../../types/MagRes"
import { MagResPriorityTableOptions } from "../../../../types/PriorityRating"
import { Payload } from "../"

export interface Props {
  selected?: MagRes
  priority: MagResPriorityTableOptions
  dispatch: DispatchAction<Payload>
}

type OnChange = (event: ChangeEvent<HTMLInputElement>, value: string) => void

const magResOptions: MagRes[] = [
  "Full",
  "Aspected",
  "Mystic Adept",
  "Adept",
  "Technomancer",
  "Mundane",
]

// the radio buttons only give back the value as a string
const toMagRes = (value: string) =>
  defined(
    magResOptions.find((option) => option === value),
    `${value} as magic or resonance`,
  )

export const MagResSelection: FC<Props> = ({
  selected = "",
  priority,
  dispatch,
}) => {
  const onChange: OnChange = useCallback(
    (event, value) => {
      dispatch({ type: SET_MAGRES, payload: { magres: toMagRes(value) } })
    },
    [dispatch],
  )

  return (
    <Grid container spacing={2}>
      <Grid size={{ sm: 12, md: 6 }}>
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
      <Grid size={{ sm: 12, md: 6 }}>
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
