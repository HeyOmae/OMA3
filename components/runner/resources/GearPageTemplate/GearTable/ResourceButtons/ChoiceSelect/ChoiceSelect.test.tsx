import { render, fireEvent } from "@/test/testUtils"
import powerData from "@/data/adeptPowers.json"
import { ChoiceSelect } from "./index"
import { ChoiceContext } from "../../Row/ChoiceRatingRow"

describe("ChoiceSelect", () => {
  const setChoiceIndex = jest.fn()
  const setup = () =>
    render(
      <ChoiceContext.Provider
        value={{
          choices: powerData as any,
          setChoiceIndex,
          selectedChoiceIndex: 0,
        }}
      >
        <ChoiceSelect />
      </ChoiceContext.Provider>,
    )
  it("display adept powers", () => {
    const { getByText, getAllByText } = setup()

    expect(getByText(powerData[0].name)).toBeInTheDocument()

    fireEvent.mouseDown(getByText(powerData[0].name))
    powerData.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThanOrEqual(1)
    })
  })

  it("should set the index of the chosen power", () => {
    const selectedPowerIndex = 5

    const { getByText } = setup()

    fireEvent.mouseDown(getByText(powerData[0].name))

    getByText(powerData[selectedPowerIndex].name).click()
    expect(setChoiceIndex).toHaveBeenCalledWith(selectedPowerIndex)
  })
})
