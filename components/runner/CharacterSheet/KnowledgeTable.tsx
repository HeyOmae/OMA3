import { FC } from "react"
import { CharSheetTableProps } from "."
import { RowTable, RowTableProps } from "./RowTable"

export const KnowledgeTable: FC<CharSheetTableProps> = ({ runner }) => {
  const { knowledge = [], language = [] } = runner

  const tables: RowTableProps[] = [
    {
      title: "Knowledge Skills",
      headings: ["Name"],
      rows: knowledge.map((name) => [name]),
    },
    {
      title: "Languages",
      headings: ["Name", "Rating"],
      rows: language.map(({ name, rating }) => [name, rating]),
    },
  ].filter(({ rows }) => rows.length)

  if (!tables.length) {
    return null
  }

  return (
    <section>
      <h2 id="knowledge-table">Knowledge</h2>
      {tables.map((table) => (
        <RowTable key={table.title} {...table} />
      ))}
    </section>
  )
}
