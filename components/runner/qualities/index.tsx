import { positive } from "@/data/qualities"
import { QualityTable } from "./QualityTable"

const Qualities = () => (
  <div>
    <h2>Positive Qualities</h2>
    <QualityTable qualities={positive} />
  </div>
)

export default Qualities
