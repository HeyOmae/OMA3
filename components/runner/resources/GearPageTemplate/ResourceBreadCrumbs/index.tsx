import { Breadcrumbs, Typography } from "@mui/material"
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
        Resources
      </NextLink>
      {previousPage && (
        <NextLink
          href={`/${query.id}/resources/${previousPage.categoryPath}`}
          passHref
        >
          {previousPage.label}
        </NextLink>
      )}
      <Typography>{activePage}</Typography>
    </Breadcrumbs>
  )
}
