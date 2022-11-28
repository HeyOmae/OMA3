import { render, fireEvent, userEvent } from "@/test/testUtils"
import powerData from "@/data/adeptPowers.json"
import { ChoiceSelect } from "./index"
import { ChoiceContext } from "../../Row/ChoiceRatingRow"
import { SelectChoiceContext } from "../../Row/ChoiceRatingRow"

describe("ChoiceSelect", () => {
  const setChoiceIndex = jest.fn()
  const setup = ({
    choices,
    selectedChoiceIndex = 0,
  }: Partial<SelectChoiceContext> = {}) =>
    render(
      <ChoiceContext.Provider
        value={{
          choices: choices ?? (powerData as any),
          setChoiceIndex,
          selectedChoiceIndex,
        }}
      >
        <ChoiceSelect />
      </ChoiceContext.Provider>,
    )
  it("display adept powers", () => {
    const { getByText, getByRole, getAllByText } = setup()

    expect(getByText(powerData[0].name)).toBeInTheDocument()

    fireEvent.mouseDown(getByRole("button"))
    powerData.forEach(({ name }) => {
      expect(getAllByText(name).length).toBeGreaterThanOrEqual(1)
    })
  })

  it("should set the index of the chosen power", async () => {
    const selectedPowerIndex = 5

    const { getByText } = setup()

    fireEvent.mouseDown(getByText(powerData[0].name))

    await userEvent.click(getByText(powerData[selectedPowerIndex].name))
    expect(setChoiceIndex).toHaveBeenCalledWith(selectedPowerIndex)
  })

  it("should be able to take an empty array for choices", () => {
    const { getByRole, queryByRole } = setup({
      choices: [],
      selectedChoiceIndex: "",
    })

    expect(getByRole("button")).toBeInTheDocument()

    fireEvent.mouseDown(getByRole("button"))

    expect(queryByRole("option")).not.toBeInTheDocument()
  })
})
