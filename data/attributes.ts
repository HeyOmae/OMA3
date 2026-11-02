import type { Attributes } from "../types/RunnerAttributes"

// the short label on the character sheet for each attribute
export const attributes: Record<string, Attributes> = {
  bod: "Body",
  agi: "Agility",
  rea: "Reaction",
  str: "Strength",
  wil: "Willpower",
  log: "Logic",
  int: "Intuition",
  cha: "Charisma",
}

export const technomancerAttributes: Record<string, Attributes> = {
  ...attributes,
  res: "Resonance",
}

// only the attributes on the character sheet have a short label
export const attributeMap: Record<string, string> = {
  Body: "bod",
  Agility: "agi",
  Reaction: "rea",
  Strength: "str",
  Willpower: "wil",
  Logic: "log",
  Intuition: "int",
  Charisma: "cha",
  Resonance: "res",
}
