import type { ComplexForm } from "../types/MagRes"

// Every complex form a technomancer can learn

const complexForms: ComplexForm[] = [
  {
    name: "Cleaner",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Permanent",
    fade: 2,
  },
  {
    name: "Diffusion",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 4,
    choice: "MATRIX ATTRIBUTE",
    multiple: true,
  },
  {
    name: "Editor",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Permanent",
    fade: 3,
  },
  {
    name: "Emulate",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 0,
    choice: "PROGRAM",
    multiple: true,
  },
  {
    name: "Infusion",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 4,
    choice: "MATRIX ATTRIBUTE",
    multiple: true,
  },
  {
    name: "Mirrored Persona",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 3,
  },
  {
    name: "Pulse Storm",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Immediate",
    fade: 3,
  },
  {
    name: "Puppeteer",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 5,
  },
  {
    name: "Resonance Channel",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 2,
  },
  {
    name: "Resonance Spike",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Immediate",
    fade: 4,
  },
  {
    name: "Resonance Veil",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Sustained",
    fade: 4,
  },
  {
    name: "Static Bomb",
    reference: [{ book: "SR6", page: 190 }],
    duration: "Immediate",
    fade: 6,
  },
  {
    name: "Static Veil",
    reference: [{ book: "SR6", page: 191 }],
    duration: "Sustained",
    fade: 3,
  },
  {
    name: "Stitches",
    reference: [{ book: "SR6", page: 191 }],
    duration: "Permanent",
    fade: 4,
  },
  {
    name: "Tattletale",
    reference: [{ book: "SR6", page: 191 }],
    duration: "Permanent",
    fade: 3,
  },
]
export default complexForms
