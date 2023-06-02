interface EdgeMod {
  skill?: string
  attr?: string
  type?: "BONUS" | "USAGE"
}

interface Modifications {
  relevancemod?: { topic: string }
  edgemod?: EdgeMod[]
  skillmod?: {
    val: number
    modType: "MAX"
  }
  attrmod?: {
    attr?: string
    val: number
    type?: string
  }
  itemmod?: {
    item: string
  }
  dmgtypemod?: {
    type: "PHYSICAL" | "STUN"
  }
  nuyen?: 5000
  debtInterest?: 500
}

interface Ref {
  ref: string
}

interface Requires {
  anyreq?: {
    metareq: Ref[]
  }
  magresreq?: {
    type: "mundane"
  }
}

export interface Quality {
  karma: number
  name: string
  type: "POSITIVE" | "NEGATIVE"
  modifications?: Modifications
  select?:
    | "SKILL"
    | "ELEMENTAL"
    | "ATTRIBUTE"
    | "NAME"
    | "MENTOR SPIRIT"
    | "SPIRIT"
    | "SPRITE"
  selected?: string
  max?: number
  currentRating?: number
  multi?: true
  requires?: Requires
}
