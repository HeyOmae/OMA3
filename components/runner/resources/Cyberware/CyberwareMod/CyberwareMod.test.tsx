import { cyberware } from "@/data/cyberware"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
} from "@/test/testUtils"
import CyberwareMod from "./index"

describe("<CyberwareMod />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(
      withTestRouter(<CyberwareMod />, { query: { id: "10", gearIndex: "0" } }),
    )

  it("should render cyberware mods", async () => {
    const { queryByText } = setup()

    await waitFor(() => {
      return expect(queryByText("Buy")).toBeInTheDocument()
    })

    cyberware.forEach(({ name, useAs }) => {
      // I'm a terrible programmer for doing this in my test
      if (useAs.some((useage) => "capacity" in useage)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).toBeInTheDocument()
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).not.toBeInTheDocument()
      }
    })
  })
})
