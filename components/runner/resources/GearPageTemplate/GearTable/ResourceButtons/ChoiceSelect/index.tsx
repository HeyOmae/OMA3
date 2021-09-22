import { MenuItem, Select } from "@mui/material"
import { useContext } from "react"
import { ChoiceContext } from "../../Row/ChoiceRatingRow"

export const ChoiceSelect = () => {
  const { choices, selectedChoiceIndex, setChoiceIndex } =
    useContext(ChoiceContext)
  return (
    <Select
      value={selectedChoiceIndex}
      onChange={({ target: { value } }) => setChoiceIndex(+value)}
    >
      {choices.map(({ name }, index) => (
        <MenuItem key={name} value={index}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}
