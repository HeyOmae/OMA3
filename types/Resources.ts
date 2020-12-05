export interface Gear {
  name: string
  availability: number
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
  specialization: string
}

interface FireArm extends BaseWeapon {
  mode: string
  ammo: string
  nowifi?: true
}

export interface GearWeaponMelee extends Gear {
  useAs: [
    asWeapon: {
      type: string
      subtype: string
    },
    asAccessory?: {
      type: string
      subtype: string
      slot: string
      capacity: number
      availability: number
      cost: number
    },
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

export interface GearWeaponFireArms extends GearWeaponMelee {
  modonly?: true
  requires?: {
    itemreq: {
      item: string
    }
  }
  modifictions?: {
    itemhookmod: WeaponModHooks[]
    accessorymod?: {
      hook: string
      item: string
      include: boolean
    }
    moditemmod?: {
      ref: string
    }
  }
  weapon: FireArm
}
