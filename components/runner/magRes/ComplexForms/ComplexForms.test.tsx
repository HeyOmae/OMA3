import { Props } from "."
import { ComplexForms } from "./"
import {
  render,
  closest,
  getByText as globalGetByText,
} from "../../../../test/testUtils"
import complexFormData from "../../../../data/complexForm"
import { SET_COMPLEX_FORM } from ".."

describe("<ComplexForms/>", () => {
  const setup = () => {
    const props: Props = {
      dispatch: jest.fn(),
    }
    return { ...render(<ComplexForms {...props} />), props }
  }

  it("should render complex forms", () => {
    const { getByText } = setup()

    complexFormData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should dispatch the SET_COMPLEX_FORM action", () => {
    const { getByLabelText, props } = setup()

    getByLabelText("Add Puppeteer").click()

    expect(props.dispatch).toHaveBeenCalledWith({
      type: SET_COMPLEX_FORM,
      payload: {
        complexForm: {
          name: "Puppeteer",
          reference: [{ book: "SR6", page: 190 }],
          duration: "Sustained",
          fade: 5,
        },
      },
    })
  })

  it("should show the page reference for each complex form", () => {
    const { getByText } = setup()

    const staticVeil = closest(getByText("Static Veil"), "tr")
    expect(globalGetByText(staticVeil, "SR6 p.191")).toBeInTheDocument()
  })
})
