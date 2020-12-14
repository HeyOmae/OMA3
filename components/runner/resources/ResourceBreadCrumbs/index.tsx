import { Breadcrumbs, Link, Typography } from "@material-ui/core"
import NextLink from "next/link"
import { FC } from "react"

export interface Props {
  activePage: string
}

export const ResourceBreadCrumbs: FC<Props> = ({ activePage }) => (
  <Breadcrumbs>
    <NextLink href="../" passHref>
      <Link>Resources</Link>
    </NextLink>
    <Typography>{activePage}</Typography>
  </Breadcrumbs>
)
