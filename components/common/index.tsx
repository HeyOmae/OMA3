import { IconButton, IconButtonProps } from "@mui/material"
import { Add, Close, Remove } from "@mui/icons-material"
import { FC, HTMLProps } from "react"
import styles from "./common.module.css"

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

export const CloseButton: FC<Props> = (props) => (
  <IconButton {...props} className={styles.close} aria-label="Close">
    <Close />
  </IconButton>
)

export const Section: FC<HTMLProps<HTMLElement>> = (props) => (
  <section {...props} />
)
