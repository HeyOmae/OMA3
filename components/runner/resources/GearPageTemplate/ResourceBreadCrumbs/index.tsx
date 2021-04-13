import { Breadcrumbs, Link, Typography } from "@material-ui/core"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export type BreadCrumpOption = { label: string; categoryPath: string }

export interface Props {
  activePage: string
  previousPage?: BreadCrumpOption
}

export const ResourceBreadCrumbs: FC<Props> = ({
  activePage,
  previousPage,
}) => {
  const { query } = useRouter()
  return (
    <Breadcrumbs>
      <NextLink href={`/${query.id}/resources`} passHref>
        <Link>Resources</Link>
      </NextLink>
      {previousPage && (
        <NextLink
          href={`/${query.id}/resources/${previousPage.categoryPath}`}
          passHref
        >
          <Link>{previousPage.label}</Link>
        </NextLink>
      )}
      <Typography>{activePage}</Typography>
    </Breadcrumbs>
  )
}
