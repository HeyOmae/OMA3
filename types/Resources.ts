// Everything a runner can buy with nuyen, keyed by the page it is bought on
export interface Resources {
  armor: GearArmor[]
  audio: Gear[]
  bioware: Gear[]
  bne: Gear[]
  chemicals: Gear[]
  commlink: GearMatrixCommlink[]
  cyberdeck: GearMatrixCyberdeck[]
  cyberware: GearCyberware[]
  drones: GearVehicle[]
  drugs: Gear[]
  electronicAccessories: GearElectronic[]
  firearms: GearFirearm[]
  focusFormula: Gear[]
  grappleGun: Gear[]
  imaging: Gear[]
  lifestyle: Gear[]
  locks: Gear[]
  magicSupplies: Gear[]
  melee: GearWeapon[]
  otherElectronics: Gear[]
  projectile: GearProjectile[]
  restraints: Gear[]
  riggerConsole: GearMatrixCommlink[]
  sensor: Gear[]
  software: Gear[]
  spellFormula: Gear[]
  survival: Gear[]
  tags: GearElectronic[]
  toxins: Gear[]
  vehicles: GearVehicle[]
}

// Every piece of gear. Gear with stats nothing else has extends this below.
export interface Gear {
  name: string
  availability: string
  cost: number
  reference?: { book: string; page: number }[]
  type?: string
  subtype?: string
  // the ways the gear can be used, the first one is what it is
  useAs?: UseAs[]
  modifications?: Modifications
  requires?: Requirements
  mods?: Gear[]
  // can only be bought as a mod for other gear
  modonly?: true

  // gear bought at a rating
  rating?: true
  minRating?: number
  maxRating?: number
  currentRating?: number
  rateMultiplier?: RateMultiplier
  // essence of augmentations at the rating they were bought
  essence?: number
  // gear bought by the dose or unit
  count?: true

  // something the runner picks when buying, like a skill or a weapon
  choice?: Choice
  // can be bought more than once
  multi?: true
}

export type RateMultiplier =
  | "cost"
  | "cost2"
  | "capacity cost"
  | "cost avail"
  | "cost avail3"
  | "cost modifier avail"
  | "cost avail capacity modifier"
  | "essence cost"
  | "essence cost modifier"
  | "essence cost defenseRating"
  | "essence capacity cost"

export type Choice =
  | "ADEPT_POWER"
  | "SPELL_CATEGORY"
  | "SPIRIT"
  | "MELEE_WEAPON"
  | "WEAPON"
  | "SKILL"
  | "PHYSICAL SKILL"
  | "NAME"

export interface UseAs {
  type?: string
  subtype?: string
  // where it goes when installed in other gear, and how much room it takes
  slot?: string
  capacity?: number
  essence?: number | string
  // what it costs when bought this way, if different from the gear
  cost?: number
  availability?: string
  maxRating?: number
}

// A place on gear that mods can be installed
export interface Hook {
  hook: string
  capacity?: number
}

export interface AttackRatingModifier {
  attribute: string
  attackRating?: AttackRating
  value?: number
  type?: string
  modType?: string
  cyber?: true
  cond?: true
  condIndex?: number
}

interface ItemAttributeModifier {
  attr: string
  val?: number
  objVal?: string
  slot?: string
  cond?: true
  condindex?: number
}

interface AccessoryMod {
  hook: string
  item: string
  included?: true
  rating?: number
}

interface SkillMod {
  ref: string
  val?: number
  modType?: string
  cond?: true
  condIndex?: number
}

interface ItemMod {
  item: string
  rating?: number
  remove?: true
}

export interface Modifications {
  itemhookmod?: Hook[]
  attrmod?: AttackRatingModifier[]
  itemattrmod?: (ItemAttributeModifier | AttackRatingModifier)[]
  accessorymod?: AccessoryMod[]
  edgemod?: { type: "BONUS"; skill: string }[]
  skillmod?: SkillMod[]
  itemmod?: ItemMod[]
  dmgtypemod?: { type: "PHYSICAL" | "STUN" }
  qualitymod?: { ref: string }
  lifecostmod?: { percent: number }
  relevancemod?: { topic: string }
  moditemmod?: { ref: string }
  powermod?: string
}

export interface Requirements {
  itemreq?: { item: string }
  itemtypereq?: { type: string }
  itemsubtypereq?: { type: string }
  slotreq?: UseAs
  attrreq?: { attribute: string; value: number }
}

export interface GearArmor extends Gear {
  armor: {
    rating: number
    social?: number
    // adds to other armor instead of replacing it
    add?: true
  }
}

export interface GearCyberware extends Gear {
  language?: "fr" | "de" | "en"
  modOnly?: true
  cyberdeck?: {
    dataProcessing: number
    firewall: number
    initative: number
  }
  mods?: GearCyberware[]
}

export interface GearFocus extends Gear {
  karma: number
}

type AttackRating = [
  close: number,
  near: number,
  medium: number,
  far: number,
  extreme: number,
]

interface Weapon {
  dv: string
  ar: AttackRating
  skill: string
  specialization?: string
}

interface Firearm extends Weapon {
  mode: string
  ammo: string
  nowifi?: true
}

export interface GearWeapon extends Gear {
  weapon: Weapon
}

export interface GearProjectile extends Gear {
  weapon: Weapon | Firearm
}

export interface GearFirearm extends Gear {
  weapon: Firearm
}

export interface GearVehicle extends Gear {
  vehicle: {
    handling: string
    acceleration: number
    speedInterval: number
    topSpeed: number
    body: number
    armor: number
    pilot: number
    sensor: number
    seat?: number
  }
}

export interface GearElectronic extends Gear {
  deviceRating: number
}

export interface GearMatrixCommlink extends GearElectronic {
  matrixAttributes: {
    dataProcessing: number
    firewall: number
    programs: number
  }
}

export interface GearMatrixCyberdeck extends GearElectronic {
  matrixAttributes: {
    attack: number
    sleaze: number
    programs: number
  }
}
