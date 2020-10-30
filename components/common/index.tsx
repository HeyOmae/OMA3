import { IconButton, IconButtonProps } from "@material-ui/core"
import { Add } from "@material-ui/icons"
import { FC } from "react"

export const AddButton: FC<Exclude<IconButtonProps, "color" | "children">> = (
  props,
) => (
  <IconButton color="secondary" {...props}>
    <Add />
  </IconButton>
)
