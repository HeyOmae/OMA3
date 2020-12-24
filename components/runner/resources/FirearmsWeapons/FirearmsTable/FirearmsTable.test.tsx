import { FirearmsRow, FirearmsTable } from "."
import { render } from "../../../../../test/testUtils"
import FirearmsData from "../../../../../data/firearms"

describe("<FirearmsTable/>", () => {
  describe("table", () => {
    const setup = () => {
      return render(<FirearmsTable weapons={FirearmsData} />)
    }
    it("should display all the gunz", () => {
      const { getByText } = setup()

      FirearmsData.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })
  })

  describe("row", () => {
    it("should render firearm attributes", () => {
      const { getByText } = render(
        <table>
          <tbody>
            <FirearmsRow weapon={FirearmsData[0]} />
          </tbody>
        </table>,
      )

      expect(getByText("Defiance Super Shock")).toBeInTheDocument()
      expect(getByText("6S(e)")).toBeInTheDocument()
      expect(getByText("SS")).toBeInTheDocument()
      expect(getByText("10/6/0/0/0")).toBeInTheDocument()
      expect(getByText("4(m)")).toBeInTheDocument()
      expect(getByText("1")).toBeInTheDocument()
      expect(getByText("340¥")).toBeInTheDocument()
    })
  })
})
