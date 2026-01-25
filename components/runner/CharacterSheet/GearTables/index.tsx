import { Runner } from "@/types/runner"
import { Resources } from "@/types/Resources"
import { FC, useMemo } from "react"
import { ArmorTable } from "./ArmorTable"
import { BiowareTable } from "./BiowareTable"
import { CyberwareTable } from "./CyberwareTable"
import { FirearmsTable } from "./FirearmsTable"
import { GeneralGearTable } from "./GeneralGearTable"
import { MatrixDeviceTable } from "./MatrixDeviceTable"
import { ModdableGearTable } from "./ModdableGearTable"
import { VehiclesTable } from "./VehiclesTable"
import { WeaponTable } from "./WeaponTable"

interface Props {
  runner: Runner
}

type ResourceKey = keyof Resources
type ResourceValue = Resources[ResourceKey]

type GearTableComponents = {
  [K in ResourceKey]: FC<{ gearRow: Resources[K] }>
}

const gearTableComponents: Partial<GearTableComponents> = {
  armor: ArmorTable,
  audio: ModdableGearTable,
  bioware: BiowareTable,
  commlink: MatrixDeviceTable,
  cyberdeck: MatrixDeviceTable,
  cyberware: CyberwareTable,
  firearms: FirearmsTable,
  imaging: ModdableGearTable,
  melee: WeaponTable,
  projectile: WeaponTable,
  sensor: ModdableGearTable,
  vehicles: VehiclesTable,
}

interface GearTableSectionProps<K extends ResourceKey> {
  gearKey: K
  gearRow: Resources[K]
}

const GearTableSection = <K extends ResourceKey>({
  gearKey,
  gearRow,
}: GearTableSectionProps<K>) => {
  const label = `${gearKey}-table`
  const TableComponent = gearTableComponents[gearKey] ?? GeneralGearTable

  return (
    <section>
      <h3 id={label}>{gearKey}</h3>
      <table aria-labelledby={label}>
        <TableComponent gearRow={gearRow} />
      </table>
    </section>
  )
}

export const GearTable: FC<Props> = ({ runner }) => {
  const gear = useMemo(
    () =>
      (
        Object.entries(runner.resources ?? {}) as [ResourceKey, ResourceValue][]
      ).sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB)),
    [runner.resources],
  )

  return (
    <section>
      <h2 id="gear-table">Gear</h2>
      {gear.map(([key, gearRow]) => (
        <GearTableSection key={key} gearKey={key} gearRow={gearRow} />
      ))}
    </section>
  )
}
