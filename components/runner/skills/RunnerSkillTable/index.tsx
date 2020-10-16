import { FC } from "react"
import { Skills } from "../../../../types/runner"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core"

export interface Props {
  skills: Skills
}

export const RunnerSkillTable: FC<Props> = ({ skills }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Skill</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Attribute</TableCell>
          <TableCell>Spec</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(skills).map(
          ([skillName, { rating, attribute, specialization }]) => {
            return (
              <TableRow key={skillName}>
                <TableCell>{skillName}</TableCell>
                <TableCell>{rating}</TableCell>
                <TableCell>{`${attribute.primary}${
                  attribute.secondary ? `/${attribute.secondary}` : ""
                }`}</TableCell>
                <TableCell>{specialization}</TableCell>
              </TableRow>
            )
          }
        )}
      </TableBody>
    </Table>
  </TableContainer>
)
