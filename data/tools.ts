import { GearTools } from "@/types/Resources"

export const tools: GearTools[] = [
  {
    useAs: [
      {
        type: "TOOLS",
        subtype: "TOOLS",
      },
    ],
    availability: "1",
    cost: 500,
    name: "Kit",
    reference: [{ book: "SR5", page: 441 }],
    choice: "SKILL",
  },
  {
    useAs: [
      {
        type: "TOOLS",
        subtype: "TOOLS",
      },
    ],
    availability: "4",
    cost: 5000,
    name: "Shop",
    reference: [{ book: "SR5", page: 441 }],
    choice: "SKILL",
  },
  {
    useAs: [
      {
        type: "TOOLS",
        subtype: "TOOLS",
      },
    ],
    availability: "7",
    cost: 50000,
    name: "Facility",
    reference: [{ book: "SR5", page: 441 }],
    choice: "SKILL",
  },
]
