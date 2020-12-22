import { Breadcrumbs, Link, Typography } from "@material-ui/core"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export interface Props {
  activePage: string
}

export const ResourceBreadCrumbs: FC<Props> = ({ activePage }) => {
  const { query } = useRouter()
  return (
    <Breadcrumbs>
      <NextLink href="/[id]/resources" as={`/${query.id}/resources`} passHref>
        <Link>Resources</Link>
      </NextLink>
      <Typography>{activePage}</Typography>
    </Breadcrumbs>
  )
}
