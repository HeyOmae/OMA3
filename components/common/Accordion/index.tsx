import { Button, Collapse, CollapseProps } from "@material-ui/core"
import { FC, ReactNode, useState } from "react"

interface Props extends CollapseProps {
  children: [btnText: ReactNode, content: ReactNode]
}

export const Accordion: FC<Props> = ({
  children: [btnText, content],
  ...props
}) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <>
      <Button onClick={() => setShowContent(!showContent)}>{btnText}</Button>
      <Collapse in={showContent} {...props}>
        {content}
      </Collapse>
    </>
  )
}
