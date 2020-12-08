export interface Gear {
  name: string
  availability: string
  cost: number
}

interface BaseWeapon {
  dv: string
  ar: [
    close: number,
    near: number,
    medium: number,
    far: number,
    extreme: number,
  ]
  skill: string
  specialization?: string
}

interface FireArm extends BaseWeapon {
  mode: string
  ammo: string
  nowifi?: true
}

interface AsWeapon {
  type: string
  subtype: string
}

interface AsAccessory extends AsWeapon {
  slot: string
  capacity: number
  availability: string
  cost: number
}

interface AsVehicleAccessory {
  subtype: string
  slot: string
}

export interface GearWeaponMelee extends Gear {
  useAs: [
    asWeapon: AsWeapon,
    asAccessory?: AsAccessory | AsVehicleAccessory | AsWeapon,
    asVehicleAccessory?: AsVehicleAccessory,
  ]
  weapon: BaseWeapon
}

export interface GearWeaponsBows extends GearWeaponMelee {
  requires: {
    attrreq: {
      attribute: string
      value: number
    }
  }
}

interface WeaponModHooks {
  hook: string
}

interface AccessoryMod extends WeaponModHooks {
  item: string
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
    itemhookmod: WeaponModHooks[]
    accessorymod?: AccessoryMod[]
    moditemmod?: {
      ref: string
    }
  }
  weapon: FireArm
}
