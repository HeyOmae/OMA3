import { ReactNode } from "react"

export interface Columns<G> {
  display: (
    gear: G,
    index?: number,
    update?: (update: number) => void,
  ) => ReactNode
  label: string
}
