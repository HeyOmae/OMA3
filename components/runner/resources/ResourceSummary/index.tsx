import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Gear } from "@/types/Resources"
import { CircularProgress } from "@mui/material"
import { FC, Fragment } from "react"
import { GearTable } from "../GearPageTemplate/GearTable"
import { gearSummaryCols } from "../util"
import NextLink from "next/link"
import { useRouter } from "next/router"
import styles from "./ResourceSummary.module.css"
import * as securityDevices from "@/data/security"
import * as magicGear from "@/data/magicGear"

function getResourceSubpath(resourceKey: string): string {
  if (resourceKey in securityDevices) {
    return "security/"
  } else if (resourceKey in magicGear) {
    return "magic/"
  }
  return ""
}

const ResourceSummary: FC = () => {
  const [runner] = useRunnerAccess()
  const { asPath } = useRouter()

  return runner ? (
    <>
      <h1>Gear Summary</h1>
      <div className={styles.gearSummary}>
        {Object.entries(runner?.resources ?? {}).map(
          ([resourceKey, gearArray]) => (
            <Fragment key={resourceKey}>
              <h2>
                <NextLink
                  href={`${asPath}/${getResourceSubpath(
                    resourceKey,
                  )}${resourceKey}`}
                >
                  {resourceKey}
                </NextLink>
              </h2>
              <GearTable<Gear> cols={gearSummaryCols} listOfGear={gearArray} />
            </Fragment>
          ),
        )}
      </div>
    </>
  ) : (
    <CircularProgress />
  )
}

export default ResourceSummary
