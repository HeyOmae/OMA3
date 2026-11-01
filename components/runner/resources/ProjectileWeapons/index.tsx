import ProjectileData from "@/data/projectiles"
import { GearProjectile } from "@/types/Resources"
import {
  addProjectileTableConfig,
  removeProjectileTableConfig,
} from "./projectileTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

const ProjectileWeapons = () => (
  <GearPageTemplate<GearProjectile>
    gearLabel="Projectile Weapons"
    resourceKey="projectile"
    addGearTableConfig={addProjectileTableConfig}
    listOfGear={ProjectileData}
    removeGearTableConfig={removeProjectileTableConfig}
  />
)
export default ProjectileWeapons
