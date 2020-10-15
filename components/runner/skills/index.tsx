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

const Skills: FC = () => {
  const [runner, dispatch] = useRunnerAccess((runner) => runner)
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
                  onClick={() => dispatch({ type: "", payload: "" })}
                  aria-label="add skill"
                  data-testid={`add-${name.replace(" ", "-")}`}
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
