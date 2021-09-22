import { Button } from "@mui/material"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { useIndexedDB } from "react-indexed-db"

export const Delete: FC = () => {
  const { deleteRecord } = useIndexedDB("runners")
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        deleteRecord(+router.query.id).then(() => router.push("/"))
      }}
    >
      Retire Runner
    </Button>
  )
}

export default Delete
