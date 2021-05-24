import { RunnerLayout } from "@/components/layout"
// import Locks from "@/components/runner/resources/electronics/Locks"
import dynamic from "next/dynamic"

const Locks = dynamic(
  () => import("@/components/runner/resources/electronics/Locks"),
  {
    ssr: false,
  },
)

const LocksPage = () => (
  <RunnerLayout>
    <h1>Locks</h1>
    <Locks />
  </RunnerLayout>
)

export default LocksPage
