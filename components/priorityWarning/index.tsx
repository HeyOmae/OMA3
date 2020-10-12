import { FC } from "react"
import { PriorityTypes } from "../../types/runner"
import { Alert, AlertTitle } from "@material-ui/lab"
import { Button } from "@material-ui/core"
import { TableChart } from "@material-ui/icons"
import NextLink from "next/link"
import { useRouter } from "next/router"

export interface Props {
  requirement: PriorityTypes
}

export const PriorityWarning: FC<Props> = ({ requirement }) => {
  const { query } = useRouter()
  return (
    <Alert
      action={
        <NextLink passHref href={"/[id]/priority"} as={`${query.id}/priority`}>
          <Button variant="contained" color="primary" endIcon={<TableChart />}>
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
