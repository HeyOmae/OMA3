import { negative, positive } from "@/data/qualities"
import { QualityTable } from "./QualityTable"

const Qualities = () => (
  <div>
    <h2>Positive Qualities</h2>
    <QualityTable qualities={positive} />
    <h2>Negative Qualities</h2>
    <QualityTable qualities={negative} />
  </div>
)

export default Qualities
