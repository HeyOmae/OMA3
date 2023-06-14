import { AddButton, RemoveButton } from "@/components/common"
import { Quality } from "@/types/Qualities"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC, useState } from "react"
import { SkillSelect } from "../resources/GearPageTemplate/GearTable/ResourceButtons"
import skillData from "@/data/skills.json"

type OnAddQuality = (quality: Quality) => void

interface Props {
  qualities: Quality[]
  onAddQuality: OnAddQuality
}

export const QualityTable: FC<Props> = ({ qualities, onAddQuality }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Add</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Select</TableCell>
        <TableCell>Karma</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {qualities.map((quality) => (
        <QualityStatefulRow
          key={quality.name}
          quality={quality}
          onAddQuality={onAddQuality}
        />
      ))}
    </TableBody>
  </Table>
)

interface QualityStatefulRowProps {
  quality: Quality
  onAddQuality: OnAddQuality
}

const QualityStatefulRow: FC<QualityStatefulRowProps> = ({
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

interface RunnerQualityTableProps {
  qualities: Quality[]
  onRemoveQualitiy: (index: number) => void
}

export const RunnerQualityTable: FC<RunnerQualityTableProps> = ({
  qualities,
  onRemoveQualitiy,
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Remove</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Selected</TableCell>
        <TableCell>Karma</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {qualities.map((quality, index) => (
        <TableRow key={quality.name}>
          <TableCell>
            <RemoveButton
              aria-label={`Remove ${quality.name}`}
              onClick={() => onRemoveQualitiy(index)}
            />
          </TableCell>
          <TableCell>{quality.name}</TableCell>
          <TableCell>{quality.selected}</TableCell>
          <TableCell>{quality.karma}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
