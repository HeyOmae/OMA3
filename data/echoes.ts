import { Echo } from "@/types/Matrix"

export const echoes: Echo[] = [
  {
    name: "Living Network",
    type: "ECHO",
  },
  {
    name: "Machine Mind",
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
    type: "ECHO",
    max: 2,
  },
  {
    name: "Neurofilter",
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
    type: "ECHO",
  },
  {
    name: "Resonance Link",
    type: "ECHO",
  },
  {
    name: "Skin Link",
    type: "ECHO",
  },
]
