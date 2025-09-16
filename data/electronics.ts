import {
  GearElectronic,
  GearElectronicAccessory,
  GearMatrixCommlink,
  GearMatrixCyberdeck,
  GearSoftware,
  GearTyped,
} from "@/types/Resources"

export const commlinkData: GearMatrixCommlink[] = [
  {
    availability: "2",
    cost: 100,
    deviceRating: 1,
    name: "Meta Link",
    reference: [{ book: "SR5", page: 439 }],
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
    reference: [{ book: "SR5", page: 439 }],
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
    reference: [{ book: "SR5", page: 439 }],
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rigger console",
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
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 5,
    deviceRating: 1,
    name: "Datachip",
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Security Tag",
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 10,
    deviceRating: 3,
    name: "Stealth Tag",
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 40,
    deviceRating: 2,
    name: "Sensor Tag",
    subtype: "Rfid",
    type: "ELECTRONICS",
  },
]

export const otherElectronics: GearTyped[] = [
  {
    availability: "3",
    cost: 200,
    name: "Bug Scanner",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 300,
    name: "Data Tap",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "5I",
    cost: 150,
    name: "Headjammer",
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
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 450,
    name: "Tag Eraser",
    subtype: "Communication",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 50,
    name: "White Noise Generator",
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
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "1",
    cost: 20,
    name: "Credstick Silver",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "2",
    cost: 100,
    name: "Credstick Gold",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "3",
    cost: 500,
    name: "Credstick Platin",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "5",
    cost: 1000,
    name: "Credstick Ebony",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
  {
    availability: "4I",
    cost: 2500,
    name: "Fake SIN",
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
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
    subtype: "Id credit",
    type: "ELECTRONICS",
  },
]

export const softwareData: GearSoftware[] = [
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Browse",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Baby Monitor",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Configurator",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Edit",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Encryption",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Signal Scrubber",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Toolbox",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "BASIC PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Virtual Machine",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Armor",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Biofeedback",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Biofeedback Filter",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Blackout",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Decryption",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Disarm",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Defuse",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Exploit",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Fork",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Lockdown",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Overclock",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Stealth",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "HACKING PROGRAM",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Trace",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "AUTOSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1",
    cost: 500,
    name: "Clearsight",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "SKILLSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1I",
    cost: 500,
    name: "Electronic Warfare",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "AUTOSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1",
    cost: 500,
    name: "Evasion",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "AUTOSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1",
    cost: 500,
    name: "Maneuvering",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "AUTOSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1",
    cost: 500,
    name: "Stealth Auto",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "AUTOSOFT",
      slot: "SOFTWARE DRONE",
      capacity: 1,
    },
    availability: "1",
    cost: 500,
    name: "Targeting",
    maxRating: 9,
    rating: true,
    rateMultiplier: "cost modifier avail",
    choice: "WEAPON",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Armor Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Encryption Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Signal Scrubber Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "4I",
    cost: 250,
    name: "Stealth Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Toolbox Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "RIGGER PROGRAM",
      slot: "SOFTWARE RIGGER",
      capacity: 1,
    },
    availability: "1",
    cost: 60,
    name: "Virtual Machine Rig",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "OTHER PROGRAMS",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "2",
    cost: 120,
    name: "Datasoft",
    choice: "NAME",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "OTHER PROGRAMS",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "2",
    cost: 100,
    name: "Mapsoft",
    choice: "NAME",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "OTHER PROGRAMS",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "2",
    cost: 150,
    name: "Shopsoft",
    multi: true,
    choice: "NAME",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "OTHER PROGRAMS",
      slot: "SOFTWARE",
      capacity: 1,
    },
    availability: "2",
    cost: 400,
    name: "Tutorsoft",
    multi: true,
    choice: "NAME",
    rating: true,
    maxRating: 6,
    rateMultiplier: "cost avail3",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "SKILLSOFT",
      slot: "SKILLJACK",
      capacity: 1,
    },
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
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
    multi: true,
    choice: "PHYSICAL SKILL",
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "SKILLSOFT",
      slot: "SKILLJACK",
      capacity: 1,
    },
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
    choice: "NAME",
    multi: true,
  },
  {
    useAs: {
      type: "ACCESSORY",
      subtype: "SKILLSOFT",
      slot: "SKILLJACK",
      capacity: 1,
    },
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
    maxRating: 4,
    rating: true,
    rateMultiplier: "cost",
    choice: "NAME",
    multi: true,
  },
]
