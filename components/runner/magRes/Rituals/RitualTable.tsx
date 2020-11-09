import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"
import { Payload } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { Ritual } from "../../../../types/MagRes"
import { AddRitualButton } from "./AddRitualButton"
import { RemoveRitualButton } from "./RunnerRituals/RemoveRitualButton"

interface Props {
  rituals: Ritual[]
  ActionButton: typeof AddRitualButton | typeof RemoveRitualButton
  dispatch: DispatchAction<symbol, Payload>
}

export const RitualTable: FC<Props> = ({ rituals, ActionButton, dispatch }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Learn</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Keywords</TableCell>
          <TableCell>Threshold</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rituals.map((ritual, ritualIndex) => {
          const { name, threshold, ritualfeature } = ritual
          return (
            <TableRow key={name}>
              <TableCell>
                <ActionButton
                  dispatch={dispatch}
                  ritual={ritual}
                  ritualIndex={ritualIndex}
                />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                ({ritualfeature.map(({ ref }) => ref).join(", ")})
              </TableCell>
              <TableCell>{threshold}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
)
