import { WeaponTable, Props } from "."
import { render } from "../../../../test/testUtils"
import firearmsData from "../../../../data/firearms"

describe("<WeaponTable/>", () => {
  const setup = ({ weapons }: Partial<Props>) => {
    const props: Props = {
      weapons,
    }
    return render(<WeaponTable {...props} />)
  }
  it("should render melee weapon stats", () => {
    const { getByText } = setup({
      weapons: [
        {
          name: "Combat Axe",
          availability: "4",
          cost: 500,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
            {
              type: "ACCESSORY",
              subtype: "INSTRUMENT WEAPON",
              slot: "INSTRUMENT WEAPON",
              capacity: 1,
              availability: "6",
              cost: 500,
            },
          ],
          weapon: {
            dv: "5P",
            ar: [9, 0, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
      ],
    })

    expect(getByText("Combat Axe")).toBeInTheDocument()
    expect(getByText("5P")).toBeInTheDocument()
    expect(getByText("9/0/0/0/0")).toBeInTheDocument()
    expect(getByText("4")).toBeInTheDocument()
    expect(getByText("500¥")).toBeInTheDocument()
  })

  it("should render firearms", () => {
    const taser = firearmsData[0]
    const { getByText } = setup({ weapons: [taser] })

    expect(getByText(taser.name)).toBeInTheDocument()
    expect(getByText(taser.weapon.dv)).toBeInTheDocument()
    // expect(getByText(taser.weapon.mode)).toBeInTheDocument()
    expect(getByText("10/6/0/0/0")).toBeInTheDocument()
    // expect(getByText(taser.weapon.ammo)).toBeInTheDocument()
    expect(getByText(taser.availability)).toBeInTheDocument()
    expect(getByText("340¥")).toBeInTheDocument()
  })
})
