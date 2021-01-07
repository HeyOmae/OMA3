import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const FirearmsWeapons = dynamic(
  () => import("@/components/runner/resources/FirearmsWeapons"),
  {
    ssr: false,
  },
)

const FirearmsPage = () => (
  <RunnerLayout>
    <h1>Firearms</h1>
    <FirearmsWeapons />
  </RunnerLayout>
)

export default FirearmsPage
