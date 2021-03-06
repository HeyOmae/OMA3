import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const LoadDynamicSecurityGear = dynamic(
  () => import("@/components/runner/resources/LoadDynamicGear"),
  {
    ssr: false,
  },
)

const SecurityPages = () => (
  <RunnerLayout>
    <LoadDynamicSecurityGear importedGear={import(`@/data/security`)} />
  </RunnerLayout>
)

export default SecurityPages
