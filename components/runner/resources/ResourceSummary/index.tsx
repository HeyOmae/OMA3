import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Gear } from "@/types/Resources"
import { CircularProgress } from "@mui/material"
import { FC, Fragment } from "react"
import { GearTable } from "../GearPageTemplate/GearTable"
import { gearSummaryCols } from "../util"
import NextLink from "next/link"
import { useRouter } from "next/router"

const ResourceSummary: FC = () => {
  const [runner] = useRunnerAccess((state) => state)
  const { asPath } = useRouter()

  return runner ? (
    <>
      <h1>Gear Summary</h1>
      {Object.entries(runner?.resources ?? {}).map(
        ([resourceKey, gearArray]) => (
          <Fragment key={resourceKey}>
            <h2>
              <NextLink href={`${asPath}/${resourceKey}`}>
                {resourceKey}
              </NextLink>
            </h2>
            <GearTable<Gear> cols={gearSummaryCols} listOfGear={gearArray} />
          </Fragment>
        ),
      )}
    </>
  ) : (
    <CircularProgress />
  )
}

export default ResourceSummary
