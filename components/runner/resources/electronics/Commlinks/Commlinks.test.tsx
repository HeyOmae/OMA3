import {
  expectGearToDisplayMatrixDeviceTable,
  setupIndexedDB,
  findGearReference,
  render,
  withTestRouter,
} from "@/test/testUtils"
import { Commlinks } from "."
import { commlinkData } from "@/data/electronics"

describe("<Commlinks/>", () => {
  beforeAll(setupIndexedDB)

  it(
    "should display stats for commlink",
    expectGearToDisplayMatrixDeviceTable(Commlinks, commlinkData),
  )

  it("should show the rulebook page for gear", async () => {
    render(withTestRouter(<Commlinks />, { query: { id: "10" } }))
    expect(await findGearReference("Meta Link", 267)).toBeInTheDocument()
  })
})
