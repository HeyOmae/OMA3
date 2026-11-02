import { FC } from "react"
import { PriorityTypes } from "@/types/PriorityRating"
import { Alert, AlertTitle, Button } from "@mui/material"
import { TableChart } from "@mui/icons-material"
import NextLink from "next/link"
import { useRouter } from "next/router"

export interface Props {
  requirement: PriorityTypes
}

export const PriorityWarning: FC<Props> = ({ requirement }) => {
  const { query } = useRouter()
  return (
    <Alert
      severity="error"
      action={
        <NextLink passHref href={"/[id]/priority"} as={`/${query.id}/priority`}>
          <Button color="inherit" size="small" endIcon={<TableChart />}>
            Go to Priority Table
          </Button>
        </NextLink>
      }
    >
      <AlertTitle>Missing Priority</AlertTitle>
      You need to set the {requirement} priority
    </Alert>
  )
}
