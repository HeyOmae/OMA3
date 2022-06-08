import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { FC, useEffect, useState } from "react"

export const SELECTED_THEME_KEY = "OMA3_SELECTED_THEME"

export const ThemeSelector: FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem(SELECTED_THEME_KEY) ?? "cyberterminal3",
  )
  useEffect(() => {
    localStorage.setItem(SELECTED_THEME_KEY, theme)
    document.body.className = theme
  }, [theme])
  return (
    <FormControl fullWidth>
      <InputLabel id="theme-selector">Theme</InputLabel>
      <Select
        labelId="theme-selector"
        value={theme}
        onChange={({ target: { value } }) => setTheme(value)}
      >
        <MenuItem value="cyberterminal3">CyberTerminal 3.0</MenuItem>
        <MenuItem value="mundane">Mundane</MenuItem>
      </Select>
    </FormControl>
  )
}
