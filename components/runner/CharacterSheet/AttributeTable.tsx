import { FC, useMemo } from "react"
import {
  Attributes,
  attributeTotal,
  RunnerAttributes,
} from "@/types/RunnerAttributes"
import { defined } from "@/components/util"
import {
  attributes as attributeData,
  technomancerAttributes,
} from "@/data/attributes"
import { useRunnerEssence } from "@/hooks/useRunnerEssence"
import { CharSheetTableProps } from "."
import { InitiativeTable } from "./InitiativeTable"
import { SkillsTable } from "./SkillsTable"

// every attribute starts at 1
const attributeValue = (
  attributes: RunnerAttributes | undefined,
  attribute: Attributes,
) => attributeTotal(defined(attributes?.[attribute], attribute)) + 1

export const AttributeTable: FC<CharSheetTableProps> = ({ runner }) => {
  const isTechnomancer = runner.magres === "Technomancer"

  const attributes = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(
          isTechnomancer ? technomancerAttributes : attributeData,
        ).map(([label, key]) => [
          label,
          attributeValue(runner.attributes, key),
        ]),
      ),
    [isTechnomancer, runner.attributes],
  )

  const essence = useRunnerEssence(runner)
  const attributeEntries = Object.entries(attributes)

  return (
    <>
      <section>
        <h2 id="attribute-table">Attributes</h2>
        <table aria-labelledby="attribute-table">
          <thead>
            <tr>
              {attributeEntries.map(([att]) => (
                <th id={att} key={att}>
                  {att}
                </th>
              ))}
              <th id="edg">edg</th>
              <th id="ess">ess</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {attributeEntries.map(([att, value]) => (
                <td aria-labelledby={att} key={att}>
                  {value}
                </td>
              ))}
              <td aria-labelledby="edg">
                {attributeValue(runner.attributes, "Edge")}
              </td>
              <td aria-labelledby="ess">{essence}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <InitiativeTable runner={runner} attributes={attributes} />
      <SkillsTable runner={runner} attributes={attributes} />
    </>
  )
}
