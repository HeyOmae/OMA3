import { useGetRunner } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { AttributeTable } from "./AttributeTable"
import { Runner } from "@/types/runner"
import { GearTable } from "./GearTables"
import { KnowledgeTable } from "./KnowledgeTable"
import { MagicTable } from "./MagicTable"
import { QualitiesTable } from "./QualitiesTable"
import { SheetHeader } from "./SheetHeader"
import styles from "./sheet.module.css"

const CharacterSheet = () => {
  const runner = useGetRunner()

  return runner ?
      <div className={styles.sheet}>
        <SheetHeader runner={runner} />
        <AttributeTable runner={runner} />
        <KnowledgeTable runner={runner} />
        <MagicTable runner={runner} />
        <GearTable runner={runner} />
        <QualitiesTable runner={runner} />
      </div>
    : <CircularProgress />
}

export default CharacterSheet

export interface CharSheetTableProps {
  runner: Runner
}
