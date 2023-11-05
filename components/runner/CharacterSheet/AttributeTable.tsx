import { Runner } from "@/types/runner"
import { FC, useMemo } from "react"
import { attributes } from "@/data/attributes"

interface Props {
  runner: Runner
}

const initTableData = { head: [], body: [] }
export const AttributeTable: FC<Props> = ({ runner }) => {
  const { head, body } = useMemo(
    () =>
      Object.entries(attributes).reduce((acc, [label, key]) => {
        const { adjustment, karma = 0, points } = runner.attributes[key]
        return {
          head: [
            ...acc.head,
            <th key={label} id={label}>
              {label}
            </th>,
          ],
          body: [
            ...acc.body,
            <td key={label} aria-labelledby={label}>
              {adjustment + karma + points + 1}
            </td>,
          ],
        }
      }, initTableData),
    [runner.attributes],
  )

  return (
    <section>
      <h2 id="attribute-table">Attributes</h2>
      <table aria-labelledby="attribute-table">
        <thead>
          <tr>
            {head}
            <td id="edg">edg</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {body}
            <td aria-labelledby="edg">
              {Object.values(runner.attributes.Edge).reduce(
                (acc, val) => acc + val,
                1,
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
