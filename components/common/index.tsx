import { IconButton, IconButtonProps } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"
import { FC } from "react"

export const AddButton: FC<Exclude<IconButtonProps, "color" | "children">> = (
  props,
) => (
  <IconButton color="secondary" {...props}>
    <Add />
  </IconButton>
)

export const RemoveButton: FC<
  Exclude<IconButtonProps, "color" | "children">
> = (props) => (
  <IconButton color="secondary" {...props}>
    <Remove />
  </IconButton>
)
