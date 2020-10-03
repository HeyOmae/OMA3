import { FC } from "react"
import { RunnerLayout } from "../../components/layout"
import dynamic from "next/dynamic"

const Delete = dynamic(() => import("../../components/runner/delete"), {
  ssr: false,
})

export const DeletePage: FC = () => (
  <RunnerLayout>
    <h1>Retirement</h1>
    <p>Do you want to delete your runner?</p>
    <Delete />
  </RunnerLayout>
)

export default DeletePage
