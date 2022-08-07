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

  it("should display cyberware", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      return expect(getByText("Buy")).toBeInTheDocument()
    })

    cyberware.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
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
