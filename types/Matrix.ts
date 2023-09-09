export interface Echo {
  name: string
  type: "ECHO"
  modifications?: {
    attrmod: {
      attribute: string
      value: number
      type: "AUGMENTED"
    }
  }
  max?: number
}
