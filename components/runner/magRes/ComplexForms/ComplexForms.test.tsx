import { ComplexForms } from "."
import { render } from "../../../../test/testUtils"
import complexFormData from "../../../../data/complexForm.json"

describe("<ComplexForms/>", () => {
  const setup = () => {
    return render(<ComplexForms />)
  }

  it("should render complex forms", () => {
    const { getByText } = setup()

    complexFormData.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })
})
