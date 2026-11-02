import { FC, Fragment } from "react"
import { Link, Tooltip } from "@mui/material"
import { Reference } from "@/types/generalTypes"
import { rulebooks } from "@/data/rulebooks"
import { canOpenLocalFiles, connectBook, useBookUrl } from "./rulebookFiles"

// Where something is in the rulebook. In Chrome and Edge it links to the
// page in the reader's own PDF of the book.
export const BookReference: FC<{ reference?: Reference[] }> = ({
  reference,
}) =>
  reference?.length ?
    reference.map((ref, index) => (
      <Fragment key={`${ref.book} ${ref.page}`}>
        {index > 0 && ", "}
        <BookPage {...ref} />
      </Fragment>
    ))
  : "—"

const BookPage: FC<Reference> = ({ book, page }) => {
  const url = useBookUrl(book)
  const label = `${book} p.${page}`
  const pdfPageOffset = rulebooks.get(book)?.pdfPageOffset

  if (!canOpenLocalFiles() || pdfPageOffset === undefined) return label

  const pageFragment = `#page=${page + pdfPageOffset}`
  return url ?
      <Link href={url + pageFragment} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    : <Tooltip
        describeChild
        title={`Link your PDF of ${book} to open it at this page`}
      >
        <Link
          component="button"
          onClick={async () => {
            const opened = await connectBook(book)
            if (opened) window.open(opened + pageFragment, "_blank")
          }}
        >
          {label}
        </Link>
      </Tooltip>
}
