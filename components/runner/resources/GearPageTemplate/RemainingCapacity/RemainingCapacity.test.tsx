import { mockedRunners } from "@/test/mocks"
import { render } from "@/test/testUtils"
import { RemainingCapacity, Props } from "./index"

describe("<RemainingCapacity />", () => {
  const setup = (props: Props) => {
    return render(<RemainingCapacity {...props} />)
  }
  it("should display the remaining capacity of a piece of gear", () => {
    const { getByText } = setup({ gear: mockedRunners[9].resources.imaging[0] })

    expect(getByText("Capacity:")).toBeInTheDocument()
    expect(getByText("1/3")).toBeInTheDocument()
  })

  it("should display 0 capacity used if the gear is unmodded", () => {
    const { getByText } = setup({
      gear: mockedRunners[10].resources.imaging[0],
    })

    expect(getByText("0/4")).toBeInTheDocument()
  })

  it("should use the rating of a mod instead of the capacity", () => {
    const { getByText } = setup({
      gear: {
        ...mockedRunners[10].resources.audio[0],
        mods: [
          {
            useAs: [
              {
                type: "ACCESSORY",
                subtype: "AUDIO ENHANCEMENT",
                capacity: 1,
                slot: "AUDIO",
              },
              {
                type: "ACCESSORY",
                subtype: "CYBER EARWARE",
                capacity: 1,
                slot: "CYBEREAR IMPLANT",
                cost: 3250,
                availability: "4",
                maxRating: 6,
              },
              {
                type: "CYBERWARE",
                subtype: "CYBER EARWARE",
                essence: 0.1,
                cost: 3250,
                availability: "4",
              },
            ],
            availability: "3",
            cost: 250,
            name: "Select Sound Filter",
            maxRating: 3,
            currentRating: 3,
            rating: true,
            rateMultiplier: "capacity cost",
            type: "typescript",
            subtype: "is dumb",
          },
        ],
      },
    })

    expect(getByText("3/3")).toBeInTheDocument()
  })
})
