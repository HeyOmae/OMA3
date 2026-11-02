import { GearCyberware } from "@/types/Resources"

const cyberwareAll: GearCyberware[] = [
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 1,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 750,
    name: "Flare Compensation",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 775,
    name: "Image Link",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 1000,
    name: "Low Light Vision",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 3,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.2",
      },
    ],
    availability: "3L",
    cost: 2000,
    name: "Smartlink",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 1500,
    name: "Thermographic Vision",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "3",
    cost: 3500,
    name: "Vision Enhancement",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 2,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "ATTACK RATING",
          attackRating: [0, 0, 2, 2, 2],
        },
      ],
    },
    availability: "3",
    cost: 1750,
    name: "Vision Magnification",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },

  {
    type: "ACCESSORY",
    subtype: "CYBER EARWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 3500,
    name: "Audio Enhancement",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EARWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    availability: "4",
    cost: 3250,
    name: "Select Sound Filter",
    reference: [{ book: "SR6 Berlin", page: 286 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EARWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 2,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 3000,
    name: "Spatial Recognizer",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "1.0",
      },
    ],
    modifications: {
      edgemod: [
        {
          type: "BONUS",
          skill: "perception",
        },
        {
          type: "BONUS",
          skill: "piloting",
        },
        {
          type: "BONUS",
          skill: "stealth",
        },
        {
          type: "BONUS",
          skill: "cracking",
        },
        {
          type: "BONUS",
          skill: "engineering",
        },
      ],
    },
    availability: "4L",
    cost: 30000,
    name: "Control Rig",
    reference: [{ book: "SR6 Berlin", page: 283 }],
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost",
  },
  // {
  //   useAs: [
  //     {
  //       type: "CYBERWARE",
  //       subtype: "CYBER HEADWARE",
  //       essence: "1.0",
  //     },
  //   ],
  //   modifications: {
  //     edgemod: [
  //       {
  //         type: "BONUS",
  //         skill: "perception",
  //       },
  //       {
  //         type: "BONUS",
  //         skill: "piloting",
  //       },
  //       {
  //         type: "BONUS",
  //         skill: "stealth",
  //       },
  //       {
  //         type: "BONUS",
  //         skill: "cracking",
  //       },
  //       {
  //         type: "BONUS",
  //         skill: "engineering",
  //       },
  //     ],
  //   },
  //   availability: "4L",
  //   cost: 30000,
  //   language: "fr",
  //   name: "Control Rig Squared",
  //   maxRating: 3,
  //   rating: true,
  //   rateMultiplier: "essence cost2",
  //   modOnly: true,
  // },
  {
    type: "ACCESSORY",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER HEADWARE",
        capacity: 1,
        slot: "HEADWARE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0",
      },
    ],
    availability: "6I",
    cost: 10000,
    name: "Cortex Kink Bomb",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER HEADWARE",
        capacity: 2,
        slot: "HEADWARE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0",
      },
    ],
    availability: "6I",
    cost: 25000,
    name: "Cortex Microbomb",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER HEADWARE",
        capacity: 3,
        slot: "HEADWARE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0",
      },
    ],
    availability: "6I",
    cost: 40000,
    name: "Cortex Area Bomb",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "1",
      },
    ],
    cyberdeck: {
      dataProcessing: 4,
      firewall: 3,
      initative: 1,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 1,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 1,
        },
      ],
    },
    availability: "3L",
    cost: 45000,
    name: "Cyberjack 1",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "1.5",
      },
    ],
    cyberdeck: {
      dataProcessing: 5,
      firewall: 4,
      initative: 1,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 1,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 1,
        },
      ],
    },
    availability: "3L",
    cost: 65000,
    name: "Cyberjack 2",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "2",
      },
    ],
    cyberdeck: {
      dataProcessing: 6,
      firewall: 5,
      initative: 1,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 1,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 1,
        },
      ],
    },
    availability: "3L",
    cost: 80000,
    name: "Cyberjack 3",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "2.3",
      },
    ],
    cyberdeck: {
      dataProcessing: 7,
      firewall: 6,
      initative: 2,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 2,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 2,
        },
      ],
    },
    availability: "4L",
    cost: 95000,
    name: "Cyberjack 4",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "2.6",
      },
    ],
    cyberdeck: {
      dataProcessing: 8,
      firewall: 7,
      initative: 2,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 2,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 2,
        },
      ],
    },
    availability: "5L",
    cost: 140000,
    name: "Cyberjack 5",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  // {
  //   useAs: [
  //     {
  //       type: "CYBERWARE",
  //       subtype: "CYBER HEADWARE",
  //       essence: "2.6",
  //     },
  //   ],
  //   cyberdeck: {
  //     dataProcessing: 8,
  //     firewall: 7,
  //     initative: 3,
  //   },
  //   modifications: {
  //     attrmod: [
  //       {
  //         attribute: "INITIATIVE MATRIX VR COLD",
  //         value: 3,
  //       },
  //       {
  //         attribute: "INITIATIVE MATRIX VR HOT",
  //         value: 3,
  //       },
  //     ],
  //   },
  //   availability: "5L",
  //   cost: 140000,
  //   name: "Cyberjack5",
  //   language: "de",
  //   rating: true,
  // },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "3",
      },
    ],
    cyberdeck: {
      dataProcessing: 9,
      firewall: 8,
      initative: 2,
    },
    modifications: {
      attrmod: [
        {
          attribute: "INITIATIVE MATRIX VR COLD",
          value: 2,
        },
        {
          attribute: "INITIATIVE MATRIX VR HOT",
          value: 2,
        },
      ],
    },
    availability: "6L",
    cost: 210000,
    name: "Cyberjack 6",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  // {
  //   useAs: [
  //     {
  //       type: "CYBERWARE",
  //       subtype: "CYBER HEADWARE",
  //       essence: "3",
  //     },
  //   ],
  //   cyberdeck: {
  //     dataProcessing: 9,
  //     firewall: 8,
  //     initative: 3,
  //   },
  //   modifications: {
  //     attrmod: [
  //       {
  //         attribute: "INITIATIVE MATRIX VR COLD",
  //         value: 3,
  //       },
  //       {
  //         attribute: "INITIATIVE MATRIX VR HOT",
  //         value: 3,
  //       },
  //     ],
  //   },
  //   availability: "6L",
  //   cost: 210000,
  //   name: "Cyberjack6",
  //   language: "de",
  // },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 1000,
    name: "Datajack",
    reference: [{ book: "SR6 Berlin", page: 283 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.1",
      },
    ],
    availability: "4",
    cost: 1000,
    name: "Datalock",
    reference: [{ book: "SR6 Berlin", page: 283 }],
    maxRating: 2,
    rating: true,
    rateMultiplier: "cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.2",
      },
    ],
    availability: "3",
    cost: 4000,
    name: "Olfactory Booster",
    reference: [{ book: "SR6 Berlin", page: 283 }],
    rating: true,
    maxRating: 3,
    rateMultiplier: "cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.2",
      },
    ],
    availability: "4L",
    cost: 4000,
    name: "Simrig",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  // {
  //   useAs: [
  //     {
  //       type: "CYBERWARE",
  //       subtype: "CYBER HEADWARE",
  //       essence: "0.1",
  //     },
  //   ],
  //   modifications: {
  //     itemhookmod: [{
  //       hook: "SKILLJACK",
  //       capacity: 4,
  //     }],
  //   },
  //   availability: "4",
  //   cost: 1000,
  //   name: "Skilljack",
  //   maxRating: 6,
  //   rating: true,
  //   rateMultiplier: "capacity cost",
  // },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "SKILLJACK",
          capacity: 4,
        },
      ],
    },
    availability: "4",
    cost: 20000,
    name: "Skilljack",
    reference: [{ book: "SR6 Berlin", page: 284 }],
    language: "en",
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence capacity cost",
  },
  // {
  //   useAs: [
  //     {
  //       type: "CYBERWARE",
  //       subtype: "CYBER HEADWARE",
  //       essence: "0.1",
  //     },
  //   ],
  //   modifications: {
  //     itemhookmod: [{
  //       hook: "SKILLJACK",
  //       capacity: 4,
  //     }],
  //   },
  //   availability: "4",
  //   cost: 20000,
  //   name: "Skilljack US",
  //   maxRating: 6,
  //   rating: true,
  //   rateMultiplier: "essence capacity cost",
  //   modOnly: true,
  // },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.2",
      },
    ],
    modifications: {
      edgemod: [
        {
          type: "BONUS",
          skill: "perception",
        },
      ],
    },
    availability: "3",
    cost: 3000,
    name: "Taste Booster",
    reference: [{ book: "SR6 Berlin", page: 284 }],
    rating: true,
    maxRating: 3,
    rateMultiplier: "cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.0",
      },
    ],
    availability: "4",
    cost: 800,
    name: "Tooth Compartment",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.3",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER HEADWARE",
        slot: "HEADWARE IMPLANT",
        capacity: 2,
      },
    ],
    availability: "4",
    cost: 3600,
    name: "Ultrasound Sensor",
    reference: [{ book: "SR6 Berlin", page: 284 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER HEADWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.2",
      },
    ],
    modifications: {
      edgemod: [
        {
          type: "BONUS",
          skill: "con",
        },
      ],
    },
    availability: "4L",
    cost: 5000,
    name: "Voice Modulator",
    reference: [{ book: "SR6 Berlin", page: 285 }],
    maxRating: 3,
    rating: true,
    rateMultiplier: "cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "2",
    cost: 1000,
    name: "Cybereye 1",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.2",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "2",
    cost: 4000,
    name: "Cybereye 2",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.3",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 8,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "3",
    cost: 6000,
    name: "Cybereye 3",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.4",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 12,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "3",
    cost: 10000,
    name: "Cybereye 4",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 16,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "3",
    cost: 16000,
    name: "Cybereye 5",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.3",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "ocular drone vehicle",
        },
      ],
      itemhookmod: [
        {
          capacity: 6,
          hook: "CYBEREYE IMPLANT",
        },
      ],
      accessorymod: [
        {
          hook: "CYBEREYE IMPLANT",
          item: "image link",
          included: true,
        },
        {
          hook: "CYBEREYE IMPLANT",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "3",
    cost: 6000,
    name: "Ocular Drone",
    reference: [{ book: "SR6 Berlin", page: 285 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EYEWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EYEWARE",
        capacity: 1,
        slot: "CYBEREYE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    availability: "5I",
    cost: 20000,
    name: "Retinal Duplication",
    reference: [{ book: "SR6 Berlin", page: 285 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EARWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 4,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      skillmod: [
        {
          ref: "athletics",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    availability: "3",
    cost: 8000,
    name: "Balance Augmenter",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 2250,
    name: "Damper",
    reference: [{ book: "SR6 Berlin", page: 286 }],
    subtype: "CYBER EARWARE",
    type: "CYBERWARE",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER EARWARE",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER EARWARE",
        capacity: 1,
        slot: "CYBEREAR IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER EARWARE",
        essence: "0.1",
      },
    ],
    availability: "2",
    cost: 1000,
    name: "Soundlink",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.5",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 1,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 1,
        },
        {
          attribute: "ATTACK RATING",
          value: 1,
        },
      ],
      itemmod: [
        {
          item: "bone lacing armor",
          rating: 1,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    availability: "3L",
    cost: 8000,
    name: "Bone Lacing Plastic",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "1.0",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 2,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 2,
        },
        {
          attribute: "ATTACK RATING",
          value: 2,
        },
      ],
      itemmod: [
        {
          item: "bone lacing armor",
          rating: 1,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    availability: "4L",
    cost: 18000,
    name: "Bone Lacing Aluminium",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "1.5",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 2,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 2,
        },
        {
          attribute: "ATTACK RATING",
          value: 3,
        },
      ],
      itemmod: [
        {
          item: "bone lacing armor",
          rating: 2,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    availability: "6L",
    cost: 30000,
    name: "Bone Lacing Titanium",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.3",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "dermal deposits armor",
          remove: true,
        },
        {
          item: "dermal plating armor",
          rating: 1,
        },
      ],
    },
    availability: "4L",
    cost: 4000,
    name: "Dermal Plating",
    reference: [{ book: "SR6 Berlin", page: 286 }],
    rating: true,
    maxRating: 4,
    rateMultiplier: "essence cost modifier",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.1",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER BODYWARE",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "2",
    cost: 3000,
    name: "Fingertip Compartment",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.5",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER BODYWARE",
        capacity: 4,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "grapple gun",
        },
      ],
    },
    availability: "3",
    cost: 3000,
    name: "Grapple Gun Augment",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.25",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER BODYWARE",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "2",
    cost: 4500,
    name: "Internal Air Tank",
    reference: [{ book: "SR6 Berlin", page: 287 }],
    maxRating: 4,
    rating: true,
    rateMultiplier: "cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.7",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "AGILITY",
          type: "AUGMENTED",
          value: 1,
        },
        {
          attribute: "STRENGTH",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "3L",
    cost: 30000,
    name: "Muscle Replacement",
    reference: [{ book: "SR6 Berlin", page: 287 }],
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.3",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          modType: "RELATIVE",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4L",
    cost: 15000,
    name: "Reaction Enhancers",
    reference: [{ book: "SR6 Berlin", page: 287 }],
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.1",
      },
    ],
    modifications: {},
    availability: "4",
    cost: 20000,
    name: "Skillwires",
    reference: [{ book: "SR6 Berlin", page: 287 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence cost",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "0.2",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 2,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "3",
    cost: 7500,
    name: "Smuggling Compartment",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "1.0",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          type: "AUGMENTED",
          value: 1,
        },
        {
          attribute: "INITIATIVE DICE PHYSICAL",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "3L",
    cost: 40000,
    name: "Wired Reflexes 1",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          type: "AUGMENTED",
          value: 2,
        },
        {
          attribute: "INITIATIVE DICE PHYSICAL",
          type: "AUGMENTED",
          value: 2,
        },
      ],
    },
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "2.0",
      },
    ],
    availability: "3L",
    cost: 150000,
    name: "Wired Reflexes 2",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          type: "AUGMENTED",
          value: 3,
        },
        {
          attribute: "INITIATIVE DICE PHYSICAL",
          type: "AUGMENTED",
          value: 3,
        },
      ],
    },
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "3.0",
      },
    ],
    availability: "4I",
    cost: 250000,
    name: "Wired Reflexes 3",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER BODYWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER BODYWARE",
        essence: "4.0",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          type: "AUGMENTED",
          value: 4,
        },
        {
          attribute: "INITIATIVE DICE PHYSICAL",
          type: "AUGMENTED",
          value: 4,
        },
      ],
    },
    availability: "6I",
    cost: 450000,
    name: "Wired Reflexes 4",
    reference: [{ book: "SR6 Berlin", page: 287 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.75",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "HEADWARE IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
      itemmod: [
        {
          item: "cyberjaw",
        },
      ],
    },
    availability: "5",
    cost: 15000,
    name: "Cyberskull Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.75",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "HEADWARE IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
      itemmod: [
        {
          item: "cyberjaw",
        },
      ],
    },
    availability: "5",
    cost: 10000,
    name: "Cyberskull Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 5,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 25000,
    name: "Cybertorso Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 10,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 20000,
    name: "Cybertorso Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.0",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 8,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 20000,
    name: "Cyberarm Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.0",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 15,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 15000,
    name: "Cyberarm Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 5,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 500,
        },
      ],
    },
    availability: "3",
    cost: 12000,
    name: "Cyberforearm Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 10,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 500,
        },
      ],
    },
    availability: "3",
    cost: 10000,
    name: "Cyberforearm Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
    },
    availability: "3",
    cost: 6000,
    name: "Cyberhand Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
    },
    availability: "3",
    cost: 5000,
    name: "Cyberhand Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.0",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 10,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 20000,
    name: "Cyberleg Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
    subtype: "CYBER LIMBS",
    type: "CYBERWARE",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.0",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 20,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 1,
        },
      ],
    },
    availability: "4",
    cost: 15000,
    name: "Cyberleg Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
    subtype: "CYBER LIMBS",
    type: "CYBERWARE",
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 500,
        },
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
      ],
    },
    availability: "4",
    cost: 12000,
    name: "Cyberlowerleg Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 12,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
      attrmod: [
        {
          attribute: "PHYSICAL MONITOR",
          type: "AUGMENTED",
          value: 500,
        },
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 2,
          cyber: true,
          modType: "ABSOLUTE",
        },
      ],
    },
    availability: "4",
    cost: 10000,
    name: "Cyberlowerleg Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
    },
    availability: "5",
    cost: 6000,
    name: "Cyberfoot Synthetic",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER LIMBS",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "CYBERLIMB IMPLANT",
        },
      ],
    },
    availability: "5",
    cost: 5000,
    name: "Cyberfoot Obvious",
    reference: [{ book: "SR6 Berlin", page: 288 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ENHANCEMENT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ENHANCEMENT",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "AGILITY",
          type: "ALTERNATE",
          value: 1,
          cyber: true,
        },
      ],
    },
    availability: "1",
    cost: 5000,
    name: "Attribute Increase Agility",
    reference: [{ book: "SR6 Berlin", page: 288 }],
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ENHANCEMENT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ENHANCEMENT",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "STRENGTH",
          type: "ALTERNATE",
          value: 1,
          cyber: true,
        },
      ],
    },
    availability: "1",
    cost: 5000,
    name: "Attribute Increase Strength",
    reference: [{ book: "SR6 Berlin", page: 288 }],
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ENHANCEMENT",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ENHANCEMENT",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ENHANCEMENT",
        capacity: 1,
        slot: "HEADWARE IMPLANT",
      },
    ],
    modifications: {
      attrmod: [
        {
          attribute: "DEFENSE RATING",
          type: "NATURAL",
          value: 1,
          cyber: true,
        },
      ],
    },
    availability: "1L",
    cost: 5000,
    name: "Attribute Increase Armor",
    reference: [{ book: "SR6 Berlin", page: 288 }],
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 3,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "5L",
    cost: 3000,
    name: "Cyber Slide",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 5,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "4",
    cost: 2000,
    name: "Cyber Holster",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "4",
    cost: 2500,
    name: "Hydraulic Jacks",
    reference: [{ book: "SR6 Berlin", page: 290 }],
    maxRating: 6,
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 5,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "2",
    cost: 6000,
    name: "Cyber Smuggling Compartment",
    reference: [{ book: "SR6 Berlin", page: 290 }],
    subtype: "CYBER LIMB ACCESSORY",
    type: "ACCESSORY",
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 2,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED HOLDOUT",
        },
      ],
    },
    availability: "3L",
    cost: 2000,
    name: "Cyber Holdout",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 4,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED PISTOL LIGHT",
        },
      ],
    },
    availability: "3L",
    cost: 3000,
    name: "Cyber Light Pistol",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 6,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED PISTOL MACHINE",
        },
      ],
    },
    availability: "4L",
    cost: 3500,
    name: "Cyber Machine Pistol",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 6,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED PISTOL HEAVY",
        },
      ],
    },
    availability: "4L",
    cost: 4300,
    name: "Cyber Heavy Pistol",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 8,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "1",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED SMG",
        },
      ],
    },
    availability: "5L",
    cost: 4800,
    name: "Cyber Smg",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 10,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "1.25",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED SHOTGUN",
        },
      ],
    },
    availability: "5L",
    cost: 8500,
    name: "Cyber Shotgun",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 15,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "1.5",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "MOUNTED LAUNCHER",
        },
      ],
    },
    availability: "6I",
    cost: 24000,
    name: "Cyber Launcher",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    availability: "1",
    cost: 1000,
    name: "Cyber Ammo Port",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attribute: "ATTACK RATING",
          attackRating: [1, 1, 1, 1, 1],
        },
      ],
    },
    availability: "1",
    cost: 1000,
    name: "Cyber Laser Sight",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 2,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    availability: "4I",
    cost: 1000,
    name: "Cyber Silencer",
    reference: [{ book: "SR6 Berlin", page: 290 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "HEADWARE IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "cyberjaw",
        },
      ],
    },
    availability: "2",
    cost: 1500,
    name: "Cyberjaw Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.1",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "hardening",
        },
      ],
    },
    availability: "2",
    cost: 2500,
    name: "Hardening Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.25",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "shock limb",
        },
      ],
    },
    availability: "3",
    cost: 5000,
    name: "Shock Limb Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.15",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "handblade",
        },
      ],
    },
    availability: "4I",
    cost: 2000,
    name: "Handblade Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 2,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.25",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "handblade",
        },
      ],
    },
    availability: "4I",
    cost: 2500,
    name: "Handblade Retractable Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.15",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "handrazors",
        },
      ],
    },
    availability: "3I",
    cost: 1000,
    name: "Handrazors Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 2,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.25",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "handrazors",
        },
      ],
    },
    availability: "3I",
    cost: 1250,
    name: "Handrazors Retractable Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 1,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.15",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "spurs",
        },
      ],
    },
    availability: "4I",
    cost: 3000,
    name: "Spurs Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },
  {
    type: "ACCESSORY",
    subtype: "CYBER LIMB ACCESSORY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        capacity: 3,
        slot: "CYBERLIMB IMPLANT",
      },
      {
        type: "CYBERWARE",
        subtype: "CYBER IMPLANT WEAPON",
        essence: "0.25",
      },
    ],
    modifications: {
      itemmod: [
        {
          item: "spurs",
        },
      ],
    },
    availability: "4I",
    cost: 5000,
    name: "Spurs Retractable Augment",
    reference: [{ book: "SR6 Berlin", page: 291 }],
  },

  {
    type: "CYBERWARE",
    subtype: "CYBER_EARWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER_EARWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 1,
          hook: "CYBEREAR_IMPLANT",
        },
      ],
    },
    availability: "2",
    cost: 1000,
    name: "Cyberears 1",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER_EARWARE",
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER_EARWARE",
        essence: "0.2",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "CYBEREAR_IMPLANT",
        },
      ],
    },
    availability: "2",
    cost: 3000,
    name: "Cyberears 2",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER_EARWARE",
    modifications: {
      itemhookmod: [
        {
          capacity: 8,
          hook: "CYBEREAR_IMPLANT",
        },
      ],
    },
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER_EARWARE",
        essence: "0.3",
      },
    ],
    availability: "3",
    cost: 4500,
    name: "Cyberears 3",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER_EARWARE",
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "CYBEREAR_IMPLANT",
        },
      ],
    },
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER_EARWARE",
        essence: "0.4",
      },
    ],
    availability: "3",
    cost: 7500,
    name: "Cyberears 4",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
  {
    type: "CYBERWARE",
    subtype: "CYBER_EARWARE",
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "CYBEREAR_IMPLANT",
        },
      ],
    },
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER_EARWARE",
        essence: "0.5",
      },
    ],
    availability: "3",
    cost: 11000,
    name: "Cyberears 5",
    reference: [{ book: "SR6 Berlin", page: 286 }],
  },
]

export const cyberware = cyberwareAll.filter(({ useAs }) =>
  useAs?.some((useage) => "essence" in useage),
)

export const mods = cyberwareAll.filter(({ useAs }) =>
  useAs?.some((useage) => "capacity" in useage),
)
