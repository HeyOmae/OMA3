import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const LoadDynamicSecurityGear = dynamic(
  () =>
    import("@/components/runner/resources/security/LoadDynamicSecurityGear"),
  {
    ssr: false,
  },
)

const LocksPage = () => (
  <RunnerLayout>
    <LoadDynamicSecurityGear />
  </RunnerLayout>
)

export default LocksPage
