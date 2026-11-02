import type { Ritual } from "../types/MagRes"

// Every ritual

const rituals: Ritual[] = [
  {
    name: "Circle of healing",
    reference: [{ book: "SR6 Berlin", page: 144 }],
    threshold: 7,
    ritualfeature: [
      {
        ref: "anchored",
      },
      {
        ref: "spell",
      },
    ],
  },
  {
    name: "Circle of protection",
    reference: [{ book: "SR6 Berlin", page: 144 }],
    threshold: 6,
    ritualfeature: [
      {
        ref: "anchored",
      },
    ],
  },
  {
    name: "Curse",
    reference: [{ book: "SR6 Berlin", page: 145 }],
    threshold: 5,
    ritualfeature: [
      {
        ref: "material link",
      },
      {
        ref: "spell",
      },
    ],
  },
  {
    name: "Prodigal spell",
    reference: [{ book: "SR6 Berlin", page: 145 }],
    threshold: 6,
    ritualfeature: [
      {
        ref: "spell",
      },
      {
        ref: "spotter",
      },
    ],
  },
  {
    name: "Remote sensing",
    reference: [{ book: "SR6 Berlin", page: 145 }],
    threshold: 5,
    ritualfeature: [
      {
        ref: "spell",
      },
      {
        ref: "spotter",
      },
    ],
  },
  {
    name: "Renascence",
    reference: [{ book: "SR6 Berlin", page: 145 }],
    threshold: 6,
    ritualfeature: [
      {
        ref: "anchored",
      },
      {
        ref: "spell",
      },
    ],
  },
  {
    name: "Ward",
    reference: [{ book: "SR6 Berlin", page: 145 }],
    threshold: 6,
    ritualfeature: [
      {
        ref: "anchored",
      },
    ],
  },
  {
    name: "Watcher",
    reference: [{ book: "SR6 Berlin", page: 146 }],
    threshold: 4,
    ritualfeature: [
      {
        ref: "minion",
      },
    ],
  },
]
export default rituals
