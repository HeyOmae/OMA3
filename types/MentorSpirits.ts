interface Mod {
  type: "COST"
  resist?: "BOTH"
  category?: string
  skill?: string
}

interface ModReference {
  ref: string
  value?: number
  choice?: string
}

interface Modifications {
  edgemod?: Mod[]
  powermod?: ModReference[]
  qualitymod?: ModReference[]
  selmod?: Modifications
  skillmod?: ModReference[]
}

export interface MentorSpirit {
  name: string
  magician: Modifications
  adept: Modifications
  modifications: Modifications
}
