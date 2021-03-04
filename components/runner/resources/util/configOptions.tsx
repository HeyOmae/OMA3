import { Columns } from "../util"
import { Gear, GearTools, GearTyped, GearWeaponMelee } from "@/types/Resources"
import {
  AddResourceButton,
  RemoveResourceButton,
  SettingRating,
  SkillSelect,
} from "../GearPageTemplate/GearTable/ResourceButtons"

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

export const gearToolsConfigOptionSetSkill: Columns<GearTools, string> = {
  display: (gear, index, setSkill, selectedSkill) => (
    <SkillSelect selectedSkill={selectedSkill} setSkill={setSkill} />
  ),
  label: "Select Skill",
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
