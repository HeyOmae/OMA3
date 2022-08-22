import { cyberware } from "@/data/cyberware"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  userEvent,
  getByText as getByTextInElement,
} from "@/test/testUtils"
import Cyberware from "."

describe("<Cyberware />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<Cyberware />, { query: { id } }))

  it("should display cyberware that has essence cost", async () => {
    const { queryByText } = setup()

    await waitFor(() => {
      return expect(queryByText("Buy")).toBeInTheDocument()
    })

    cyberware.forEach(({ name, useAs }) => {
      // I'm a terrible programmer for doing this in my test
      if (useAs.some((useage) => "essence" in useage)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).toBeInTheDocument()
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(queryByText(name)).not.toBeInTheDocument()
      }
    })
  })

  it("should change a runner's essence when buying or selling cyberware", async () => {
    const { getByLabelText, getByText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Add Cyberarm Obvious")).toBeInTheDocument()
    })
    const essenceDisplay = getByText("Essence").closest("dl")
    expect(getByTextInElement(essenceDisplay, 6)).toBeInTheDocument()

    await userEvent.click(getByLabelText("Add Cyberarm Obvious"))
    expect(getByTextInElement(essenceDisplay, 5)).toBeInTheDocument()

    await userEvent.click(getByLabelText("Remove Cyberarm Obvious"))
    expect(getByTextInElement(essenceDisplay, 6)).toBeInTheDocument()
  })

  it("should not error if a runner does not have cyberware yet", async () => {
    const { getByLabelText } = setup("11")

    await waitFor(() => {
      expect(getByLabelText("Add Cyberarm Obvious")).toBeInTheDocument()
    })
  })
})
