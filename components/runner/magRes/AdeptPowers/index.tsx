import { PowerTable } from "./PowerTable"
import powerData from "../../../../data/adeptPowers.json"
import { AdeptPower } from "../../../../types/MagRes"

export const AdeptPowers = () => {
  return <PowerTable powers={powerData as AdeptPower[]} />
}
