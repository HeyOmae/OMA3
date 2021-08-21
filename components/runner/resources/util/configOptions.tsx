import { Columns } from "../util"
import {
  Gear,
  GearDrones,
  GearFocus,
  GearMod,
  GearModRated,
  GearTools,
  GearTyped,
  GearWeaponMelee,
} from "@/types/Resources"
import {
  AddResourceButton,
  ModLinkButton,
  RemoveResourceButton,
  SettingRating,
  SkillSelect,
} from "../GearPageTemplate/GearTable/ResourceButtons"
import { ChoiceSelect } from "../GearPageTemplate/GearTable/ResourceButtons/ChoiceSelect"

export const gearTableConfigOptions: Record<string, Columns<Gear, any>> = {
  name: {
    display: (gear) => gear.name,
    label: "Name",
  },
  avail: {
    display: (gear) => gear.availability,
    label: "Avail",
  },
  cost: {
    display: (gear) => `${gear.cost}¥`,
    label: "Cost",
  },
  buy: {
    display: (gear) => <AddResourceButton gear={gear} />,
    label: "Buy",
  },
  sell: {
    display: (gear, index) => (
      <RemoveResourceButton gear={gear} index={index} />
    ),
    label: "Sell",
  },
  mod: {
    display: (gear, index) =>
      "modifications" in gear ? (
        <ModLinkButton gear={gear} index={index} />
      ) : (
        "N/A"
      ),
    label: "Mod",
  },
}

export const gearDroneTableConfigOptions = {
  type: {
    display: (gear: GearDrones) => gear.type,
    label: "Type",
  },
  handling: {
    display: (gear: GearDrones) => gear.vehicle.handling,
    label: "Hand",
  },
  accel: {
    display: (gear: GearDrones) => gear.vehicle.acceleration,
    label: "Accel",
  },
  speedInt: {
    display: (gear: GearDrones) => gear.vehicle.speedInterval,
    label: "Speed Int",
  },
  topSpeed: {
    display: (gear: GearDrones) => gear.vehicle.topSpeed,
    label: "Top Speed",
  },
  body: {
    display: (gear: GearDrones) => gear.vehicle.body,
    label: "Body",
  },
  armor: {
    display: (gear: GearDrones) => gear.vehicle.armor,
    label: "Armor",
  },
  pilot: {
    display: (gear: GearDrones) => gear.vehicle.pilot,
    label: "Pilot",
  },
  sensor: {
    display: (gear: GearDrones) => gear.vehicle.sensor,
    label: "Sensor",
  },
  // seat: {
  //   display: (gear: GearDrones) => gear.vehicle.seat ?? 0,
  //   label: 'Seat',
  // },
}

export const gearRatingTableConfigOption: Record<string, Columns<GearTyped>> = {
  category: {
    display: (gear) => gear.subtype,
    label: "Category",
  },
  setRating: {
    display: (gear, index, setRating) =>
      gear.rating ? <SettingRating gear={gear} setRating={setRating} /> : "N/A",
    label: "Rating",
  },
  displayRating: {
    display: (gear) => (gear.rating ? gear.currentRating : "N/A"),
    label: "Rating",
  },
}

export const gearMagicConfigOptions: Record<string, Columns<GearFocus>> = {
  setRating: {
    display: (gear, index, setRating) => (
      <SettingRating gear={gear} setRating={setRating} />
    ),
    label: "Rating",
  },
  karmaCost: {
    display: ({ currentRating, karma }) => currentRating * karma,
    label: "Karma Cost",
  },
  choice: {
    display: ({ choice }) => (choice ? <ChoiceSelect /> : "N/A"),
    label: "Choice",
  },
  avail: {
    display: ({ availability, currentRating }) => {
      const [availRating, availRestriction] = availability.match(/[\d]+|\D+/g)

      return `${+availRating * currentRating}${availRestriction}`
    },
    label: "Avail",
  },
}

export const gearToolsConfigOptionSetSkill: Columns<GearTools, string> = {
  display: (gear, index, setSkill, selectedSkill) => (
    <SkillSelect selectedSkill={selectedSkill} setSkill={setSkill} />
  ),
  label: "Select Skill",
}

export const gearCapacityConfigOption: Columns<GearMod & GearModRated> = {
  display: (gear) => `[${gear.currentRating ?? gear.useAs[0].capacity}]`,
  label: "Capacity",
}

export const gearMeleeTableConfigOption: Record<
  string,
  Columns<GearWeaponMelee>
> = {
  dv: {
    display: (gear) => gear.weapon.dv,
    label: "DV",
  },
  ar: {
    display: (gear) => gear.weapon.ar.join("/"),
    label: "AR",
  },
}

// extremely specific configs
type gearWithRatingCols = Columns<GearTyped>[]

export const buyGearWithRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const sellGearWithRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const buyGearWithoutRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const sellGearWithoutRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
