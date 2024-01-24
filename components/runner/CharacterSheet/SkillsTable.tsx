import { FC } from "react"
import { Props } from "./InitiativeTable"
import { attributeMap } from "@/data/attributes"

export const SkillsTable: FC<Props> = ({ runner, attributes }) => {
  const { skills = {} } = runner
  return (
    <section>
      <h2 id="skills-table">Skills</h2>
      <table aria-labelledby="skills-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Attribute</th>
            <th>Dice Pool</th>
            <th>Spec</th>
            <th>Exp</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(skills).map(
            ([
              name,
              { rating, karmaRating = 0, attribute, specialization, expertise },
            ]) => {
              const currentRating = rating + karmaRating,
                dicepool =
                  currentRating + attributes[attributeMap[attribute.primary]]

              return (
                <tr key={`skill-${name}`}>
                  <td aria-label={`${name}-name`}>{name}</td>
                  <td aria-label={`${name}-rating`}>{currentRating}</td>
                  <td aria-label={`${name}-att`}>{attribute.primary}</td>
                  <td aria-label={`${name}-dp`}>{dicepool}</td>
                  <td aria-label={`${name}-spec`}>
                    {(specialization &&
                      `${specialization} (${dicepool + 2})`) ||
                      "N/A"}
                  </td>
                  <td aria-label={`${name}-exp`}>
                    {(expertise && `${expertise} (${dicepool + 3})`) || "N/A"}
                  </td>
                </tr>
              )
            },
          )}
        </tbody>
      </table>
    </section>
  )
}
