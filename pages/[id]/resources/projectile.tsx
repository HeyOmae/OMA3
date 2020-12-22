import dynamic from "next/dynamic"
import { RunnerLayout } from "../../../components/layout"

const ProjectileWeapons = dynamic(
  () => import("../../../components/runner/resources/ProjectileWeapons"),
  {
    ssr: false,
  },
)

const ProjectilePage = () => (
  <RunnerLayout>
    <h1>Projectile Weapons</h1>
    <ProjectileWeapons />
  </RunnerLayout>
)

export default ProjectilePage
