import { FC } from "react"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material"
import { ADD_SKILL, ActionPayload, SkillPointsToSpend } from ".."
import skillsData from "@/data/skills"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { AddButton } from "../../../common"
import { useNotify } from "@/components/layout/hud"

// where the known skills are listed, for the notice to point at
export const KNOWN_SKILLS_ID = "known-skills"

interface Props {
  dispatch: DispatchAction<ActionPayload>
  pointsToSpend: SkillPointsToSpend
}

export const SkillTable: FC<Props> = ({ dispatch, pointsToSpend }) => {
  const notify = useNotify()
  return (
    <TableContainer className="table-container">
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
                  onClick={() => {
                    notify({
                      message: `Learned ${name}`,
                      target: KNOWN_SKILLS_ID,
                    })
                    dispatch({
                      type: ADD_SKILL,
                      payload: {
                        skillToAdd: {
                          [name]: {
                            rating: pointsToSpend === "Points" ? 1 : 0,
                            karmaRating: pointsToSpend === "Karma" ? 1 : 0,
                            attribute: {
                              primary: attribute,
                            },
                          },
                        },
                      },
                    })
                  }}
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
}
