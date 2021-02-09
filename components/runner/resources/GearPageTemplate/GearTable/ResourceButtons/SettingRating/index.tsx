import { GearTyped } from "@/types/Resources"
import { Slider } from "@material-ui/core"
import { FC } from "react"

export interface Props {
  setRating: (rating: number) => void
  gear: GearTyped
}

export const SettingRating: FC<Props> = ({
  setRating,
  gear: { name, maxRating = 6, currentRating = 1 },
}) => (
  <Slider
    data-testid={`${name}-rating`}
    onChange={(event, value) => setRating(+value)}
    defaultValue={1}
    getAriaValueText={(value) => value.toString()}
    aria-labelledby={`${name} rating slider`}
    valueLabelDisplay="auto"
    step={1}
    marks
    min={1}
    max={maxRating}
    value={currentRating}
  />
)
