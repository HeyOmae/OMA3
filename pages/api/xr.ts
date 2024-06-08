import type { NextApiRequest, NextApiResponse } from "next"
import { html } from "@/xr/index"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).send(html)
}
