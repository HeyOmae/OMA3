import { initRunnerAttributes, Runner } from "../types/runner"

export const mockedRunners: Runner[] = [
  {
    id: 1,
    name: "Bull",
    description: "The best ork decker you never met.",
  },
  {
    id: 2,
    name: "Man-of-many-names",
    description: "Not knowns by any other name",
    priority: {
      metatype: "E",
      skills: "C",
      attributes: "B",
      "mag/res": "A",
    },
    metatype: "Human",
    attributes: {
      Body: { adjustment: 0, points: 0 },
      Agility: { adjustment: 0, points: 0 },
      Reaction: { adjustment: 0, points: 0 },
      Strength: { adjustment: 0, points: 0 },
      Willpower: { adjustment: 0, points: 0 },
      Logic: { adjustment: 0, points: 1 },
      Intuition: { adjustment: 0, points: 5 },
      Charisma: { adjustment: 0, points: 0 },
      Edge: { adjustment: 0, points: 0 },
      Magic: { adjustment: 0, points: 0 },
      Resonance: { adjustment: 0, points: 0 },
    },
    skills: {
      Conjuring: {
        rating: 6,
        attribute: {
          primary: "Magic",
        },
        specialization: "Banishing",
      },
      Sorcery: {
        rating: 5,
        attribute: {
          primary: "Magic",
        },
      },
      Perception: {
        rating: 4,
        attribute: {
          primary: "Intuition",
          secondary: "Logic",
        },
      },
    },
  },
  {
    id: 3,
    name: "FastJack",
    description:
      "He was born in the 1990's and now has an AI living in his brain.",
    priority: {
      metatype: "D",
      attributes: "C",
      skills: "B",
      "mag/res": "E",
      resources: "A",
    },
  },
  {
    id: 4,
    name: "/dev/grrl",
    description:
      "Elvin decker from Boston. Hacker her way on to JackPoint at 16 and enter the shadows.",
    priority: {
      metatype: "D",
    },
    metatype: "Elf",
    attributes: initRunnerAttributes,
    qualities: {
      positive: [
        {
          modifications: {
            attrmod: {
              val: 1,
              type: "MAX",
            },
          },
          name: "Exceptional Attribute",
          karma: 12,
          type: "POSITIVE",
          select: "ATTRIBUTE",
          multi: true,
          selected: "Logic",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Winterhawk",
    description:
      "Alexander King, also known as the Shadowrunner Winterhawk is an English human male hermetic mage. He is known for his academic work in thaumaturgy.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Full",
    spells: {
      Combat: [
        {
          name: "Manabolt",
          category: "Combat",
          range: "Line of sight",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Physical",
          spellfeature: [
            {
              ref: "Direct",
            },
          ],
        },
        {
          name: "Fireball",
          category: "Combat",
          range: "Line of sight area",
          type: "Physical",
          duration: "Instantaneous",
          drain: 6,
          damage: "Physical special",
          spellfeature: [
            {
              ref: "Indirect",
            },
            {
              ref: "Area",
            },
          ],
        },
        {
          name: "Stunball",
          category: "Combat",
          range: "Line of sight area",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Stun",
          spellfeature: [
            {
              ref: "Direct",
            },
            {
              ref: "Area",
            },
          ],
        },
      ],
      Health: [
        {
          name: "Heal",
          category: "Health",
          range: "Touch",
          type: "Physical",
          duration: "Permanent",
          drain: 3,
        },
      ],
      Manipulation: [
        {
          name: "Armor",
          category: "Manipulation",
          range: "Touch",
          type: "Physical",
          duration: "Sustained",
          drain: 4,
        },
        {
          name: "Levitate",
          category: "Manipulation",
          range: "Line of sight",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
        {
          name: "Mana barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Mana",
          duration: "Sustained",
          drain: 5,
        },
        {
          name: "Physical barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Elijah",
    description:
      "He studied thaumaturgy and then became a freelance arcano-archaeologist",
    priority: { metatype: "E", "mag/res": "A" },
  },
  {
    id: 7,
    name: "Frosty",
    description: "Immortal elf runner",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: {
      Body: { adjustment: 0, points: 0 },
      Agility: { adjustment: 0, points: 0 },
      Reaction: { adjustment: 0, points: 0 },
      Strength: { adjustment: 0, points: 0 },
      Willpower: { adjustment: 0, points: 0 },
      Logic: { adjustment: 1, points: 2 }, // Breaking the rules to make sure adjustment points are taken into account for calculating knowledge skill points
      Intuition: { adjustment: 0, points: 2 },
      Charisma: { adjustment: 0, points: 0 },
      Edge: { adjustment: 2, points: 0 },
      Magic: { adjustment: 0, points: 0 },
      Resonance: { adjustment: 0, points: 0 },
    },
    magres: "Full",
    rituals: [
      {
        name: "Ward",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Circle of protection",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Curse",
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
    ],
    resources: {
      bne: [
        {
          availability: "4L",
          cost: 500,
          name: "Autopicker",
          subtype: "BREAKING",
          type: "ELECTRONICS",
        },
      ],
      focusFormula: [
        {
          name: "Weapon focus formula",
          availability: "3L",
          cost: 1750,
          type: "formula",
          subtype: "focus formula",
          rating: true,
          rateMultiplier: "cost avail",
          currentRating: 6,
        },
      ],
    },
  },
  {
    id: 8,
    name: "Ma'Fan",
    description:
      "Yuan Lai (aka Ma'Fan) is a Chinese international cat burglar and shadowrunner. She is a member of Jackpoint. She is awakened; being a physical adept. She suffers from gremlins and doesn't often use technology.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: {
      ...initRunnerAttributes,
      Logic: { adjustment: 0, points: 4 },
    },
    magres: "Adept",
    powers: [
      {
        name: "Traceless Walk",
        cost: 0.5,
        activation: "Passive",
      },
      {
        name: "Improved Reflexes",
        cost: 1.0,
        levels: true,
        max: 4,
        activation: "Passive",
        modifications: [
          {
            attr: "REACTION",
            val: 1,
            type: "augmented",
          },
          {
            attr: "INITIATIVE DICE PHYSICAL",
            val: 1,
          },
        ],
      },
      {
        name: "Attribute Boost",
        cost: 0.25,
        levels: true,
        level: 2,
        select: "PHYSICAL ATTRIBUTE",
        activation: "Major action",
      },
    ],
    language: [
      { name: "Mandarin", rating: "Native" },
      { name: "Japanese", rating: 2 },
    ],
    qualities: {
      negative: [
        {
          name: "Gremlins",
          karma: 6,
          type: "NEGATIVE",
        },
      ],
    },
  },
  {
    id: 9,
    name: "Netcat",
    description:
      "Netcat is a female Elven Technomancer and founding member of Jackpoint. After she admitted her powers on the VPN, Clockwork tried to sell her to corporate interests.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    metatype: "Elf",
    attributes: initRunnerAttributes,
    magres: "Technomancer",
    complexForms: [
      {
        name: "Resonance Spike",
        duration: "Immediate",
        fade: 4,
      },
      {
        name: "Editor",
        duration: "Permanent",
        fade: 3,
      },
      {
        name: "Pulse Storm",
        duration: "Immediate",
        fade: 3,
      },
      {
        name: "Puppeteer",
        duration: "Sustained",
        fade: 5,
      },
    ],
    qualities: {
      positive: [
        {
          modifications: {
            edgemod: [
              {
                skill: "biotech",
                type: "BONUS",
              },
              {
                skill: "cracking",
                type: "BONUS",
              },
              {
                skill: "electronics",
                type: "BONUS",
              },
              {
                skill: "engineering",
                type: "BONUS",
              },
            ],
          },
          name: "Analytical Mind",
          karma: 3,
          type: "POSITIVE",
        },
      ],
    },
  },
  {
    id: 10,
    name: "Cayman",
    description: "Human Street Samurai, not to be confused with Canray",
    priority: {
      metatype: "D",
      skills: "C",
      attributes: "A",
      "mag/res": "E",
      resources: "B",
    },
    metatype: "Human",
    attributes: initRunnerAttributes,
    magres: "Mundane",
    resources: {
      melee: [
        {
          name: "Katana",
          availability: "3",
          cost: 350,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
            {
              type: "ACCESSORY",
              subtype: "INSTRUMENT WEAPON",
              slot: "INSTRUMENT WEAPON",
              capacity: 1,
              availability: "5",
              cost: 350,
            },
          ],
          weapon: {
            dv: "4P",
            ar: [10, 0, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
        {
          name: "Combat Knife",
          availability: "2",
          cost: 220,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
          ],
          weapon: {
            dv: "3P",
            ar: [8, 2, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
      ],
      projectile: [
        {
          name: "Bow10",
          availability: "3L",
          cost: 200,
          useAs: [
            {
              type: "WEAPON RANGED",
              subtype: "BOWS",
            },
          ],
          weapon: {
            dv: "5P",
            ar: [5, 10, 3, 0, 0],
            skill: "Athletics",
            specialization: "Archery",
          },
          requires: {
            attrreq: {
              attribute: "STRENGTH",
              value: 10,
            },
          },
          modifications: [
            {
              hook: "TOP",
            },
            {
              hook: "UNDER",
            },
          ],
        },
      ],
      firearms: [
        {
          name: "Yamaha Pulsar 1",
          availability: "1",
          cost: 325,
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "TASERS",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "TOP",
              },
            ],
          },
          weapon: {
            dv: "4S(e)",
            ar: [9, 9, 0, 0, 0],
            mode: "SS",
            ammo: "4(m)",
            skill: "Firearms",
            specialization: "pistols",
          },
        },
        {
          name: "Streetline Special",
          availability: "2",
          cost: 325,
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "HOLDOUTS",
            },
          ],
          weapon: {
            dv: "2P",
            ar: [8, 8, 0, 0, 0],
            mode: "SS",
            ammo: "6(c)",
            skill: "Firearms",
            specialization: "pistols",
          },
        },
        {
          availability: "2L",
          cost: 260,
          name: "Beretta 101T",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "PISTOLS LIGHT",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "TOP",
              },
            ],
          },
          weapon: {
            ammo: "21(c)",
            dv: "2P",
            ar: [9, 8, 6, 0, 0],
            mode: "SA",
            skill: "Firearms",
            specialization: "pistols",
          },
        },
        {
          availability: "2L",
          cost: 640,
          name: "Browning Ultra Power",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "PISTOLS HEAVY",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "TOP",
              },
            ],
            accessorymod: [
              {
                hook: "TOP",
                item: "Laser Sight",
                included: true,
              },
            ],
          },
          weapon: {
            ar: [10, 9, 6, 0, 0],
            ammo: "10(c)",
            dv: "3P",
            mode: "SA",
            skill: "Firearms",
            specialization: "pistols",
          },
        },
        {
          availability: "2L",
          cost: 450,
          name: "Uzi Iv",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "SUBMACHINE GUNS",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "STOCK",
              },
              {
                hook: "TOP",
              },
            ],
            accessorymod: [
              {
                hook: "STOCK",
                item: "Folding Stock",
              },
              {
                hook: "TOP",
                item: "Laser Sight",
                included: true,
              },
            ],
          },
          weapon: {
            ar: [8, 8, 7, 0, 0],
            ammo: "24(c)",
            dv: "3P",
            mode: "SA/BF/FA",
            skill: "Firearms",
            specialization: "automatics",
          },
        },
        {
          availability: "3L",
          cost: 2100,
          name: "FN Har",
          useAs: [
            {
              type: "WEAPON FIREARMS",
              subtype: "RIFLE ASSAULT",
            },
          ],
          modifications: {
            itemhookmod: [
              {
                hook: "BARREL",
              },
              {
                hook: "TOP",
              },
              {
                hook: "UNDER",
              },
              {
                hook: "STOCK",
              },
            ],
            accessorymod: [
              {
                hook: "BARREL",
                item: "Gas-vent System",
                rating: 2,
              },
              {
                hook: "TOP",
                item: "Laser Sight",
                included: true,
              },
            ],
          },
          weapon: {
            ar: [3, 11, 10, 6, 1],
            ammo: "35(c)",
            dv: "5P",
            mode: "SA/BF/FA",
            skill: "Firearms",
            specialization: "rifles",
          },
        },
      ],
      imaging: [
        {
          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "OPTICAL",
            },
          },
          availability: "2",
          cost: 600,
          name: "Contacts",
          maxRating: 3,
          rating: true,
          rateMultiplier: "capacity cost",
          subtype: "IMAGING",
          type: "ELECTRONICS",
          currentRating: 3,
          mods: [
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
                  essence: 0.1,
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
          ],
        },
      ],
      audio: [
        {
          type: "ELECTRONICS",
          subtype: "AUDIO",

          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "AUDIO",
            },
          },
          availability: "1",
          cost: 50,
          name: "Earbuds",
          maxRating: 3,
          currentRating: 3,
          rating: true,
          rateMultiplier: "capacity cost",
        },
      ],
      sensor: [
        {
          type: "ELECTRONICS",
          subtype: "SENSOR HOUSING",
          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "SENSOR HOUSING",
            },
          },
          availability: "1",
          cost: 1500,
          name: "Wall-mounted Housing",
          maxRating: 6,
          currentRating: 6,
          rating: true,
          rateMultiplier: "capacity cost",
          mods: [
            {
              useAs: [
                {
                  type: "ACCESSORY",
                  subtype: "SENSOR",
                  slot: "SENSOR FUNCTION",
                  capacity: 1,
                },
              ],
              name: "Laser Range Finder",
              cost: 0,
              availability: "0",
            },
            {
              useAs: [
                {
                  type: "ACCESSORY",
                  subtype: "SENSOR",
                  slot: "SENSOR FUNCTION",
                  capacity: 1,
                },
              ],
              name: "Camera Function",
              cost: 0,
              availability: "0",
              type: "ACCESSORY",
              subtype: "SENSOR",
              rating: true,
              maxRating: 6,
              rateMultiplier: "capacity cost",
              currentRating: 3,
            },
          ],
        },
      ],
      vehicles: [
        {
          vehicle: {
            handling: "3/5",
            acceleration: 16,
            speedInterval: 30,
            topSpeed: 200,
            body: 7,
            armor: 6,
            pilot: 1,
            sensor: 1,
            seat: 2,
          },
          availability: "2",
          cost: 14000,
          name: "Harley-Davidson Scorpion",
          subtype: "Bikes",
          type: "VEHICLES",
        },
      ],
      armor: [
        {
          name: "Full Body Armor",
          availability: "4L",
          cost: 2000,
          useAs: {
            type: "ARMOR",
            subtype: "ARMOR BODY",
          },
          armor: {
            rating: 5,
            social: -5,
          },
          modifications: {
            itemhookmod: {
              capacity: 10,
              hook: "ARMOR",
            },
          },
        },
        {
          name: "Full Body Armor Helmet",
          availability: "0",
          cost: 500,
          useAs: {
            type: "ARMOR",
            subtype: "ARMOR HELMET",
          },
          armor: {
            rating: 2,
            social: -4,
          },
          modifications: {
            itemhookmod: {
              capacity: 6,
              hook: "HELMET ACCESSORY",
            },
          },
        },
        {
          name: "Lined Coat",
          availability: "4",
          cost: 900,
          useAs: {
            type: "ARMOR",
            subtype: "ARMOR BODY",
          },
          armor: {
            rating: 3,
            social: -2,
          },
          modifications: {
            itemhookmod: {
              capacity: 7,
              hook: "ARMOR",
            },
          },
          mods: [
            {
              useAs: [
                {
                  type: "ACCESSORY",
                  subtype: "ARMOR BODY",
                  slot: "ARMOR",
                  capacity: 1,
                },
              ],
              availability: "3",
              cost: 250,
              name: "Cold Resistance",
              rating: true,
              rateMultiplier: "capacity cost",
              currentRating: 3,
            },
            {
              useAs: [
                {
                  type: "ACCESSORY",
                  subtype: "ARMOR BODY",
                  slot: "ARMOR",
                  capacity: 1,
                },
              ],
              availability: "3",
              cost: 250,
              name: "Fire Resistance",
              rating: true,
              rateMultiplier: "capacity cost",
              currentRating: 2,
            },
          ],
        },
      ],
      cyberware: [
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
          name: "Cybereye 3",
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
          name: "Wired Reflexes 2",
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
          cost: 60000,
          name: "Muscle Replacement",
          maxRating: 4,
          rating: true,
          rateMultiplier: "essence cost modifier",
          currentRating: 2,
        },
      ],
    },
    knowledge: [
      "Craft Beers",
      "Weapons Manufacturers",
      "Law Enforcement Corps",
    ],
    qualities: {
      positive: [
        {
          name: "Guts",
          karma: 12,
          type: "POSITIVE",
        },
        {
          modifications: {
            attrmod: {
              attr: "DAMAGE OVERFLOW",
              val: 1,
            },
          },
          name: "Will To Live",
          karma: 8,
          type: "POSITIVE",
          max: 3,
          currentLevel: 2,
        },
      ],
      negative: [
        {
          name: "Addiction",
          karma: 2,
          type: "NEGATIVE",
          max: 6,
          multi: true,
          select: "NAME",
          selected: "Kamikaze",
          currentLevel: 3,
        },
        {
          name: "AR Vertigo",
          karma: 10,
          type: "NEGATIVE",
        },
      ],
    },
  },
  {
    id: 11,
    name: "Street Rage",
    description: "Troll Street Samurai",
    priority: {
      metatype: "A",
      skills: "C",
      attributes: "B",
      "mag/res": "E",
      resources: "D",
    },
    resources: {
      imaging: [
        {
          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "OPTICAL",
            },
          },
          availability: "1",
          cost: 120,
          name: "Monocle",
          maxRating: 4,
          rating: true,
          rateMultiplier: "capacity cost",
          subtype: "IMAGING",
          type: "ELECTRONICS",
          currentRating: 4,
        },
      ],
      audio: [
        {
          type: "ELECTRONICS",
          subtype: "AUDIO",

          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "AUDIO",
            },
          },
          availability: "1",
          cost: 150,
          name: "Headphones",
          maxRating: 6,
          currentRating: 3,
          rating: true,
          rateMultiplier: "capacity cost",
          mods: [
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
                  essence: 0.1,
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
          ],
        },
      ],
      sensor: [
        {
          useAs: [
            {
              type: "ACCESSORY",
              subtype: "SENSOR",
              slot: "SENSOR HOUSING",
              capacity: 1,
            },
          ],
          modifications: {
            itemhookmod: {
              capacity: 1,
              hook: "SENSOR FUNCTION",
            },
          },
          availability: "2",
          cost: 100,
          name: "Single Sensor",
          maxRating: 8,
          rating: true,
          rateMultiplier: "cost",
          type: "ELECTRONICS",
          subtype: "SENSOR HOUSING",
          currentRating: 6,
        },
      ],
      drones: [
        {
          vehicle: {
            handling: "3",
            acceleration: 20,
            speedInterval: 30,
            topSpeed: 160,
            body: 5,
            armor: 6,
            pilot: 3,
            sensor: 2,
          },
          modifications: {
            itemattrmod: {
              Attr: "CAPACITY",
              Val: 1,
              Slot: "VEHICLEBODY",
            },
          },
          availability: "2",
          cost: 5000,
          name: "MCT-Nissan Roto Drone",
          type: "Drone Medium",
          subtype: "Air",
        },
      ],
      bioware: [
        {
          useAs: {
            type: "BIOWARE",
            subtype: "BIOWARE STANDARD",
            essence: "0.2",
          },
          modifications: {
            attrmod: [
              {
                attribute: "STRENGTH",
                value: 1,
              },
            ],
          },
          name: "Muscle Augmentation",
          availability: "4L",
          cost: 31000,
          maxRating: 4,
          rating: true,
          rateMultiplier: "essence cost modifier",
          currentRating: 3,
        },
        {
          useAs: {
            type: "BIOWARE",
            subtype: "BIOWARE STANDARD",
            essence: "0.1",
          },
          modifications: {
            qualitymod: {
              ref: "low-light vision",
            },
          },
          name: "Cats Eyes",
          availability: "3",
          cost: 4000,
        },
        {
          useAs: {
            type: "BIOWARE",
            subtype: "BIOWARE STANDARD",
            essence: "0.9",
          },
          modifications: {
            attrmod: [
              {
                attribute: "DAMAGE RESISTANCE",
                value: 3,
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
            dmgtypemod: {
              type: "PHYSICAL",
            },
          },
          name: "Bone Density Augmentation 3",
          availability: "4L",
          cost: 15000,
        },
      ],
      cyberware: [
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
          currentRating: 2,
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
          mods: [
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
              currentRating: 4,
            },
          ],
        },
      ],
    },
  },
]

export const orkRunner: Runner = {
  ...mockedRunners[0],
  metatype: "Ork",
  attributes: initRunnerAttributes,
}
