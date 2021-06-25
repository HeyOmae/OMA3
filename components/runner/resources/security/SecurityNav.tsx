import { Button } from "@material-ui/core"
import React, { FC } from "react"
import NextLink from "next/link"
import * as securityData from "@/data/security"

interface Props {
  asPath: string
}

// This is tests at test/[id]/resources/resources.test.tsx
export const SecurityNav: FC<Props> = ({ asPath }) => (
  <>
    {Object.keys(securityData).map((securityGearName) => (
      <NextLink
        key={securityGearName}
        href={`${asPath}security/${securityGearName}`}
        passHref
      >
        <Button variant="contained">{securityGearName}</Button>
      </NextLink>
    ))}
  </>
)
