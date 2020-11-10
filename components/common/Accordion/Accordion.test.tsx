import { render, waitFor } from "../../../test/testUtils"
import { Accordion } from "./index"

describe("<Accordion/>", () => {
  const setup = () => {
    return render(
      <Accordion timeout={0}>
        <h1>The Button</h1>
        <p>I am some child content</p>
      </Accordion>,
    )
  }

  it("should have a button that shows/hides the children", async () => {
    const { getByText } = setup()

    expect(getByText("I am some child content")).not.toBeVisible()

    getByText("The Button").click()

    expect(getByText("I am some child content")).toBeVisible()

    getByText("The Button").click()

    await waitFor(() => {
      expect(getByText("I am some child content")).not.toBeVisible()
    })
  })
})
