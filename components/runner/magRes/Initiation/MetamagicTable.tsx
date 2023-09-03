import { MetaMagic } from "@/types/MagRes"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"
import { ADD_METAMAGIC, Payload, REMOVE_METAMAGIC } from "./index"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { AddButton } from "@/components/common"

interface Props {
  metamagics: MetaMagic[]
  add?: boolean
  dispatch: DispatchAction<Payload>
}

export const MetamagicTable: FC<Props> = ({ metamagics, add, dispatch }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>{add ? "Learn" : "Forget"}</TableCell>
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {metamagics.map((metamagic, index) => (
        <TableRow key={metamagic.name}>
          <TableCell>
            <AddButton
              aria-label={`${add ? "Add" : "Remove"} ${metamagic.name}`}
              onClick={() =>
                dispatch({
                  type: add ? ADD_METAMAGIC : REMOVE_METAMAGIC,
                  payload: { metamagic, index },
                })
              }
            />
          </TableCell>
          <TableCell>{metamagic.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
