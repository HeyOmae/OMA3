import { FC } from "react"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import {
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core"
import { Add } from "@material-ui/icons"
import skillsData from "../../../data/skills.json"
import { Skills as SkillsType, Attributes } from "../../../types/runner"

const ADD_SKILL = Symbol("ADD_SKILL")

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, SkillsType>(
    (runner, { type, payload }) => {
      switch (type) {
        case ADD_SKILL:
          return {
            ...runner,
            skills: {
              ...runner.skills,
              ...payload,
            },
          }
      }
    }
  )

  return runner ? (
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
  ) : (
    <CircularProgress />
  )
}

export default Skills
