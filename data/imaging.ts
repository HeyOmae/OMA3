import { Gear } from "@/types/Resources"

export type ImagingGear = Gear | Gear

export const imaging: ImagingGear[] = [
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 50,
    name: "Binoculars",
    reference: [{ book: "SR6 Berlin", page: 274 }],
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
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 100,
    name: "Camera",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 100,
    name: "Microcamera",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "2",
    cost: 200,
    name: "Contacts",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 100,
    name: "Glasses",
    reference: [{ book: "SR6 Berlin", page: 274 }],
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
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 50,
    name: "Goggles",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 3,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 350,
    name: "Imaging Scope Single",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "OPTICAL",
        },
      ],
    },
    availability: "1",
    cost: 120,
    name: "Monocle",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    maxRating: 4,
    rating: true,
    rateMultiplier: "capacity cost",
    subtype: "IMAGING",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 50,
    name: "Binoculars Optical",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    subtype: "OPTICAL",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 250,
    name: "Endoscope",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    subtype: "OPTICAL",
    type: "ELECTRONICS",
  },
  {
    availability: "5",
    cost: 3000,
    name: "Mage-sight-goggles",
    reference: [{ book: "SR6 Berlin", page: 274 }],
    subtype: "OPTICAL",
    type: "ELECTRONICS",
  },
]
