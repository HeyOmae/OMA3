import { TextField } from "@mui/material"
import { useContext } from "react"
import { NameContext } from "../../Row/NamedRow"

export const NameInput = () => {
  const { gearName, name, setName } = useContext(NameContext)
  return (
    <TextField
      size="small"
      value={name}
      onChange={({ target: { value } }) => setName(value)}
      slotProps={{ htmlInput: { "aria-label": `Select ${gearName} Name` } }}
    />
  )
}
