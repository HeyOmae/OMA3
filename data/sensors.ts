export const sensors = [
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "AUDIO_ENHANCEMENT",
        _cap: "1",
        _slot: "AUDIO",
      },
      {
        _type: "ACCESSORY",
        _subtype: "CYBER_EARWARE",
        _cap: "1",
        _slot: "CYBEREAR_IMPLANT",
        _cost: "3500",
        _avail: "2",
      },
      {
        _type: "CYBERWARE",
        _subtype: "CYBER_EARWARE",
        _ess: "0.1",
        _cost: "3500",
        _avail: "2",
      },
    ],
    _avail: "1",
    _cost: "500",
    _id: "audio_enhancement",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "AUDIO_ENHANCEMENT",
        _cap: "1",
        _slot: "AUDIO",
      },
      {
        _type: "ACCESSORY",
        _subtype: "CYBER_EARWARE",
        _cap: "1",
        _slot: "CYBEREAR_IMPLANT",
        _cost: "3250",
        _avail: "4",
        _maxrat: "6",
      },
      {
        _type: "CYBERWARE",
        _subtype: "CYBER_EARWARE",
        _ess: "0.1",
        _cost: "3250",
        _avail: "4",
      },
    ],
    _avail: "3",
    _cost: "250",
    _id: "select_sound_filter",
    _maxrat: "3",
    _rate: "true",
    _ratemul: "CAPACITY PRICE",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "AUDIO_ENHANCEMENT",
        _cap: "2",
        _slot: "AUDIO",
      },
      {
        _type: "ACCESSORY",
        _subtype: "CYBER_EARWARE",
        _cap: "2",
        _slot: "CYBEREAR_IMPLANT",
        _cost: "3000",
        _avail: "2",
      },
      {
        _type: "CYBERWARE",
        _subtype: "CYBER_EARWARE",
        _ess: "0.1",
        _cost: "3000",
        _avail: "2",
      },
    ],
    _avail: "2",
    _cost: "1000",
    _id: "spatial_recognizer",
    _subtype: "AUDIO_ENHANCEMENT",
    _type: "ACCESSORY",
  },
  {
    useas: [
      {
        _type: "ELECTRONICS",
        _subtype: "SENSOR_HOUSING",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "SENSOR_HOUSING",
      },
    },
    _avail: "1",
    _cost: "100",
    _id: "handheld_housing",
    _maxrat: "3",
    _rate: "true",
    _ratemul: "CAPACITY PRICE",
    _sensrat: "3",
  },
  {
    useas: [
      {
        _type: "ELECTRONICS",
        _subtype: "SENSOR_HOUSING",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "SENSOR_HOUSING",
      },
    },
    _avail: "1",
    _cost: "250",
    _id: "wall-mounted_housing",
    _maxrat: "6",
    _rate: "true",
    _ratemul: "CAPACITY PRICE",
    _sensrat: "4",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_HOUSING",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "SENSOR_FUNCTION",
      },
    },
    _avail: "3",
    _cost: "1000",
    _id: "sensor_array",
    _minrat: "2",
    _maxrat: "8",
    _rate: "true",
    _ratemul: "CAPACITY PRICE",
  },
  {
    useas: [
      {
        _type: "ACCESSORY",
        _subtype: "SENSOR",
        _slot: "SENSOR_HOUSING",
        _cap: "1",
      },
    ],
    modifications: {
      itemhookmod: {
        _capacity: "1",
        _hook: "SENSOR_FUNCTION",
      },
    },
    _avail: "2",
    _cost: "100",
    _id: "single_sensor",
    _maxrat: "8",
    _rate: "true",
    _ratemul: "PRICE",
    _multi: "true",
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
