import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const LoadDynamicSecurityGear = dynamic(
  () => import("@/components/runner/resources/LoadDynamicGear"),
  {
    ssr: false,
  },
)

const MagicPages = () => (
  <RunnerLayout>
    <LoadDynamicSecurityGear importedGear={import(`@/data/magicGear`)} />
  </RunnerLayout>
)

export default MagicPages
