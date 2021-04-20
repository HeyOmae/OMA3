import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"
import React from "react"

const SensorMod = dynamic(
  () => import("@/components/runner/resources/electronics/Sensors/SensorMods"),
  {
    ssr: false,
  },
)

const SensorModPage = () => (
  <RunnerLayout>
    <h1>Sensor Mods</h1>
    <SensorMod />
  </RunnerLayout>
)

export default SensorModPage
