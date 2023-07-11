import { render, screen } from "@/test/testUtils"
import { RemainingKarma } from "./index"
import { Runner } from "@/types/runner"
import { mockedRunners } from "@/test/mocks"

const setup = (runner: Runner = mockedRunners[0]) => {
  render(<RemainingKarma runner={runner} />)
}

test("display the number of qualitys on a runner", () => {
  setup()

  expect(
    screen.getByRole("term", { name: /Qualities/i }).closest("dl"),
  ).toHaveTextContent("0/6")
})

test("number of qualities should be reduced by qualities on the runner", () => {
  setup(mockedRunners[3])

  expect(
    screen.getByRole("definition", { name: "Qualities Value" }),
  ).toHaveTextContent("6/6")
})

test("display the mount of bonus karma received from qualities", () => {
  setup(mockedRunners[7])

  expect(
    screen.getByRole("definition", { name: "Bonus Karma Value" }),
  ).toHaveTextContent("6/20")
})
