import { FC } from "react"

export interface RowTableProps {
  title: string
  headings: string[]
  rows: (string | number | undefined)[][]
}

export const RowTable: FC<RowTableProps> = ({ title, headings, rows }) => {
  const id = `${title.toLowerCase().replace(/\s/g, "-")}-table`
  return (
    <section>
      <h3 id={id}>{title}</h3>
      <table aria-labelledby={id}>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${title}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
