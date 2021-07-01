import { render } from "@/test/testUtils"
import { GearNav } from "./GearNav"
import * as securityData from "@/data/security"

describe("GearNavLinks", () => {
  it("should take an array of GearTyped array and display a link for each", () => {
    const { getByText } = render(
      <GearNav pathTo="/resource/security/" gearData={securityData} />,
    )

    Object.keys(securityData).forEach((gearName) => {
      expect(getByText(gearName)).toHaveAttribute(
        "href",
        `/resource/security/${gearName}`,
      )
    })
  })
})
