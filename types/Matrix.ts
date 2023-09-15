import { MetaMagic } from "./MagRes"

type EchoType = "ECHO"

export interface Echo extends MetaMagic<EchoType> {
  modifications?: {
    attrmod: {
      attribute: string
      value: number
      type: "AUGMENTED"
    }
  }
  max?: number
}
