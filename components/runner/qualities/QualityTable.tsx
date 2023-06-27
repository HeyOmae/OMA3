import { RemoveButton } from "@/components/common"
import { Quality } from "@/types/Qualities"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"
import QualityRows from "./QualitiyRows"

export type OnAddQuality = (quality: Quality) => void

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
        <TableCell>Level</TableCell>
        <TableCell>Select</TableCell>
        <TableCell>Karma</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {qualities.map((quality) => {
        const Row = QualityRows[quality.select] ?? QualityRows.default
        return (
          <Row
            key={quality.name}
            quality={quality}
            onAddQuality={onAddQuality}
          />
        )
      })}
    </TableBody>
  </Table>
)

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
        <TableCell>Level</TableCell>
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
          <TableCell>{quality.currentLevel ?? "N/A"}</TableCell>
          <TableCell>{quality.selected ?? "N/A"}</TableCell>
          <TableCell>{quality.karma}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
