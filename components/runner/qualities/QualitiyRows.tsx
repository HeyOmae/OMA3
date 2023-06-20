import { Quality } from "@/types/Qualities"
import { OnAddQuality } from "./QualityTable"
import { TableCell, TableRow, TextField } from "@mui/material"
import { AddButton } from "@/components/common"
import { FC, ReactNode, useRef, useState } from "react"
import skillData from "@/data/skills.json"
import {
  AttributeSelect,
  ElementalSelect,
  SkillSelect,
} from "../resources/GearPageTemplate/GearTable/ResourceButtons"
import { attributes } from "@/data/attributes"

interface QualityRowProps {
  quality: Quality
  onAddQuality: OnAddQuality
  select?: ReactNode
}

const QualityRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
  select = "N/A",
}) => (
  <TableRow>
    <TableCell>
      <AddButton
        aria-label={`Add ${quality.name}`}
        onClick={() => onAddQuality(quality)}
      />
    </TableCell>
    <TableCell>{quality.name}</TableCell>
    <TableCell>{select}</TableCell>
    <TableCell>{quality.karma}</TableCell>
  </TableRow>
)

const QualitySelectSkillRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
}) => {
  const [selected, setSelected] = useState(skillData[0].name)
  return (
    <QualityRow
      quality={quality}
      onAddQuality={() => onAddQuality({ ...quality, selected })}
      select={<SkillSelect selected={selected} setSelected={setSelected} />}
    />
  )
}

const QualitySelectNameRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
}) => {
  const nameRef = useRef<HTMLInputElement>()
  return (
    <QualityRow
      quality={quality}
      onAddQuality={() =>
        onAddQuality({ ...quality, selected: nameRef.current.value })
      }
      select={
        <TextField
          inputRef={nameRef}
          label={`Select ${quality.name} Name`}
          id={`${quality.name}-select`}
        />
      }
    />
  )
}

const QualitySelectAttributeRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
}) => {
  const [selected, setSelected] = useState(attributes.bod)
  return (
    <QualityRow
      quality={quality}
      onAddQuality={() => onAddQuality({ ...quality, selected })}
      select={<AttributeSelect selected={selected} setSelected={setSelected} />}
    />
  )
}

const QualitySelectElementRow: FC<QualityRowProps> = ({
  quality,
  onAddQuality,
}) => {
  const [selected, setSelected] = useState("Electrical")
  return (
    <QualityRow
      quality={quality}
      onAddQuality={() => onAddQuality({ ...quality, selected })}
      select={<ElementalSelect selected={selected} setSelected={setSelected} />}
    />
  )
}

const QualityRows = {
  default: QualityRow,
  SKILL: QualitySelectSkillRow,
  NAME: QualitySelectNameRow,
  ATTRIBUTE: QualitySelectAttributeRow,
  ELEMENTAL: QualitySelectElementRow,
}

export default QualityRows