import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const ArmorMod = dynamic(
  () => import("@/components/runner/resources/Armor/ArmorMod"),
  {
    ssr: false,
  },
)

const ArmorModPage = () => (
  <RunnerLayout>
    <h1>Armor Mods</h1>
    <ArmorMod />
  </RunnerLayout>
)

export default ArmorModPage
