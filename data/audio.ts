import { GearModdableRated } from "@/types/Resources"

export const audio: GearModdableRated[] = [
  {
    type: "ELECTRONICS",
    subtype: "AUDIO",

    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "AUDIO",
      },
    },
    availability: "2",
    cost: 50,
    name: "Directional Microphone",
    reference: [{ book: "SR5", page: 441 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ELECTRONICS",
    subtype: "AUDIO",

    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "AUDIO",
      },
    },
    availability: "1",
    cost: 50,
    name: "Earbuds",
    reference: [{ book: "SR5", page: 441 }],
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ELECTRONICS",
    subtype: "AUDIO",

    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "AUDIO",
      },
    },
    availability: "1",
    cost: 50,
    name: "Headphones",
    reference: [{ book: "SR5", page: 441 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ELECTRONICS",
    subtype: "AUDIO",

    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "AUDIO",
      },
    },
    availability: "2",
    cost: 100,
    name: "Laser Microphone",
    reference: [{ book: "SR5", page: 441 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ELECTRONICS",
    subtype: "AUDIO",

    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "AUDIO",
      },
    },
    availability: "1",
    cost: 50,
    name: "Omnidirectional Microphone",
    reference: [{ book: "SR5", page: 441 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
]
