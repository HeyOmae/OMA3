import { FC } from "react"
import { Button } from "@mui/material"
import { rulebooks } from "@/data/rulebooks"
import {
  canOpenLocalFiles,
  chooseBook,
  useIsBookLinked,
} from "../common/BookReference/rulebookFiles"

// Pick the rulebook PDFs that page references open, or swap in another file
const RulebookSettings: FC = () =>
  canOpenLocalFiles() && (
    <>
      <h2>Rulebook PDF</h2>
      <p>
        Choose your PDF of the rulebook, and page references will open it at the
        right page. It stays on your computer.
      </p>
      {[...rulebooks.keys()].map((book) => (
        <ChooseBookButton key={book} book={book} />
      ))}
    </>
  )

const ChooseBookButton: FC<{ book: string }> = ({ book }) => {
  const linked = useIsBookLinked(book)
  return (
    <Button variant="outlined" onClick={() => void chooseBook(book)}>
      {linked ? "Change" : "Choose"} {book} PDF
    </Button>
  )
}

export default RulebookSettings
