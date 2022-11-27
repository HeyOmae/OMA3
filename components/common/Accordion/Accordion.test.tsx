import { render, waitFor, userEvent } from "@/test/testUtils"
import { AccordionWrapper } from "./index"

describe("<Accordion/>", () => {
  const setup = () => {
    return render(
      <AccordionWrapper label="testing">
        <h1>The Button</h1>
        <p>I am some child content</p>
      </AccordionWrapper>,
    )
  }

  it("should have a button that shows/hides the children", async () => {
    const { getByText } = setup()

    expect(getByText("I am some child content")).not.toBeVisible()

    await userEvent.click(getByText("The Button"))

    expect(getByText("I am some child content")).toBeVisible()

    await userEvent.click(getByText("The Button"))

    await waitFor(() => {
      expect(getByText("I am some child content")).not.toBeVisible()
    })
  })
})
