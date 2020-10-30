import { FC } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core"
import { ADD_SKILL, ActionPayload } from ".."
import { Attributes } from "../../../../types/RunnerAttributes"
import skillsData from "../../../../data/skills.json"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import styles from "../skills.module.css"
import { AddButton } from "../../../common"

interface Props {
  dispatch: DispatchAction<symbol, ActionPayload>
}

export const SkillTable: FC<Props> = ({ dispatch }) => (
  <TableContainer className={styles.container}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Learn</TableCell>
          <TableCell>Skill Name</TableCell>
          <TableCell>Attribute</TableCell>
          <TableCell>Untrained</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {skillsData.map(({ name, attribute, untrained }) => (
          <TableRow key={name}>
            <TableCell>
              <AddButton
                onClick={() =>
                  dispatch({
                    type: ADD_SKILL,
                    payload: {
                      skillToAdd: {
                        [name]: {
                          rating: 1,
                          attribute: {
                            primary: attribute as Attributes,
                          },
                        },
                      },
                    },
                  })
                }
                aria-label={`add ${name} skill`}
              />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{attribute}</TableCell>
            <TableCell>{untrained ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
