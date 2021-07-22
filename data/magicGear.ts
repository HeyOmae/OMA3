import { Gear, GearTyped } from "@/types/Resources"

export const magicSupplies: GearTyped[] = [
  {
    name: "Magical Lodge Materials",
    availability: "1",
    cost: 500,
    maxRating: 24,
    rating: true,
    rateMultiplier: "cost avail",
    type: "MAGICAL",
    subtype: "MAGICAL_SUPPLIES",
    count: true,
  },
  {
    name: "Reagents per dram",
    availability: "2",
    cost: 50,
    type: "MAGICAL",
    subtype: "MAGICAL_SUPPLIES",
    count: true,
  },
]

export const spellFormula: Gear[] = [
  {
    name: "Combat Formula",
    availability: "3L",
    cost: 2000,
  },
  {
    name: "Detection Formula",
    availability: "2L",
    cost: 500,
  },
  {
    name: "Health Formula",
    availability: "2L",
    cost: 500,
  },
  {
    name: "Illusion Formula",
    availability: "3L",
    cost: 1000,
  },
  {
    name: "Manipulation Formula",
    availability: "3L",
    cost: 1500,
  },
]

export const focusFormula: GearTyped[] = [
  {
    name: "Enchanting focus formula",
    availability: "1L",
    cost: 1250,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Metamagic focus formula",
    availability: "1L",
    cost: 2250,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Power focus formula",
    availability: "3L",
    cost: 4500,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Qi focus formula",
    availability: "1L",
    cost: 750,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Spell focus formula",
    availability: "1L",
    cost: 1000,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Spirit focus formula",
    availability: "1L",
    cost: 1000,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Weapon focus formula",
    availability: "3L",
    cost: 1750,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
]
