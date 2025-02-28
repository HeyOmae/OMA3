import { Button } from "@mui/material"
import { FC } from "react"
import NextLink from "next/link"
import { Gear } from "@/types/Resources"

interface Props {
  pathTo: string
  gearData: { [key: string]: Gear[] }
}

export const GearNav: FC<Props> = ({ pathTo, gearData }) => (
  <>
    {Object.keys(gearData).map((gearName) => (
      <Button
        key={gearName}
        href={`${pathTo}${gearName}`}
        component={NextLink}
        variant="contained"
      >
        {gearName}
      </Button>
    ))}
  </>
)
