import { ReactNode } from "react"

export interface Columns<G, U = number> {
  display: (
    gear: G,
    index: number,
    // only rows that change the gear, like setting its rating, pass this
    update?: (update: U) => void,
  ) => ReactNode
  label: string
}
