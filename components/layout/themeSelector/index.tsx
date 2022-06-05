import { MenuItem, Select } from "@mui/material"
import { createContext, FC, useContext } from "react"

type ThemeState = [
  currentSelectedTheme: string,
  setTheme: (themeName: string) => void,
]

export const ThemeingContext = createContext<ThemeState>(null)

export const ThemeSelector: FC = () => {
  const [theme = "cyberterminal3", setTheme] = useContext(ThemeingContext)
  return (
    <Select value={theme} onChange={({ target: { value } }) => setTheme(value)}>
      <MenuItem value="cyberterminal3">CyberTerminal 3.0</MenuItem>
      <MenuItem value="mundane">Mundane</MenuItem>
    </Select>
  )
}
