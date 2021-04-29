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
}

export interface Gear {
  name: string
  availability: string
  cost: number
}

export interface GearMod extends Gear {
  useAs: (AsModAccessory | AsCyberwareInstall)[]
  modifications?: {
    attrmod: {
      attribute: string
      attackRating: attackRating
    }
  }
}

export interface GearModRated extends GearMod, GearTyped {}

interface AsModAccessory extends AsElectronicAccessory, Partial<Gear> {}

interface AsCyberwareInstall extends Omit<AsModAccessory, "slot"> {
  essense?: number
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

export interface GearTyped extends Gear, GearTypes {
  minRating?: number
  maxRating?: number
  rating?: true
  currentRating?: number
  rateMultiplier?: "cost" | "capacity cost"
  count?: true
}

interface ModifiableGear {
  // TODO: Stop being a typescript hack
  mods?: (GearMod & Partial<GearModRated>)[]
}

export interface GearModdableRated extends GearTyped, ModifiableGear {
  modifications: {
    itemhookmod: GearModHooks
  }
  useAs?: Partial<AsElectronicAccessory>[] // TODO: I really need to untangle all these types
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

interface AsElectronicAccessory extends GearTypes {
  slot: string
  capacity?: number
}

export interface GearElectronicAccessory extends GearElectronic {
  requires: {
    slotreq: {
      slot: string
    }
  }
  useAs?: AsElectronicAccessory[]
}

interface BaseArmor {
  rating: number
  social?: number
  add?: true
}

export interface GearArmor extends Gear, Partial<GearTypes> {
  armor: BaseArmor
  useAs?: GearTypes
  modifications: {
    itemhookmod: GearModHooks
    itemmod?: ItemAccessory
  }
  modonly?: true
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

interface AsAccessory extends GearTypes {
  slot: string
  capacity: number
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
  }
  weapon: FireArm
}
