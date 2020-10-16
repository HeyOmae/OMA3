import { FC } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core"
import { ADD_SKILL } from ".."
import { Attributes } from "../../../../types/runner"
import skillsData from "../../../../data/skills.json"
import { Skills } from "../../../../types/runner"
import { Add } from "@material-ui/icons"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"

interface Props {
  dispatch: DispatchAction<symbol, Skills>
}

export const SkillTable: FC<Props> = ({ dispatch }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Learn</TableCell>
          <TableCell>Skill Name</TableCell>
          <TableCell>Attribute</TableCell>
          <TableCell>Untrained</TableCell>
          <TableCell>Specialization</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {skillsData.map(({ name, attribute, untrained, specializations }) => (
          <TableRow key={name}>
            <TableCell>
              <IconButton
                color="secondary"
                onClick={() =>
                  dispatch({
                    type: ADD_SKILL,
                    payload: {
                      [name]: {
                        rating: 1,
                        attribute: {
                          primary: attribute as Attributes,
                        },
                      },
                    },
                  })
                }
                aria-label={`add-${name.replace(" ", "-")}`}
              >
                <Add />
              </IconButton>
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{attribute}</TableCell>
            <TableCell>{untrained ? "Yes" : "No"}</TableCell>
            <TableCell>
              {specializations && specializations.join(", ")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
