import { FC } from "react"
import { Button } from "@mui/material"
import { Print } from "@mui/icons-material"
import { CharSheetTableProps } from "."
import styles from "./sheet.module.css"

export const SheetHeader: FC<CharSheetTableProps> = ({ runner }) => (
  <header className={styles.header}>
    <div>
      <h1>{runner.name}</h1>
      <dl className={styles.facts}>
        {runner.metatype && (
          <div>
            <dt>Metatype</dt>
            <dd>{runner.metatype}</dd>
          </div>
        )}
        {runner.magres && (
          <div>
            <dt>Magic / Resonance</dt>
            <dd>{runner.magres}</dd>
          </div>
        )}
      </dl>
      {runner.description && (
        <p className={styles.description}>{runner.description}</p>
      )}
    </div>
    <Button
      className="no-print"
      variant="contained"
      startIcon={<Print />}
      onClick={() => window.print()}
    >
      Print
    </Button>
  </header>
)
