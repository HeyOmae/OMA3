import { ComplexForms, Props } from "."
import { render } from "../../../../test/testUtils"
import complexFormData from "../../../../data/complexForm.json"
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
          duration: "Sustained",
          fade: 5,
        },
      },
    })
  })
})
