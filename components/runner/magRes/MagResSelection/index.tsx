import { useCallback, FC, ChangeEvent } from "react"
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import { SET_MAGRES } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { MagRes } from "../../../../types/MagRes"

export interface Props {
  selected?: MagRes
  dispatch: DispatchAction<symbol, unknown>
}

type OnChange = (event: ChangeEvent<HTMLInputElement>, value: string) => void

export const MagResSelection: FC<Props> = ({ selected = "", dispatch }) => {
  const onChange: OnChange = useCallback(
    (event, value) => {
      dispatch({ type: SET_MAGRES, payload: { magres: value } })
    },
    [dispatch]
  )

  return (
    <>
      <h1>Awakened</h1>
      <RadioGroup
        aria-label="selection awakened"
        name="magres"
        value={selected}
        onChange={onChange}
      >
        <FormControlLabel value="Full" control={<Radio />} label="Full Mage" />
        <FormControlLabel
          value="Aspected"
          control={<Radio />}
          label="Aspected"
        />
        <FormControlLabel
          value="Mystic Adept"
          control={<Radio />}
          label="Mystic Adept"
        />
        <FormControlLabel value="Adept" control={<Radio />} label="Adept" />
      </RadioGroup>
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
        />
      </RadioGroup>
      <h1>Mundane</h1>
      <RadioGroup
        aria-label="selection awakened"
        name="magres"
        value={selected}
        onChange={onChange}
      >
        <FormControlLabel value="Mundane" control={<Radio />} label="Mundane" />
      </RadioGroup>
    </>
  )
}
