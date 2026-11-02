import { Echo } from "@/types/Matrix"

export const echoes: Echo[] = [
  {
    name: "Living Network",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
  },
  {
    name: "Machine Mind",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
  },
  {
    modifications: {
      attrmod: {
        attribute: "ATTACK",
        value: 1,
        type: "AUGMENTED",
      },
    },
    name: "Attack Upgrade",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
    max: 2,
  },
  {
    modifications: {
      attrmod: {
        attribute: "DATA PROCESSING",
        value: 1,
        type: "AUGMENTED",
      },
    },
    name: "Data Processing Upgrade",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
    max: 2,
  },
  {
    modifications: {
      attrmod: {
        attribute: "FIREWALL",
        value: 1,
        type: "AUGMENTED",
      },
    },
    name: "Firewall Upgrade",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
    max: 2,
  },
  {
    modifications: {
      attrmod: {
        attribute: "SLEAZE",
        value: 1,
        type: "AUGMENTED",
      },
    },
    name: "Sleaze Upgrade",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
    max: 2,
  },
  {
    name: "Neurofilter",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
    max: 2,
  },
  {
    modifications: {
      attrmod: {
        attribute: "INITIATIVE DICE MATRIX VR HOT",
        value: 1,
        type: "AUGMENTED",
      },
    },
    name: "Overclocking",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
  },
  {
    name: "Resonance Link",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
  },
  {
    name: "Skin Link",
    reference: [{ book: "SR6", page: 195 }],
    type: "ECHO",
  },
]
