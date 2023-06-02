import { AddButton, RemoveButton } from "@/components/common"
import { Quality } from "@/types/Qualities"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"

interface Props {
  qualities: Quality[]
  onAddQuality: (quality: Quality) => void
}

export const QualityTable: FC<Props> = ({ qualities, onAddQuality }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Add</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Karma</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {qualities.map((quality) => (
        <TableRow key={quality.name}>
          <TableCell>
            <AddButton
              aria-label={`Add ${quality.name}`}
              onClick={() => onAddQuality(quality)}
            />
          </TableCell>
          <TableCell>{quality.name}</TableCell>
          <TableCell>{quality.karma}</TableCell>
        </TableRow>
      ))}
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
          <TableCell>{quality.karma}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
