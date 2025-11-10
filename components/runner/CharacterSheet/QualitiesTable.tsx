import { FC } from "react"
import { CharSheetTableProps } from "."
import { Quality } from "@/types/Qualities"

export const QualitiesTable: FC<CharSheetTableProps> = ({ runner }) => {
  if (!runner.qualities?.positive && !runner.qualities?.negative) {
    return null
  }

  const renderQualityTable = (qualities: Quality[]) => (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Level</th>
          <th scope="col">Selected</th>
        </tr>
      </thead>
      <tbody>
        {qualities.map((quality, index) => (
          <tr key={`${quality.name}-${index}`}>
            <td>{quality.name}</td>
            <td>{quality.currentLevel ?? "N/A"}</td>
            <td>{quality.selected ?? "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <section>
      <h2>Qualities</h2>

      {runner.qualities?.positive && (
        <section aria-label="positive qualities">
          <h3>Positive</h3>
          {renderQualityTable(runner.qualities.positive)}
        </section>
      )}

      {runner.qualities?.negative && (
        <section aria-label="negative qualities">
          <h3>Negative</h3>
          {renderQualityTable(runner.qualities.negative)}
        </section>
      )}
    </section>
  )
}
