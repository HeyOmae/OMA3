import { GearMod, GearModRated } from "@/types/Resources"

export const imagingMods: GearMod[] = [
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 1,
        slot: "CYBEREYE IMPLANT",
        cost: 750,
        availability: "2",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 750,
        availability: "2",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 250,
    name: "Flare Compensation",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 1,
        slot: "CYBEREYE IMPLANT",
        cost: 775,
        availability: "2",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 775,
        availability: "2",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 25,
    name: "Image Link",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
        cost: 1000,
        availability: "2",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 1000,
        availability: "2",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 500,
    name: "Low Light Vision",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 2,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 3,
        slot: "CYBEREYE IMPLANT",
        cost: 2000,
        availability: "3L",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.2,
        cost: 2000,
        availability: "3L",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 2000,
    name: "Smartlink",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
        cost: 1500,
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 1500,
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "2",
    cost: 500,
    name: "Thermographic Vision",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    availability: "1",
    cost: 300,
    name: "Ultrasound Link",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 2,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
        cost: 3500,
        availability: "3",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 3500,
        availability: "3",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 2,
      },
    ],
    availability: "1",
    cost: 500,
    name: "Vision Enhancement",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        capacity: 1,
        slot: "OPTICAL",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
        cost: 1750,
        availability: "3",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essense: 0.1,
        cost: 1750,
        availability: "3",
      },
      {
        type: "ACCESSORY",
        subtype: "OPTICAL",
        slot: "HELMET ACCESSORY",
        capacity: 1,
      },
    ],
    modifications: {
      attrmod: {
        attribute: "ATTACK RATING",
        attackRating: [0, 0, 2, 2, 2],
      },
    },
    availability: "1",
    cost: 250,
    name: "Vision Magnification",
  },
]

export const audioMods: (GearMod | GearModRated)[] = [
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUDIO ENHANCEMENT",
        capacity: 1,
        slot: "AUDIO",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
        cost: 3500,
        availability: "2",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essense: 0.1,
        cost: 3500,
        availability: "2",
      },
    ],
    availability: "1",
    cost: 500,
    name: "Audio Enhancement",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUDIO ENHANCEMENT",
        capacity: 1,
        slot: "AUDIO",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
        cost: 3250,
        availability: "4",
        maxRating: 6,
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essense: 0.1,
        cost: 3250,
        availability: "4",
      },
    ],
    availability: "3",
    cost: 250,
    name: "Select Sound Filter",
    maxRating: 3,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "AUDIO ENHANCEMENT",
        capacity: 2,
        slot: "AUDIO",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 2,
        slot: "CYBEREAR IMPLANT",
        cost: 3000,
        availability: "2",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essense: 0.1,
        cost: 3000,
        availability: "2",
      },
    ],
    availability: "2",
    cost: 1000,
    name: "Spatial Recognizer",
    subtype: "AUDIO ENHANCEMENT",
    type: "ACCESSORY",
  },
]

export const sensorMods = [
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "atmosphere_sensor",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "OPTICAL",
      },
    },
    _id: "camera_function",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "cyberware_scanner",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "AUDIO",
      },
    },
    _id: "directional_microphone_function",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "geiger_counter",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "AUDIO",
      },
    },
    _id: "laser_microphone_function",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "laser_range_finder",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "mad_scanner",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "motion_sensor",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "olfactory_sensor",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "AUDIO",
      },
    },
    _id: "omnidirectional_microphone_function",
    _cost: "0",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_FUNCTION",
        _cap: "1",
      },
    ],
    _id: "ultrasound_sensor_function",
    _cost: "0",
  },
]
