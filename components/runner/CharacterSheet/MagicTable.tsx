import { FC } from "react"
import { CharSheetTableProps } from "."
import { MetaMagic, Spell } from "@/types/MagRes"
import { Echo } from "@/types/Matrix"

interface RowTableProps {
  title: string
  headings: string[]
  rows: (string | number | undefined)[][]
}

const RowTable: FC<RowTableProps> = ({ title, headings, rows }) => {
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

const namesOnly = (items: (MetaMagic | Echo)[]) =>
  items.map(({ name }) => [name])

export const MagicTable: FC<CharSheetTableProps> = ({ runner }) => {
  const spells: Spell[] = Object.values(runner.spells ?? {}).flat()
  const { rituals = [], powers = [], complexForms = [] } = runner
  const { initiation = [], submersion = [] } = runner

  const tables: RowTableProps[] = [
    {
      title: "Spells",
      headings: ["Name", "Category", "Range", "Type", "Duration", "Drain"],
      rows: spells.map(({ name, category, range, type, duration, drain }) => [
        name,
        category,
        range,
        type,
        duration,
        drain,
      ]),
    },
    {
      title: "Rituals",
      headings: ["Name", "Threshold", "Features"],
      rows: rituals.map(({ name, threshold, ritualfeature }) => [
        name,
        threshold,
        ritualfeature.map(({ ref }) => ref).join(", "),
      ]),
    },
    {
      title: "Adept Powers",
      headings: ["Name", "Level", "Activation"],
      rows: powers.map(({ name, level, levels, activation }) => [
        name,
        level ?? (levels ? 1 : undefined),
        activation,
      ]),
    },
    {
      title: "Complex Forms",
      headings: ["Name", "Duration", "Fade"],
      rows: complexForms.map(({ name, duration, fade }) => [
        name,
        duration,
        fade,
      ]),
    },
    {
      title: "Initiation",
      headings: ["Metamagic"],
      rows: namesOnly(initiation),
    },
    { title: "Submersion", headings: ["Echo"], rows: namesOnly(submersion) },
  ].filter(({ rows }) => rows.length)

  if (!tables.length) {
    return null
  }

  return (
    <section>
      <h2 id="magic-table">
        {runner.magres === "Technomancer" ? "Resonance" : "Magic"}
      </h2>
      {tables.map((table) => (
        <RowTable key={table.title} {...table} />
      ))}
    </section>
  )
}
