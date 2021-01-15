import { ReactNode } from "react"

export interface Columns<G> {
  display: (gear: G, index: number) => ReactNode
  label: string
}
