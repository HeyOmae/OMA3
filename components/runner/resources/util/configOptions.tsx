import {
  Columns,
  getCapacity,
  getEssenceFromGear,
  getModCapacity,
} from "../util"
import { defined } from "@/components/util"
import { BookReference } from "@/components/common/BookReference"
import {
  Gear,
  GearCyberware,
  GearVehicle,
  GearFocus,
  GearWeapon,
} from "@/types/Resources"
import {
  AddResourceButton,
  ModLinkButton,
  RemoveResourceButton,
  SettingRating,
  RowSkillSelect,
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
  reference: {
    display: (gear) => <BookReference reference={gear.reference} />,
    label: "Reference",
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
}

export const gearModableTableConfigOptions = {
  mod: {
    display: (gear: Gear, index: number) =>
      (getModCapacity(gear) ?? 0) > 0 ?
        <ModLinkButton gear={gear} index={index} />
      : "N/A",
    label: "Mod",
  },
  alwaysMod: {
    display: (gear: Gear, index: number) => (
      <ModLinkButton gear={gear} index={index} />
    ),
    label: "Mod",
  },
}

export const gearDroneTableConfigOptions = {
  type: {
    display: (gear: GearVehicle) => gear.type,
    label: "Type",
  },
  subtype: {
    display: (gear: GearVehicle) => gear.subtype,
    label: "Type",
  },
  handling: {
    display: (gear: GearVehicle) => gear.vehicle.handling,
    label: "Hand",
  },
  accel: {
    display: (gear: GearVehicle) => gear.vehicle.acceleration,
    label: "Accel",
  },
  speedInt: {
    display: (gear: GearVehicle) => gear.vehicle.speedInterval,
    label: "Speed Int",
  },
  topSpeed: {
    display: (gear: GearVehicle) => gear.vehicle.topSpeed,
    label: "Top Speed",
  },
  body: {
    display: (gear: GearVehicle) => gear.vehicle.body,
    label: "Body",
  },
  armor: {
    display: (gear: GearVehicle) => gear.vehicle.armor,
    label: "Armor",
  },
  pilot: {
    display: (gear: GearVehicle) => gear.vehicle.pilot,
    label: "Pilot",
  },
  sensor: {
    display: (gear: GearVehicle) => gear.vehicle.sensor,
    label: "Sensor",
  },
  seat: {
    display: (gear: GearVehicle) => gear.vehicle.seat,
    label: "Seat",
  },
}

export const gearRatingTableConfigOption: Record<string, Columns<Gear>> = {
  category: {
    display: (gear) => gear.subtype,
    label: "Category",
  },
  setRating: {
    display: (gear, index, setRating) =>
      gear.rating ?
        <SettingRating
          gear={gear}
          setRating={defined(setRating, "setRating")}
        />
      : "N/A",
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
      <SettingRating gear={gear} setRating={defined(setRating, "setRating")} />
    ),
    label: "Rating",
  },
  karmaCost: {
    display: ({ currentRating, karma }) =>
      defined(currentRating, "rating") * karma,
    label: "Karma Cost",
  },
  choice: {
    display: ({ choice }) => (choice ? <ChoiceSelect /> : "N/A"),
    label: "Choice",
  },
  avail: {
    display: ({ availability, currentRating }) => {
      const [availRating, availRestriction] = defined(
        availability.match(/[\d]+|\D+/g),
        "availability",
      )

      return `${+availRating * defined(currentRating, "rating")}${availRestriction}`
    },
    label: "Avail",
  },
}

export const gearToolsConfigOptionSetSkill: Columns<Gear> = {
  display: () => <RowSkillSelect />,
  label: "Select Skill",
}

export const gearCapacityConfigOption: Columns<Gear & Gear> = {
  display: (gear) => `[${gear.currentRating ?? getCapacity(gear)}]`,
  label: "Capacity",
}

export const gearMeleeTableConfigOption: Record<string, Columns<GearWeapon>> = {
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
type gearWithRatingCols = Columns<Gear>[]

export const buyGearWithRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const sellGearWithRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const buyGearWithoutRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const sellGearWithoutRatingCol: gearWithRatingCols = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

const baseDroneStatsConfigOptions: Columns<GearVehicle>[] = [
  gearDroneTableConfigOptions.handling,
  gearDroneTableConfigOptions.accel,
  gearDroneTableConfigOptions.speedInt,
  gearDroneTableConfigOptions.topSpeed,
  gearDroneTableConfigOptions.body,
  gearDroneTableConfigOptions.armor,
  gearDroneTableConfigOptions.pilot,
  gearDroneTableConfigOptions.sensor,
]

export const buyGearDronesCols: Columns<GearVehicle>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.type,
  ...baseDroneStatsConfigOptions,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const sellGearDronesCols: Columns<GearVehicle>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.type,
  ...baseDroneStatsConfigOptions,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
  gearModableTableConfigOptions.alwaysMod,
]

export const buyGearVehiclesCols: Columns<GearVehicle>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.subtype,
  ...baseDroneStatsConfigOptions,
  gearDroneTableConfigOptions.seat,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const sellGearVehiclesCols: Columns<GearVehicle>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearDroneTableConfigOptions.subtype,
  ...baseDroneStatsConfigOptions,
  gearDroneTableConfigOptions.seat,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
  gearModableTableConfigOptions.alwaysMod,
]

type VehicleModCols = Columns<Gear>
const baseCols: VehicleModCols[] = [
  gearTableConfigOptions.name,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]
export const buyDroneModCols: VehicleModCols[] = [
  gearTableConfigOptions.buy,
  ...baseCols,
]
export const sellDroneModCols: VehicleModCols[] = [
  gearTableConfigOptions.sell,
  ...baseCols,
]

const essenceConfigOption: Columns<GearCyberware | Gear> = {
  display: (gear) => {
    const essence = Number(gear.essence || getEssenceFromGear(gear))

    return parseFloat(essence.toFixed(12))
  },
  label: "Ess",
}

export const buyAugmentationCols: Columns<GearCyberware | Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.setRating,
  essenceConfigOption,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
]

export const sellAugmentationCols: Columns<GearCyberware | Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  essenceConfigOption,
  gearTableConfigOptions.cost,
  gearTableConfigOptions.reference,
  gearModableTableConfigOptions.mod,
]

export const gearSummaryCols: Columns<Gear>[] = [
  gearTableConfigOptions.name,
  gearRatingTableConfigOption.displayRating,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
