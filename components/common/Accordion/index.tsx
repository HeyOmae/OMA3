import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { FC, ReactNode } from "react"

interface Props {
  children: [summary: ReactNode, content: ReactNode]
  label: string
}

export const AccordionWrapper: FC<Props> = ({
  children: [summary, content],
  label,
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${label}-content`}
        id={`${label}-header`}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  )
}
