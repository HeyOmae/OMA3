import { GearModdableRated } from "@/types/Resources"

export const sensors: GearModdableRated[] = [
  {
    type: "ELECTRONICS",
    subtype: "SENSOR HOUSING",
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "SENSOR HOUSING",
      },
    },
    availability: "1",
    cost: 100,
    name: "Handheld Housing",
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ELECTRONICS",
    subtype: "SENSOR HOUSING",
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "SENSOR HOUSING",
      },
    },
    availability: "1",
    cost: 250,
    name: "Wall-mounted Housing",
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "SENSOR",
        slot: "SENSOR HOUSING",
        capacity: 1,
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "SENSOR FUNCTION",
      },
    },
    availability: "3",
    cost: 1000,
    name: "Sensor Array",
    minRating: 2,
    maxRating: 8,
    rating: true,
    rateMultiplier: "capacity cost",
    type: "ELECTRONICS",
    subtype: "SENSOR HOUSING",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "SENSOR",
        slot: "SENSOR HOUSING",
        capacity: 1,
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "SENSOR FUNCTION",
      },
    },
    availability: "2",
    cost: 100,
    name: "Single Sensor",
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost",
    type: "ELECTRONICS",
    subtype: "SENSOR HOUSING",
  },
]
