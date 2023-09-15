import { IconButton, IconButtonProps } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"
import { FC, HTMLProps } from "react"

export type Props = Exclude<IconButtonProps, "color" | "children">

export const AddButton: FC<Props> = (props) => (
  <IconButton color="secondary" {...props}>
    <Add />
  </IconButton>
)

export const RemoveButton: FC<Props> = (props) => (
  <IconButton color="secondary" {...props}>
    <Remove />
  </IconButton>
)

export const Section: FC<HTMLProps<HTMLElement>> = (props) => (
  <section {...props} />
)
