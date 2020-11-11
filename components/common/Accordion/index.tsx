import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
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
