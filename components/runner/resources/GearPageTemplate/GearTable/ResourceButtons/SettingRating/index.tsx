import { GearWithRating } from "@/types/Resources"
import { Slider } from "@material-ui/core"
import { FC } from "react"

export interface SettingRatingProps {
  setRating: (rating: number) => void
  gear: GearWithRating
}

export const SettingRating: FC<SettingRatingProps> = ({
  setRating,
  gear: { name, minRating = 1, maxRating, currentRating = minRating },
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
    min={minRating}
    max={maxRating}
    value={currentRating}
  />
)
