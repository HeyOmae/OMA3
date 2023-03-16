import { positive } from "@/data/qualities"
import {
  render,
  screen,
  userEvent,
  getByText as getByTextInElement,
} from "@/test/testUtils"
import Qualities from "."

const setup = () => {
  const user = userEvent.setup()
  render(<Qualities />)
  return user
}

test("displayes poitive qualities", () => {
  setup()

  positive.forEach((quality) => {
    const qualityRow = screen.getByText(quality.name).closest("tr")
    expect(getByTextInElement(qualityRow, quality.karma)).toBeInTheDocument()
  })
})
