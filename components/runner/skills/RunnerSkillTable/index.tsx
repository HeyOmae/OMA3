import { FC } from "react"
import { Skills } from "../../../../types/runner"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { ActionPayload, REMOVE_SKILL } from ".."
import { Remove } from "@material-ui/icons"

export interface Props {
  skills: Skills
  dispatch: DispatchAction<symbol, ActionPayload>
}

export const RunnerSkillTable: FC<Props> = ({ skills, dispatch }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Remove</TableCell>
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
                <TableCell>
                  <IconButton
                    color="secondary"
                    aria-label={`remove ${skillName} skill`}
                    onClick={() =>
                      dispatch({
                        type: REMOVE_SKILL,
                        payload: {
                          skillToRemove: skillName,
                        },
                      })
                    }
                  >
                    <Remove />
                  </IconButton>
                </TableCell>
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
