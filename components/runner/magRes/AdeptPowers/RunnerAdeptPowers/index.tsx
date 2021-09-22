import {
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { FC } from "react"
import { CHANGE_POWER_LEVEL, Payload, REMOVE_POWER } from "../.."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { AdeptPower } from "../../../../../types/MagRes"
import { RemoveButton } from "../../../../common"

export interface Props {
  powers: AdeptPower[]
  dispatch: DispatchAction<Payload>
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
            const { name, activation, cost, levels, level = 1, max } = power
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
                <TableCell>
                  {levels ? (
                    <Slider
                      defaultValue={level}
                      getAriaValueText={(value) => value.toString()}
                      aria-labelledby={`${name} level slider`}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={1}
                      max={max ?? 6}
                      value={level}
                      data-testid={`slider-${name}`}
                      onChange={(event, value) =>
                        dispatch({
                          type: CHANGE_POWER_LEVEL,
                          payload: {
                            powerLevel: {
                              powerIndex,
                              level: +value,
                            },
                          },
                        })
                      }
                    />
                  ) : (
                    "N/A"
                  )}
                </TableCell>
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
