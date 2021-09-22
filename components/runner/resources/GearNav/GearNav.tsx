import { Button } from "@mui/material"
import React, { FC } from "react"
import NextLink from "next/link"
import { Gear } from "@/types/Resources"

interface Props {
  pathTo: string
  gearData: { [key: string]: Gear[] }
}

export const GearNav: FC<Props> = ({ pathTo, gearData }) => (
  <>
    {Object.keys(gearData).map((gearName) => (
      <NextLink key={gearName} href={`${pathTo}${gearName}`} passHref>
        <Button variant="contained">{gearName}</Button>
      </NextLink>
    ))}
  </>
)
