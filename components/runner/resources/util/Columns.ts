import { ReactNode } from "react"

export interface Columns<G, U = number> {
  display: (
    gear: G,
    index?: number,
    update?: (update: U) => void,
    currentValue?: U,
  ) => ReactNode
  label: string
}
