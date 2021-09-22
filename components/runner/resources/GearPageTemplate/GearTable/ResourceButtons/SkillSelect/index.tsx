import { MenuItem, Select } from "@mui/material"
import { FC } from "react"
import skillData from "@/data/skills.json"

export interface SkillSelectProps {
  selectedSkill: string
  setSkill: (skillName: string) => void
}

export const SkillSelect: FC<SkillSelectProps> = ({
  selectedSkill,
  setSkill,
}) => (
  <Select
    value={selectedSkill}
    onChange={({ target: { value } }) => setSkill(value as string)}
  >
    {skillData.map(({ name }) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
)
