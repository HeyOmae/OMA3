import { Columns } from "."
import { Gear, GearWeaponMelee } from "@/types/Resources"
import { AddResourceButton, RemoveResourceButton } from "./ResourceButtons"

export const gearTableConfigOptions: Record<string, Columns<Gear>> = {
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
