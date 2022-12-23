import { useEffect, useState } from "react"
import { Releases } from "@/types/GithubApi"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material"

const ReleaseNotes = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [notes, setNotes] = useState<Releases>([])
  useEffect(() => {
    fetch("https://api.github.com/repos/HeyOmae/OMA3/releases")
      .then((res) => res.json())
      .then((res: Releases) => setNotes(res))
  })
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="release notes">
        <TableHead>
          <TableRow>
            <TableCell component="th">Version</TableCell>
            <TableCell component="th">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(({ tag_name: version, html_url, name }) => (
              <TableRow key={version}>
                <TableCell>
                  <a href={html_url}>{version}</a>
                </TableCell>
                <TableCell>{name}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={2}
              count={notes.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={(e, pageTo) => setPage(pageTo)}
              onRowsPerPageChange={({ target }) => {
                setRowsPerPage(+target.value)
                setPage(0)
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default ReleaseNotes
