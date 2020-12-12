import { RunnerLayout } from "../../../components/layout"
import dynamic from "next/dynamic"

const MeleeWeapons = dynamic(
  () => import("../../../components/runner/resources/MeleeWeapons"),
  {
    ssr: false,
  },
)

const MeleePage = () => (
  <RunnerLayout>
    <h1>Melee Weapons</h1>
    <MeleeWeapons />
  </RunnerLayout>
)

export default MeleePage
