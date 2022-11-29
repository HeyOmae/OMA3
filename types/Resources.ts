export interface Resources {
  melee: GearWeaponMelee[]
  projectile: GearWeaponsProjectile[]
  firearms: GearWeaponFireArms[]
  armor: GearArmor[]
  commlink: GearMatrixCommlink[]
  cyberdeck: GearMatrixCyberdeck[]
  riggerConsole: GearMatrixCommlink[]
  electronicAccessories: GearElectronicAccessory[]
  tags: GearElectronic[]
  otherElectronics: GearTyped[]
  imaging: (GearModdableRated & GearTyped)[]
  audio: GearModdableRated[]
  sensor: GearModdableRated[]
  locks: GearTyped[]
  restraints: GearTyped[]
  bne: GearTyped[]
  chemicals: GearTyped[]
  survival: (GearTyped | GearModdableRated)[]
  grappleGun: GearTyped[]
  toxins: GearTyped[]
  drugs: GearTyped[]
  biotech: GearTyped[]
  drones: GearDrones[]
  vehicles: GearDrones[]
  cyberware: GearCyberware[]
  bioware: GearBioware[]
}

export interface Gear {
  name: string
  availability: string
  cost: number
}

interface ItemAttributeMod {
  attr: string
  val?: number
  objVal?: string
  cond?: true
  condindex?: number
}

interface AttackRatingModifier {
  attribute: string
  attackRating?: attackRating
  value?: number
  type?: string
  modType?: string
  cyber?: true
  cond?: true
  condIndex?: number
}

export interface GearMod<UseAs = (AsModAccessory | AsCyberwareInstall)[]>
  extends Gear {
  useAs?: UseAs
  modifications?: {
    attrmod?: AttackRatingModifier | AttackRatingModifier[]
    itemattrmod?: ItemAttributeMod[] | AttackRatingModifier
    itemhookmod?: GearModHooks
    accessorymod?: AccessoryMod[]
    edgemod?: EdgeMod[]
    skillmod?: SkillMod[]
    itemmod?: ItemAccessory[]
    dmgtypemod?: { type: "PHYSICAL" | "STUN" }
    qualitymod?: {
      ref: string
    }
    lifecostmod?: {
      percent: number
    }
    relevancemod?: RelevanceMod
  }
}

interface ItemRequired {
  item: string
}

type WeaponSlot =
  | "TOP"
  | "BARREL"
  | "UNDER"
  | "STOCK"
  | "FIREARMS EXTERNAL"
  | "CYBERLIMB IMPLANT"

export interface GearModUseAs<SlotType = string> extends Partial<GearTypes> {
  slot?: SlotType
  capacity?: number
}

export interface ArmorMod extends GearWithRating {
  useAs: [GearModUseAs<"ARMOR">]
  requires?: {
    itemreq: ItemRequirement
  }
}

export interface FirearmMod
  extends GearMod<GearModUseAs<WeaponSlot>[]>,
    Partial<GearTypes> {
  requires?: {
    itemsubtypereq?: {
      type: string
    }
    itemtypereq?: {
      type: string
    }
    itemreq?: ItemRequired[]
    slotreq?: {
      slot: WeaponSlot
    }
  }
  multi?: true
}
interface ItemRequirement {
  item: string
}

export interface GearDroneMod extends GearTyped {
  requires: {
    slotreq: GearModUseAs
    itemreq?: ItemRequirement
  }
  modifications?: {
    itemhookmod: GearModHooks
    accessorymod?: {
      hook: string
      item: string
    }
  }
  multi?: true
}

export interface GearDrones extends Gear, GearTypes {
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
  modifications?: {
    itemattrmod?: {
      Attr: "CAPACITY"
      Slot: "VEHICLEBODY"
      Val: number
    }
    accessorymod?: {
      Item: "Weapon Mount Standard"
      Hook: "VEHICLEBODY"
    }
  }
  mods?: GearDroneMod[]
}

export interface GearModRated extends GearMod, GearTyped {}

interface AsModAccessory extends GearModUseAs, Partial<Gear> {}

interface AsCyberwareInstall extends Omit<AsModAccessory, "slot"> {
  essence?: number
  maxRating?: number
}

export interface GearTools extends Gear {
  useAs: GearTypes[]
  choice: "SKILL"
}

interface MatrixAttributes {
  programs: number
}

interface MatrixAttributesCommlinks extends MatrixAttributes {
  dataProcessing: number
  firewall: number
}

interface MatrixAttributesCyberdeck extends MatrixAttributes {
  attack: number
  sleaze: number
}

export interface GearWithRating extends Gear {
  minRating?: number
  maxRating?: number
  rating?: true
  currentRating?: number
  rateMultiplier?:
    | "cost"
    | "capacity cost"
    | "cost2"
    | "cost avail"
    | "essence cost"
    | "essence cost2"
    | "essence capacity cost"
    | "essence cost modifier"
    | "essence cost defenseRating"
    | "cost avail capacity modifier"
  count?: true
}

export interface GearTyped extends GearWithRating, GearTypes {}

interface SkillMod {
  ref: string
  cond?: true
  condIndex?: number
  val?: number
}

interface RelevanceMod {
  topic: string
}

interface FocusModifications {
  skillmod?: SkillMod[]
  relevancemod?: RelevanceMod
  powermod?: string
}

export interface GearFocus extends GearWithRating {
  karma: number
  modifications?: FocusModifications
  choice?: "ADEPT_POWER" | "SPELL_CATEGORY" | "SPIRIT" | "MELEE_WEAPON"
}

export interface ModifiableGear<M = (GearMod & Partial<GearModRated>)[]> {
  // TODO: Stop being a typescript hack
  mods?: M
}

export interface GearModdableRated
  extends GearTyped,
    ModifiableGear,
    GearMod<Partial<GearModUseAs>[]> {}

export interface GearAugmentationUseAs extends GearTypes {
  essence: string
}

interface EdgeMod {
  type: "BONUS"
  skill: string
}
export interface GearAugmentation<UseAs = GearAugmentationUseAs>
  extends GearMod<UseAs>,
    GearWithRating,
    Partial<GearTypes> {}

export interface GearCyberware
  extends GearAugmentation<Array<GearAugmentationUseAs | GearModUseAs>>,
    ModifiableGear<GearCyberware[]> {
  language?: "fr" | "de" | "en"
  modOnly?: true
  cyberdeck?: {
    dataProcessing: number
    firewall: number
    initative: number
  }
}

export interface GearBioware extends GearAugmentation {
  choice?: "PHYSICAL SKILL"
}

export interface GearElectronic extends GearTyped {
  deviceRating: number
}

export interface GearMatrixGear extends GearElectronic {
  useAs?: (AsAccessory | GearTypes)[]
  modifications: GearModHooks[]
  matrixAttributes: MatrixAttributesCommlinks | MatrixAttributesCyberdeck
}

export interface GearMatrixCommlink extends GearMatrixGear {
  matrixAttributes: MatrixAttributesCommlinks
}

export interface GearMatrixCyberdeck extends GearMatrixGear {
  matrixAttributes: MatrixAttributesCyberdeck
}

export interface GearElectronicAccessory extends GearElectronic {
  requires: {
    slotreq: {
      slot: string
    }
  }
  useAs?: GearModUseAs[]
}

interface BaseArmor {
  rating: number
  social?: number
  add?: true
}

export interface GearArmor
  extends Gear,
    Partial<GearTypes>,
    GearMod<GearTypes> {
  armor: BaseArmor
  modonly?: true
  mods?: ArmorMod[]
}

type attackRating = [
  close: number,
  near: number,
  medium: number,
  far: number,
  extreme: number,
]

interface BaseWeapon {
  dv: string
  ar: attackRating
  skill: string
  specialization?: string
}

interface FireArm extends BaseWeapon {
  mode: string
  ammo: string
  nowifi?: true
}

interface GearTypes {
  type: string
  subtype: string
}

interface AsAccessory extends GearModUseAs {
  essence?: number
  availability?: string
  cost: number
}

interface AsVehicleAccessory {
  subtype: string
  slot: string
}

export interface GearWeaponMelee extends Gear {
  useAs: [
    asWeapon: GearTypes,
    asAccessory?: AsAccessory | AsVehicleAccessory | GearTypes,
    asVehicleAccessory?: AsVehicleAccessory,
  ]
  weapon: BaseWeapon
}

export interface GearWeaponsProjectile extends GearWeaponMelee {
  requires?: {
    attrreq: {
      attribute: string
      value: number
    }
  }
  weapon: BaseWeapon | FireArm
  modifications?: GearModHooks[]
}

interface GearModHooks {
  capacity?: number
  hook: string
}

interface ItemAccessory {
  item: string
  rating?: number
  remove?: true
}

interface AccessoryMod extends GearModHooks, ItemAccessory {
  included?: true
  rating?: number
}

export interface GearWeaponFireArms extends GearWeaponMelee {
  modonly?: true
  requires?: {
    itemreq: {
      item: string
    }
  }
  modifications?: {
    itemhookmod: GearModHooks[]
    accessorymod?: AccessoryMod[]
    moditemmod?: {
      ref: string
    }
    itemattrmod?: ItemAttributeMod[]
  }
  weapon: FireArm
  mods?: FirearmMod[]
}
