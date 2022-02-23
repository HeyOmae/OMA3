import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const FirearmMod = dynamic(
  () => import("@/components/runner/resources/FirearmsWeapons/FirearmMods"),
  {
    ssr: false,
  },
)

const FirearmModPage = () => (
  <RunnerLayout>
    <h1>Firearm Mods</h1>
    <FirearmMod />
  </RunnerLayout>
)

export default FirearmModPage
