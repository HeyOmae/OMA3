import { Runner } from "@/types/runner"
import {
  GearArmor,
  GearWeaponFireArms,
  GearWeaponMelee,
  GearWeaponsProjectile,
  Resources,
} from "@/types/Resources"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
}

interface ArmorTableProps {
  gearRow: GearArmor[]
}

interface WeaponTableProps {
  gearRow: (GearWeaponMelee | GearWeaponsProjectile | GearWeaponFireArms)[]
}

interface GeneralGearTableProps {
  gearRow: ResourceValue
}

type ResourceKey = keyof Resources
type ResourceValue = Resources[ResourceKey]
type GearItem = ResourceValue extends (infer T)[] ? T : never

function isArmorGear(
  key: ResourceKey,
  gearRow: ResourceValue,
): gearRow is GearArmor[] {
  return key === "armor"
}

function isWeaponGear(
  key: ResourceKey,
  gearRow: ResourceValue,
): gearRow is (GearWeaponMelee | GearWeaponsProjectile | GearWeaponFireArms)[] {
  return key === "melee" || key === "firearms" || key === "projectile"
}

const ArmorTable: FC<ArmorTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Capacity</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem?.armor?.rating}</td>
          <td>{gearItem?.modifications?.itemhookmod?.capacity}</td>
        </tr>
      ))}
    </tbody>
  </>
)

const WeaponTable: FC<WeaponTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>DV</th>
        <th>AR</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
          <td>{gearItem?.weapon?.dv}</td>
          <td>
            {gearItem?.weapon?.ar.map((n) => (n === 0 ? "-" : n)).join("/")}
          </td>
        </tr>
      ))}
    </tbody>
  </>
)

const GeneralGearTable: FC<GeneralGearTableProps> = ({ gearRow }) => (
  <>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {gearRow.map((gearItem: GearItem, index: number) => (
        <tr key={index}>
          <td>{gearItem.name}</td>
        </tr>
      ))}
    </tbody>
  </>
)

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
      {gear.map(([key, gearRow]) => {
        const label = `${key}-table`

        return (
          <section key={key}>
            <h3 id={label}>{key}</h3>
            <table aria-labelledby={label}>
              {isArmorGear(key, gearRow) ?
                <ArmorTable gearRow={gearRow} />
              : isWeaponGear(key, gearRow) ?
                <WeaponTable gearRow={gearRow} />
              : <GeneralGearTable gearRow={gearRow} />}
            </table>
          </section>
        )
      })}
    </section>
  )
}
