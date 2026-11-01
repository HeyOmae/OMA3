import { useRequiredContext } from "@/components/useRequiredContext"
import { TextField } from "@mui/material"

import { NameContext } from "../../Row/NamedRow"

export const NameInput = () => {
  const { gearName, name, setName } = useRequiredContext(
    NameContext,
    "NameContext",
  )
  return (
    <TextField
      size="small"
      value={name}
      onChange={({ target: { value } }) => setName(value)}
      slotProps={{ htmlInput: { "aria-label": `Select ${gearName} Name` } }}
    />
  )
}
