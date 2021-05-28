import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Locks = dynamic(
  () => import("@/components/runner/resources/security/Locks"),
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
