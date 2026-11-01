import ProjectileData from "@/data/projectiles"

import {
  addProjectileTableConfig,
  removeProjectileTableConfig,
} from "./projectileTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const ProjectileWeapons = () => (
  <GearPageTemplate
    gearLabel="Projectile Weapons"
    resourceKey="projectile"
    addGearTableConfig={addProjectileTableConfig}
    listOfGear={ProjectileData}
    removeGearTableConfig={removeProjectileTableConfig}
  />
)
export default ProjectileWeapons
