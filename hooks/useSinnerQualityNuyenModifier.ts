import { Runner } from "@/types/runner"
import { useMemo } from "react"

export const useSinnerQualityNuyenModifier = (runner: Runner) =>
  useMemo(
    () =>
      runner?.qualities?.negative?.some(({ name }) => name === "Sinner")
        ? 1.1
        : 1,
    [runner?.qualities?.negative],
  )
