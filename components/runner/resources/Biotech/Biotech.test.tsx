import { biotech } from "@/data/biotech"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import Biotech from "./index"

describe("<Biotech />", () => {
  beforeAll(setupIndexedDB)
  it("should render biotech gear", async () => {
    const { getByText } = render(
      withTestRouter(<Biotech />, {
        query: { id: "10" },
      }),
    )

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    biotech.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
