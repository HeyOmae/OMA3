import { useRequiredContext } from "@/components/useRequiredContext"

import { Checkbox, MenuItem, Select } from "@mui/material"
import { ammoTypes, roundsPerBundle } from "@/data/ammo"
import { Gear } from "@/types/Resources"
import { AmmoContext } from "../GearPageTemplate/GearTable/Row/AmmoRow"
import { SettingRating } from "../GearPageTemplate/GearTable/ResourceButtons"
import { Columns, gearTableConfigOptions } from "../util"

const AmmoTypeSelect = () => {
  const { regularOnly, type, setType } = useRequiredContext(
    AmmoContext,
    "AmmoContext",
  )

  return regularOnly ? "Regular" : (
      <Select
        aria-label="Ammo type"
        value={type}
        onChange={({ target: { value } }) => setType(value)}
      >
        {Object.keys(ammoTypes).map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    )
}

const CaselessCheckbox = () => {
  const { regularOnly, caseless, setCaseless } = useRequiredContext(
    AmmoContext,
    "AmmoContext",
  )

  return regularOnly ? "N/A" : (
      <Checkbox
        slotProps={{ input: { "aria-label": "Caseless" } }}
        checked={caseless}
        onChange={({ target: { checked } }) => setCaseless(checked)}
      />
    )
}

const roundsCol: Columns<Gear> = {
  display: ({ currentRating }) => currentRating * roundsPerBundle,
  label: "Rounds",
}

const bundlesCol: Columns<Gear> = {
  display: (gear, index, setRating) => (
    <SettingRating gear={gear} setRating={setRating} />
  ),
  label: "Bundles",
}

const typeSelectCol: Columns<Gear> = {
  display: () => <AmmoTypeSelect />,
  label: "Type",
}

const casingCol: Columns<Gear> = {
  display: () => <CaselessCheckbox />,
  label: "Caseless",
}

export const buyAmmoCols: Columns<Gear>[] = [
  gearTableConfigOptions.buy,
  gearTableConfigOptions.name,
  typeSelectCol,
  casingCol,
  bundlesCol,
  roundsCol,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]

export const sellAmmoCols: Columns<Gear>[] = [
  gearTableConfigOptions.sell,
  gearTableConfigOptions.name,
  roundsCol,
  gearTableConfigOptions.avail,
  gearTableConfigOptions.cost,
]
