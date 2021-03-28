import { GearModRated } from "@/types/Resources"

export const imaging: GearModRated[] = [
  {
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 50,
    name: "Binoculars",
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "IMAGING",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 100,
    name: "Camera",
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 100,
    name: "Microcamera",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "2",
    cost: 200,
    name: "Contacts",
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 100,
    name: "Glasses",
    maxRating: 4,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "IMAGING",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 50,
    name: "Goggles",
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: {
        capacity: 3,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 350,
    name: "Imaging Scope Single",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1",
    cost: 120,
    name: "Monocle",
    maxRating: 4,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
]
