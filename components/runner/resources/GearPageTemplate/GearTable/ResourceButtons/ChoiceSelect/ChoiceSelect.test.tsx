import { render, screen, userEvent } from "@/test/testUtils"
import powerData from "@/data/adeptPowers.json"
import { ChoiceSelect } from "./index"
import { ChoiceContext } from "../../Row/ChoiceRatingRow"
import { SelectChoiceContext } from "../../Row/ChoiceRatingRow"

describe("ChoiceSelect", () => {
  const setChoiceIndex = jest.fn()
  const setup = ({
    choices,
    selectedChoiceIndex = 0,
  }: Partial<SelectChoiceContext> = {}) => {
    const user = userEvent.setup()
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
    return user
  }
  it("display adept powers", async () => {
    const user = setup()

    expect(screen.getByText(powerData[0].name)).toBeInTheDocument()

    await user.click(screen.getByRole("combobox"))
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    powerData.forEach(({ name }) => {
      expect(screen.getByRole("option", { name })).toBeInTheDocument()
    })
  })

  it("should set the index of the chosen power", async () => {
    const selectedPowerIndex = 5

    const user = setup()

    await user.click(screen.getByRole("combobox"))

    await userEvent.click(
      screen.getByRole("option", { name: powerData[selectedPowerIndex].name }),
    )
    expect(setChoiceIndex).toHaveBeenCalledWith(selectedPowerIndex)
  })

  it("should be able to take an empty array for choices", async () => {
    const user = setup({
      choices: [],
      selectedChoiceIndex: "",
    })

    expect(screen.getByRole("combobox")).toBeInTheDocument()

    await user.click(screen.getByRole("combobox"))

    expect(screen.queryByRole("option")).not.toBeInTheDocument()
  })
})
