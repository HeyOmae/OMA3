import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { FC } from "react"
import { Payload, REMOVE_POWER } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { AdeptPower } from "../../../../../types/MagRes"
import { RemoveButton } from "../../../../common"

export interface Props {
  powers: AdeptPower[]
  dispatch: DispatchAction<symbol, Payload>
}

export const RunnerAdeptPowers: FC<Props> = ({ powers, dispatch }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Remove</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Activation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {powers.map((power: AdeptPower, powerIndex) => {
            const { name, activation, cost } = power
            return (
              <TableRow key={name}>
                <TableCell>
                  <RemoveButton
                    aria-label={`Remove ${name}`}
                    onClick={() => {
                      dispatch({
                        type: REMOVE_POWER,
                        payload: {
                          removePower: powerIndex,
                        },
                      })
                    }}
                  >
                    -
                  </RemoveButton>
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>{cost}</TableCell>
                <TableCell>{activation}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
