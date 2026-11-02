import {
  GearElectronic,
  GearMatrixCommlink,
  GearMatrixCyberdeck,
  Gear,
} from "@/types/Resources"

export const commlinkData: GearMatrixCommlink[] = [
  {
    availability: "2",
    cost: 100,
    deviceRating: 1,
    name: "Meta Link",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 1,
      firewall: 0,
      programs: 0,
    },
  },
  {
    availability: "2",
    cost: 700,
    deviceRating: 2,
    name: "Sony Emporer",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 1,
      firewall: 1,
      programs: 1,
    },
  },
  {
    availability: "2",
    cost: 1000,
    deviceRating: 3,
    name: "Renraku Sensei",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 2,
      firewall: 0,
      programs: 1,
    },
  },
  {
    availability: "2",
    cost: 2500,
    deviceRating: 4,
    name: "Erika Elite",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 2,
      firewall: 1,
      programs: 2,
    },
  },
  {
    availability: "3",
    cost: 5000,
    deviceRating: 5,
    name: "Hermes Ikon",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 3,
      firewall: 0,
      programs: 2,
    },
  },
  {
    availability: "3",
    cost: 8000,
    deviceRating: 6,
    name: "Transys Avalon",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Commlink",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Commlink",
      },
      {
        type: "CYBERWARE",
        subtype: "Commlink",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "Commlink",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 3,
      firewall: 1,
      programs: 3,
    },
  },
]

export const cyberdeckData: GearMatrixCyberdeck[] = [
  {
    availability: "3I",
    cost: 24750,
    deviceRating: 1,
    name: "Erika Mcd6",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 4,
      sleaze: 3,
      programs: 2,
    },
  },
  {
    availability: "3I",
    cost: 61500,
    deviceRating: 2,
    name: "Spinrad Falcon",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 5,
      sleaze: 4,
      programs: 4,
    },
  },
  {
    availability: "3I",
    cost: 95000,
    deviceRating: 3,
    name: "Mct 360",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 6,
      sleaze: 5,
      programs: 6,
    },
  },
  {
    availability: "4I",
    cost: 107000,
    deviceRating: 4,
    name: "Renraku Kitsune",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 7,
      sleaze: 6,
      programs: 8,
    },
  },
  {
    availability: "5I",
    cost: 172500,
    deviceRating: 5,
    name: "Shiawase Cyber6",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 8,
      sleaze: 7,
      programs: 10,
    },
  },
  {
    availability: "6I",
    cost: 410600,
    deviceRating: 6,
    name: "Fairlight Excalibur",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    subtype: "Cyberdeck",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Cyberdeck",
      },
      {
        type: "CYBERWARE",
        subtype: "Cyberdeck",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "Cyberdeck",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      attack: 9,
      sleaze: 8,
      programs: 12,
    },
  },
]

export const riggerConsoleData: GearMatrixCommlink[] = [
  {
    availability: "1L",
    cost: 1400,
    deviceRating: 1,
    name: "Scratch Built Junk",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 3,
      firewall: 2,
      programs: 3,
    },
  },
  {
    availability: "3L",
    cost: 8000,
    deviceRating: 2,
    name: "Allegiance Control Center",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 3,
      firewall: 3,
      programs: 3,
    },
  },
  {
    availability: "3L",
    cost: 16000,
    deviceRating: 3,
    name: "Essy Motors Drone Master",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 4,
      firewall: 4,
      programs: 4,
    },
  },
  {
    availability: "4L",
    cost: 32000,
    deviceRating: 4,
    name: "Horizons Overseer",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 5,
      firewall: 4,
      programs: 5,
    },
  },
  {
    availability: "5L",
    cost: 34000,
    deviceRating: 4,
    name: "Maersk Spider",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 4,
      firewall: 5,
      programs: 4,
    },
  },
  {
    availability: "5L",
    cost: 66000,
    deviceRating: 5,
    name: "Vulcan Liegelord",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 6,
      firewall: 5,
      programs: 6,
    },
  },
  {
    availability: "6L",
    cost: 68000,
    deviceRating: 5,
    name: "Proteus Poseidon",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 5,
      firewall: 6,
      programs: 5,
    },
  },
  {
    availability: "7L",
    cost: 75000,
    deviceRating: 6,
    name: "Transys Eidolon",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 6,
      firewall: 5,
      programs: 6,
    },
  },
  {
    availability: "8L",
    cost: 95000,
    deviceRating: 6,
    name: "Ares Red Dog Series",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 7,
      firewall: 6,
      programs: 7,
    },
  },
  {
    availability: "9L",
    cost: 140000,
    deviceRating: 6,
    name: "Aztechnology Tlaloc",
    reference: [{ book: "SR6 Berlin", page: 197 }],
    subtype: "Rigger console",
    type: "ELECTRONICS",
    modifications: {
      itemhookmod: [
        {
          hook: "ELECTRONIC ACCESSORY",
        },
        {
          hook: "SOFTWARE",
          capacity: 99,
        },
        {
          hook: "SOFTWARE RIGGER",
          capacity: 99,
        },
        {
          hook: "SOFTWARE DRONE",
          capacity: 99,
        },
      ],
    },
    matrixAttributes: {
      dataProcessing: 8,
      firewall: 7,
      programs: 8,
    },
  },
]

export const electronicAccessoriesData: GearElectronic[] = [
  {
    availability: "2",
    cost: 100,
    deviceRating: 3,
    name: "Sim Module",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ACCESSORY",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "2I",
    cost: 250,
    deviceRating: 3,
    name: "Sim Module Hot",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ACCESSORY",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "1",
    cost: 150,
    deviceRating: 3,
    name: "Ar Gloves",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ACCESSORY",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "2",
    cost: 200,
    deviceRating: 3,
    name: "Biometric Reader",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ACCESSORY",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "1",
    cost: 5,
    deviceRating: 1,
    name: "Electronic Paper",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "1",
    cost: 25,
    deviceRating: 3,
    name: "Printer",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "3",
    cost: 500,
    deviceRating: 4,
    name: "Satellite Link",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "4",
    cost: 1000,
    deviceRating: 3,
    name: "Simrig",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "1",
    cost: 200,
    deviceRating: 3,
    name: "Trid Projector",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "2",
    cost: 50,
    deviceRating: 3,
    name: "Subvocal Microphone",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
  {
    availability: "1",
    cost: 70,
    deviceRating: 3,
    name: "Trodes",
    reference: [{ book: "SR6 Berlin", page: 268 }],
    subtype: "Electronic accessories",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "Electronic accessories",
        slot: "ELECTRONIC ACCESSORY",
      },
      {
        type: "ACCESSORY",
        subtype: "Electronic accessories",
        slot: "HELMET ACCESSORY",
        capacity: 0,
      },
    ],
    requires: {
      slotreq: {
        slot: "ELECTRONIC ACCESSORY",
      },
    },
  },
]

export const tagsData: GearElectronic[] = [
  {
    availability: "1",
    cost: 1,
    deviceRating: 1,
    name: "Standard Tag",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 5,
    deviceRating: 1,
    name: "Datachip",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Security Tag",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Stealth Tag",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 40,
    deviceRating: 2,
    name: "Sensor Tag",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
]

export const otherElectronics: Gear[] = [
  {
    availability: "3",
    cost: 200,
    name: "Bug Scanner",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 300,
    name: "Data Tap",
    reference: [{ book: "SR6 Berlin", page: 271 }],
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "5I",
    cost: 150,
    name: "Headjammer",
    reference: [{ book: "SR6 Berlin", page: 269 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "4L",
    cost: 200,
    name: "Jammer Area",
    reference: [{ book: "SR6 Berlin", page: 270 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "4L",
    cost: 200,
    name: "Jammer Direct",
    reference: [{ book: "SR6 Berlin", page: 270 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 100,
    name: "Micro-transceiver",
    reference: [{ book: "SR6 Berlin", page: 270 }],
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 450,
    name: "Tag Eraser",
    reference: [{ book: "SR6 Berlin", page: 270 }],
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 50,
    name: "White Noise Generator",
    reference: [{ book: "SR6 Berlin", page: 270 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 5,
    name: "Credstick Standard",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 20,
    name: "Credstick Silver",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 100,
    name: "Credstick Gold",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 500,
    name: "Credstick Platin",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "5",
    cost: 1000,
    name: "Credstick Ebony",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "4I",
    cost: 2500,
    name: "Fake SIN",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "4I",
    cost: 200,
    name: "Fake License",
    reference: [{ book: "SR6 Berlin", page: 273 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
]

export const softwareData: Gear[] = [
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Browse",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Baby Monitor",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Configurator",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Edit",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Encryption",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Signal Scrubber",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Toolbox",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "BASIC PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "BASIC PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Virtual Machine",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Armor",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Biofeedback",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Biofeedback Filter",
    reference: [{ book: "SR6 Berlin", page: 184 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Blackout",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Decryption",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Disarm",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Defuse",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Exploit",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Fork",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Lockdown",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Overclock",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Stealth",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "HACKING PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "HACKING PROGRAM",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Trace",
    reference: [{ book: "SR6 Berlin", page: 185 }],
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Clearsight",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1I",
    cost: 500,
    name: "Electronic Warfare",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Evasion",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Maneuvering",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Stealth Auto",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "AUTOSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUTOSOFT",
        slot: "SOFTWARE DRONE",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Targeting",
    reference: [{ book: "SR6 Berlin", page: 201 }],
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    choice: "WEAPON",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Armor Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Encryption Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Signal Scrubber Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "4I",
    cost: 250,
    name: "Stealth Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Toolbox Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "RIGGER PROGRAM",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "RIGGER PROGRAM",
        slot: "SOFTWARE RIGGER",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 60,
    name: "Virtual Machine Rig",
    reference: [{ book: "SR6 Berlin", page: 198 }],
  },
  {
    type: "ACCESSORY",
    subtype: "OTHER PROGRAMS",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OTHER PROGRAMS",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 120,
    name: "Datasoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    choice: "NAME",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "OTHER PROGRAMS",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OTHER PROGRAMS",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 100,
    name: "Mapsoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    choice: "NAME",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "OTHER PROGRAMS",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OTHER PROGRAMS",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 150,
    name: "Shopsoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    multi: true,
    choice: "NAME",
  },
  {
    type: "ACCESSORY",
    subtype: "OTHER PROGRAMS",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OTHER PROGRAMS",
        slot: "SOFTWARE",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 400,
    name: "Tutorsoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    multi: true,
    choice: "NAME",
    rating: true,
    maxRating: 6,
    rateMultiplier: "cost avail3",
  },
  {
    type: "ACCESSORY",
    subtype: "SKILLSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "SKILLSOFT",
        slot: "SKILLJACK",
        capacity: 1,
      },
    ],
    modifications: {
      skillmod: [
        {
          ref: "SKILL",
          val: 1,
          modType: "ALTERNATE",
        },
      ],
    },
    availability: "4",
    cost: 5000,
    name: "Activesoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    multi: true,
    choice: "PHYSICAL SKILL",
  },
  {
    type: "ACCESSORY",
    subtype: "SKILLSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "SKILLSOFT",
        slot: "SKILLJACK",
        capacity: 1,
      },
    ],
    modifications: {
      skillmod: [
        {
          ref: "knowledge",
          val: 1,
          modType: "ALTERNATE",
        },
      ],
    },
    availability: "2",
    cost: 2500,
    name: "Knowsoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    choice: "NAME",
    multi: true,
  },
  {
    type: "ACCESSORY",
    subtype: "SKILLSOFT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "SKILLSOFT",
        slot: "SKILLJACK",
        capacity: 1,
      },
    ],
    modifications: {
      skillmod: [
        {
          ref: "language",
          val: 1,
          modType: "ALTERNATE",
        },
      ],
    },
    availability: "1",
    cost: 1500,
    name: "Linguasoft",
    reference: [{ book: "SR6 Berlin", page: 272 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    choice: "NAME",
    multi: true,
  },
]
