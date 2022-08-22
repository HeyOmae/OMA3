import { bioware } from "@/data/bioware"
import {
  render,
  setupIndexedDB,
  waitFor,
  withTestRouter,
  getByText as getByTextInElement,
  userEvent,
} from "@/test/testUtils"
import Bioware from "."

describe("<Bioware />", () => {
  beforeAll(setupIndexedDB)
  const setup = (id = "9") =>
    render(withTestRouter(<Bioware />, { query: { id } }))

  it("should display all the bioware and essence for them", async () => {
    const { getByText } = setup()

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    bioware.forEach(({ name, useAs: { essence } }) => {
      expect(getByText(RegExp(`${name}$`))).toBeInTheDocument()
      const biowareRow = getByText(RegExp(`${name}$`)).closest("tr")
      expect(getByTextInElement(biowareRow, essence)).toBeInTheDocument()
    })
  })

  it("should change a runner's essence when buying or selling bioware", async () => {
    const { getByLabelText, getByText } = setup()

    await waitFor(() => {
      expect(getByLabelText("Add Muscle Augmentation")).toBeInTheDocument()
    })
    const essenceDisplay = getByText("Essence").closest("dl")
    expect(getByTextInElement(essenceDisplay, 6)).toBeInTheDocument()

    await userEvent.click(getByLabelText("Add Muscle Augmentation"))
    expect(getByTextInElement(essenceDisplay, 5.8)).toBeInTheDocument()

    await userEvent.click(getByLabelText("Remove Muscle Augmentation"))
    expect(getByTextInElement(essenceDisplay, 6)).toBeInTheDocument()
  })
})
