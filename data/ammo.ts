import { AmmoType, GearAmmo } from "../types/Resources"

// Ammo Types, SR6 p. 262
export const ammoTypes: Record<
  AmmoType,
  { ar: number; dv: string; costMultiplier: number }
> = {
  Regular: { ar: 0, dv: "—", costMultiplier: 1 },
  APDS: { ar: 2, dv: "-1", costMultiplier: 3 },
  Explosive: { ar: 0, dv: "+1", costMultiplier: 2 },
  Flechette: { ar: 1, dv: "-1", costMultiplier: 1.5 },
  Gel: { ar: 0, dv: "S", costMultiplier: 1.5 },
  "Stick-n-Shock": { ar: 1, dv: "-1S(e)", costMultiplier: 2 },
}

export const caselessCostMultiplier = 2

// how many rounds are in one bundle, a bundle is what the cost is for
export const roundsPerBundle = 10

const reference = [{ book: "SR6 Berlin", page: 262 }]

const ammoOf = (
  name: string,
  availability: string,
  cost: number,
  regularOnly?: true,
): GearAmmo => ({
  type: "AMMO",
  subtype: name,
  name: `${name} Ammo`,
  availability,
  // per bundle of 10 rounds
  cost,
  rating: true,
  minRating: 1,
  maxRating: 50,
  rateMultiplier: "cost",
  ammo: { type: "Regular", caseless: false, regularOnly },
  reference,
})

// Ammo Costs by Weapon Type, SR6 p. 262
// Each row is a class of weapon, and every weapon in a class can share ammo
// with the others in it, so Heavy Pistols and SMGs load the same rounds.
const ammo: GearAmmo[] = [
  ammoOf("Holdout/Light Pistol/Machine Pistol", "1", 5),
  ammoOf("Heavy Pistol/SMG", "1", 10),
  ammoOf("Rifle", "2(L)", 20),
  ammoOf("Machine Gun", "2(L)", 15),
  ammoOf("Shotgun", "2(L)", 15),
  // a round that carries a toxin, which is bought separately
  ammoOf("DMSO", "1", 10, true),
  // taser darts, injection darts and DMSO rounds can't be loaded with the other
  // types, and neither can assault cannon rounds
  ammoOf("Taser", "1", 10, true),
  // the dart is 5¥, the toxin it carries is bought separately
  ammoOf("Injection Dart", "2", 5, true),
  ammoOf("Assault Cannon", "4(I)", 50, true),
]

export default ammo
