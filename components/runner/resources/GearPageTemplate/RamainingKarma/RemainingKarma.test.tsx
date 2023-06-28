import { render, screen } from "@/test/testUtils"
import { RemainingKarma } from "./index"
import { Runner } from "@/types/runner"
import { mockedRunners } from "@/test/mocks"

const setup = (runner: Runner = mockedRunners[0]) => {
  render(<RemainingKarma runner={runner} />)
}

test("display 25 karma for runners that have not spent karma", () => {
  setup()

  const karmaEl = screen.getByRole("term")
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("25")
})

test("negative qualities should increase karma", () => {
  setup(mockedRunners[7])

  const karmaEl = screen.getByRole("term")
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("31")
})

test("positive qualities should decrease karma", () => {
  setup(mockedRunners[8])

  const karmaEl = screen.getByRole("term")
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("22")
})

test("qualities with levels should multiple karma costs", () => {
  setup(mockedRunners[9])

  const karmaEl = screen.getByRole("term")
  expect(karmaEl).toHaveTextContent("Karma")
  expect(karmaEl.closest("dl")).toHaveTextContent("13")
})
