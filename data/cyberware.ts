import { GearCyberware } from "@/types/Resources"

export const cyberware: GearCyberware[] = [
  {
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
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost",
  },
  {
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
    language: "fr",
    name: "Control Rig Squared",
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost2",
    modOnly: true,
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    name: "Cyberjack1",
    currentRating: 1,
    rating: true,
  },
  {
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
    name: "Cyberjack2",
    currentRating: 2,
    rating: true,
  },
  {
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
    name: "Cyberjack3",
    currentRating: 3,
    rating: true,
  },
  {
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
    name: "Cyberjack4",
    currentRating: 4,
    rating: true,
  },
  {
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
    name: "Cyberjack5",
    currentRating: 5,
    rating: true,
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
  //   currentRating: 6,
  //   rating: true,
  // },
  {
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
    name: "Cyberjack6",
    currentRating: 6,
    rating: true,
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
  },
  {
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
    maxRating: 2,
    rating: true,
    rateMultiplier: "cost",
  },
  {
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
    rating: true,
    maxRating: 3,
    rateMultiplier: "cost",
  },
  {
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
  //     itemhookmod: {
  //       hook: "SKILLJACK",
  //       capacity: 4,
  //     },
  //   },
  //   availability: "4",
  //   cost: 1000,
  //   name: "Skilljack",
  //   maxRating: 6,
  //   rating: true,
  //   rateMultiplier: "capacity cost",
  // },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: {
        hook: "SKILLJACK",
        capacity: 4,
      },
    },
    availability: "4",
    cost: 20000,
    name: "Skilljack",
    language: "en",
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence capacity cost",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER HEADWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: {
        hook: "SKILLJACK",
        capacity: 4,
      },
    },
    availability: "4",
    cost: 20000,
    name: "Skilljack Us",
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence capacity cost",
    modOnly: true,
  },
  {
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
    rating: true,
    maxRating: 3,
    rateMultiplier: "cost",
  },
  {
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
  },
  {
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
  },
  {
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
    maxRating: 3,
    rating: true,
    rateMultiplier: "cost",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.1",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 1,
        hook: "CYBEREYE IMPLANT",
      },
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
    name: "Cybereye1",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.2",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "CYBEREYE IMPLANT",
      },
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
    name: "Cybereye2",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.3",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 8,
        hook: "CYBEREYE IMPLANT",
      },
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
    name: "Cybereye3",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.4",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 12,
        hook: "CYBEREYE IMPLANT",
      },
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
    name: "Cybereye4",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER EYEWARE",
        essence: "0.4",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 16,
        hook: "CYBEREYE IMPLANT",
      },
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
    name: "Cybereye5",
  },
  {
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
      itemhookmod: {
        capacity: 6,
        hook: "CYBEREYE IMPLANT",
      },
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
  },
  {
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
    maxRating: 6,
    rating: true,
    rateMultiplier: "cost",
  },
  {
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
    subtype: "CYBER EARWARE",
    type: "CYBERWARE",
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
    cost: 1000,
    name: "Soundlink",
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    rating: true,
    maxRating: 4,
    rateMultiplier: "essence cost modifier",
  },
  {
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
  },
  {
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
  },
  {
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
    maxRating: 4,
    rating: true,
    rateMultiplier: "cost",
  },
  {
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
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
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
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
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
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence cost",
  },
  {
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
  },
  {
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
    name: "Wiredreflexes1",
  },
  {
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
    name: "Wiredreflexes2",
  },
  {
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
    name: "Wiredreflexes3",
  },
  {
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
    name: "Wiredreflexes4",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.75",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 2,
        hook: "HEADWARE IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.75",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "HEADWARE IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.5",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 5,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "1.5",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 10,
        hook: "CYBERLIMB IMPLANT",
      },
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
      itemhookmod: {
        capacity: 8,
        hook: "CYBERLIMB IMPLANT",
      },
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
      itemhookmod: {
        capacity: 15,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 5,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 10,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 2,
        hook: "CYBERLIMB IMPLANT",
      },
    },
    availability: "3",
    cost: 6000,
    name: "Cyberhand Synthetic",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "CYBERLIMB IMPLANT",
      },
    },
    availability: "3",
    cost: 5000,
    name: "Cyberhand Obvious",
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
      itemhookmod: {
        capacity: 10,
        hook: "CYBERLIMB IMPLANT",
      },
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
      itemhookmod: {
        capacity: 20,
        hook: "CYBERLIMB IMPLANT",
      },
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
    subtype: "CYBER LIMBS",
    type: "CYBERWARE",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.45",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 12,
        hook: "CYBERLIMB IMPLANT",
      },
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
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 2,
        hook: "CYBERLIMB IMPLANT",
      },
    },
    availability: "5",
    cost: 6000,
    name: "Cyberfoot Synthetic",
  },
  {
    useAs: [
      {
        type: "CYBERWARE",
        subtype: "CYBER LIMBS",
        essence: "0.25",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "CYBERLIMB IMPLANT",
      },
    },
    availability: "5",
    cost: 5000,
    name: "Cyberfoot Obvious",
  },
  {
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
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
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
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
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
    maxRating: 8,
    rating: true,
    rateMultiplier: "cost avail capacity modifier",
  },
  {
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
    availability: "4",
    cost: 2000,
    name: "Cyber Holster",
  },
  {
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
    subtype: "CYBER LIMB ACCESSORY",
    type: "ACCESSORY",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED HOLDOUT",
      },
    },
    availability: "3L",
    cost: 2000,
    name: "Cyber Holdout",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED PISTOL LIGHT",
      },
    },
    availability: "3L",
    cost: 3000,
    name: "Cyber Light Pistol",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED PISTOL MACHINE",
      },
    },
    availability: "4L",
    cost: 3500,
    name: "Cyber Machine Pistol",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED PISTOL HEAVY",
      },
    },
    availability: "4L",
    cost: 4300,
    name: "Cyber Heavy Pistol",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED SMG",
      },
    },
    availability: "5L",
    cost: 4800,
    name: "Cyber Smg",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED SHOTGUN",
      },
    },
    availability: "5L",
    cost: 8500,
    name: "Cyber Shotgun",
  },
  {
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
      itemhookmod: {
        hook: "MOUNTED LAUNCHER",
      },
    },
    availability: "6I",
    cost: 24000,
    name: "Cyber Launcher",
  },
  {
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
  },
  {
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
      itemattrmod: {
        attribute: "ATTACK RATING",
        attackRating: [1, 1, 1, 1, 1],
      },
    },
    availability: "1",
    cost: 1000,
    name: "Cyber Laser Sight",
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]
