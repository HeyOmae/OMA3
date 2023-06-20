import { MenuItem, Select } from "@mui/material"
import { FC } from "react"
import skillData from "@/data/skills.json"
import { attributes } from "@/data/attributes"
import { elemental } from "@/data/attacks"

export interface SelectProps {
  selected: string
  setSelected: (skillName: string) => void
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