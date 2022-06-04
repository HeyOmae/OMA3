import { MenuItem, Select } from "@mui/material"
import { createContext, FC, useContext } from "react"

export const ThemeingContext = createContext<(themeName: string) => void>(null)

export const ThemeSelector: FC = () => {
  const setTheme = useContext(ThemeingContext)
  return (
    <Select
      value="cyberterminal3"
      onChange={({ target: { value } }) => setTheme(value)}
    >
      <MenuItem value="cyberterminal3">CyberTerminal 3.0</MenuItem>
      <MenuItem value="mundane">Mundane</MenuItem>
    </Select>
  )
}
