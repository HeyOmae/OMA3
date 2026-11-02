import { render, screen } from "@/test/testUtils"
import { RemainingKarma } from "./index"
import { Runner } from "@/types/runner"
import { mockedRunners } from "@/test/mocks"

const setup = (runner: Runner = mockedRunners[0]) => {
  render(<RemainingKarma runner={runner} />)
}

test("display 25 karma for runners that have not spent karma", () => {
  setup()

  const karmaEl = screen.getByRole("term", { name: /Available Karma/i })
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("50")
})

test("negative qualities should increase karma", () => {
  setup(mockedRunners[10])

  const karmaEl = screen.getByRole("term", { name: /Available Karma/i })
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("56")
})

test("positive qualities should decrease karma", () => {
  setup(mockedRunners[8])

  const karmaEl = screen.getByRole("term", { name: /Available Karma/i })
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("7")
})

test("qualities with levels should multiple karma costs", () => {
  setup(mockedRunners[9])

  const karmaEl = screen.getByRole("term", { name: "Available Karma" })
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("28")
})

test("should flag karma that is overspent", () => {
  setup({ ...mockedRunners[0], karmaToNuyen: 51 })

  expect(
    screen.getByRole("definition", { name: "Available Karma Value" }),
  ).toHaveClass("bad-stuff")
})

test("should not flag karma that is left to spend", () => {
  setup()

  expect(
    screen.getByRole("definition", { name: "Available Karma Value" }),
  ).not.toHaveClass("bad-stuff")
})
