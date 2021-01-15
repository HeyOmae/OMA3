import {
  GearElectronic,
  GearElectronicAccessory,
  GearMatrixCommlink,
  GearMatrixCyberdeck,
  GearTyped,
} from "@/types/Resources"

export const commlinkData: GearMatrixCommlink[] = [
  {
    availability: "2",
    cost: 100,
    deviceRating: 1,
    name: "Meta Link",
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "COMMLINK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "COMMLINK",
      },
      {
        type: "CYBERWARE",
        subtype: "COMMLINK",
        essence: 0.2,
        cost: 2000,
      },
      {
        type: "ACCESSORY",
        subtype: "COMMLINK",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
        cost: 2000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "CYBERDECK",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "CYBERDECK",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBERDECK",
        essence: 0.4,
        cost: 5000,
      },
      {
        type: "ACCESSORY",
        subtype: "CYBERDECK",
        capacity: 4,
        slot: "HEADWARE IMPLANT",
        cost: 5000,
      },
    ],
    modifications: [
      {
        hook: "ELECTRONIC ACCESSORY",
      },
      {
        hook: "SOFTWARE",
        capacity: 99,
      },
    ],
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    subtype: "RIGGER CONSOLE",
    type: "ELECTRONICS",
    modifications: [
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
    matrixAttributes: {
      dataProcessing: 8,
      firewall: 7,
      programs: 8,
    },
  },
]

export const electronicAccessoriesData: GearElectronicAccessory[] = [
  {
    availability: "2",
    cost: 100,
    deviceRating: 3,
    name: "Sim Module",
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "ELECTRONIC ACCESSORIES",
    type: "ELECTRONICS",
    useAs: [
      {
        type: "ELECTRONICS",
        subtype: "ELECTRONIC ACCESSORIES",
        slot: "ELECTRONIC ACCESSORY",
      },
      {
        type: "ACCESSORY",
        subtype: "ELECTRONIC ACCESSORIES",
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
    subtype: "RFID",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 5,
    deviceRating: 1,
    name: "Datachip",
    subtype: "RFID",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Security Tag",
    subtype: "RFID",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Stealth Tag",
    subtype: "RFID",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 40,
    deviceRating: 2,
    name: "Sensor Tag",
    subtype: "RFID",
    type: "ELECTRONICS",
  },
]

export const commAndCounterData: GearTyped[] = [
  {
    availability: "3",
    cost: 200,
    name: "Bug Scanner",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 300,
    name: "Data Tap",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "5I",
    cost: 150,
    name: "Headjammer",
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "4L",
    cost: 200,
    name: "Jammer Area",
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "4L",
    cost: 200,
    name: "Jammer Direct",
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 100,
    name: "Micro-transceiver",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 450,
    name: "Tag Eraser",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 50,
    name: "White Noise Generator",
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "COMMUNICATION",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 5,
    name: "Credstick Standard",
    subtype: "ID CREDIT",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 20,
    name: "Credstick Silver",
    subtype: "ID CREDIT",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 100,
    name: "Credstick Gold",
    subtype: "ID CREDIT",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 500,
    name: "Credstick Platin",
    subtype: "ID CREDIT",
    type: "ELECTRONICS",
  },
  {
    availability: "5",
    cost: 1000,
    name: "Credstick Ebony",
    subtype: "ID CREDIT",
    type: "ELECTRONICS",
  },
]
