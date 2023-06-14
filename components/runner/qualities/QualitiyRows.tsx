import { Quality } from "@/types/Qualities"
import { OnAddQuality } from "./QualityTable"
import { TableCell, TableRow } from "@mui/material"
import { AddButton } from "@/components/common"
import { FC, useState } from "react"
import skillData from "@/data/skills.json"
import { SkillSelect } from "../resources/GearPageTemplate/GearTable/ResourceButtons"

interface QualityRowProps {
  quality: Quality
  onAddQuality: OnAddQuality
}

const QualityRow: FC<QualityRowProps> = ({ quality, onAddQuality }) => (
  <TableRow>
    <TableCell>
      <AddButton
        aria-label={`Add ${quality.name}`}
        onClick={() => onAddQuality(quality)}
      />
    </TableCell>
    <TableCell>{quality.name}</TableCell>
    <TableCell>N/A</TableCell>
    <TableCell>{quality.karma}</TableCell>
  </TableRow>
)

const QualitySelectSkillRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
}) => {
  const [selected, setSelected] = useState(skillData[0].name)
  return (
    <TableRow>
      <TableCell>
        <AddButton
          aria-label={`Add ${quality.name}`}
          onClick={() => onAddQuality({ ...quality, selected })}
        />
      </TableCell>
      <TableCell>{quality.name}</TableCell>
      <TableCell>
        <SkillSelect selectedSkill={selected} setSkill={setSelected} />
      </TableCell>
      <TableCell>{quality.karma}</TableCell>
    </TableRow>
  )
}

const QualityRows = {
  default: QualityRow,
  SKILL: QualitySelectSkillRow,
}

export default QualityRows
