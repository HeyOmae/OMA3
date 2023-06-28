import { MenuItem, Select } from "@mui/material"
import { FC } from "react"
import skillData from "@/data/skills.json"
import { attributes } from "@/data/attributes"
import { elemental } from "@/data/attacks"
import { mentorSpirits } from "@/data/mentorSpirits"
import { spirits } from "@/data/spirits"
import { sprites } from "@/data/sprites"

export interface SelectProps<SelectType = string> {
  selected: SelectType
  setSelected: (select: SelectType) => void
}

export const SkillSelect: FC<SelectProps> = ({
  selected: selectedSkill,
  setSelected: setSkill,
}) => (
  <Select
    value={selectedSkill}
    onChange={({ target: { value } }) => setSkill(value)}
  >
    {skillData.map(({ name }) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const AttributeSelect: FC<SelectProps> = ({ selected, setSelected }) => (
  <Select
    value={selected}
    onChange={({ target: { value } }) => setSelected(value)}
  >
    {Object.values(attributes).map((name) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const ElementalSelect: FC<SelectProps> = ({ selected, setSelected }) => (
  <Select
    value={selected}
    onChange={({ target: { value } }) => setSelected(value)}
  >
    {Object.keys(elemental).map((name) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const MentorSpiritSelect: FC<SelectProps> = ({
  selected,
  setSelected,
}) => (
  <Select
    value={selected}
    onChange={({ target: { value } }) => setSelected(value)}
  >
    {mentorSpirits.map(({ name }) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const SpiritSelect: FC<SelectProps> = ({ selected, setSelected }) => (
  <Select
    value={selected}
    onChange={({ target: { value } }) => setSelected(value)}
  >
    {spirits.map(({ name }) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const SpriteSelect: FC<SelectProps> = ({ selected, setSelected }) => (
  <Select
    value={selected}
    onChange={({ target: { value } }) => setSelected(value)}
  >
    {sprites.map(({ name }) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)

export const RangeSelect: FC<SelectProps<number> & { max: number }> = ({
  selected,
  setSelected,
  max,
}) => {
  const options = []
  for (let i = 1; i <= max; ++i) {
    options.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>,
    )
  }
  return (
    <Select
      value={selected}
      onChange={({ target: { value } }) => setSelected(+value)}
    >
      {options}
    </Select>
  )
}
