import { MetaMagic } from "@/types/MagRes"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"
import { Payload } from "./index"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { Props as ActionButtonProps } from "@/components/common"

interface Props {
  metamagics: MetaMagic[]
  dispatch: DispatchAction<Payload>
  type: symbol
  label: string
  ActionButton: FC<ActionButtonProps>
}

export function MetamagicTable({
  metamagics,
  dispatch,
  type,
  label,
  ActionButton,
}: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{label}</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {metamagics.map((metamagic, index) => (
          <TableRow key={metamagic.name}>
            <TableCell>
              <ActionButton
                aria-label={`${label} ${metamagic.name}`}
                onClick={() =>
                  dispatch({
                    type,
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
}
