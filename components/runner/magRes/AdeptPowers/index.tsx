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
import { AdeptPower } from "../../../../types/MagRes"
import { AddAdeptPowerButton } from "./AddAdeptPowerButton"
import PowersData from "../../../../data/adeptPowers.json"

export interface Props {
  dispatch: DispatchAction<Payload>
}

export const AdeptPowers: FC<Props> = ({ dispatch }) => (
  <TableContainer>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Add</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Cost</TableCell>
          <TableCell>Activation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {(PowersData as AdeptPower[]).map((power) => {
          const { name, cost, levels, activation } = power
          return (
            <TableRow key={name}>
              <TableCell>
                <AddAdeptPowerButton dispatch={dispatch} power={power} />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                {cost}
                {levels && " per level"}
              </TableCell>
              <TableCell>{activation}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
)
