import { FC } from "react"
import { Layout } from "../../components/layout"
import dynamic from "next/dynamic"

const Delete = dynamic(() => import("../../components/runner/delete"), {
  ssr: false,
})

export const DeletePage: FC = () => (
  <Layout>
    <h1>Retirement Page</h1>
    <p>Do you want to delete your runner?</p>
    <Delete />
  </Layout>
)

export default DeletePage
