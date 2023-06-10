import { biotech } from "@/data/biotech"
import {
  render,
  setupIndexedDB,
  withTestRouter,
  screen,
  SliderHelper,
} from "@/test/testUtils"
import Biotech from "./index"

describe("<Biotech />", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    render(
      withTestRouter(<Biotech />, {
        query: { id: "10" },
      }),
    )
  }
  it("should render biotech gear", async () => {
    setup()

    expect(await screen.findByText("Buy")).toBeInTheDocument()

    biotech.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  test("Tranq Patch price should be equal to the base times rating squared", async () => {
    setup()

    await SliderHelper.change(
      await screen.findByTestId("Tranq Patch-rating"),
      5,
      1,
      12,
    )

    expect(
      screen.getByLabelText("Add Tranq Patch").closest("tr"),
    ).toHaveTextContent("250¥")
  })
})
