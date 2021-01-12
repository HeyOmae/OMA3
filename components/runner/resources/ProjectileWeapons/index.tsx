import ProjectileData from "@/data/projectiles"
import { GearWeaponsProjectile } from "@/types/Resources"
import {
  addProjectileTableConfig,
  removeProjectileTableConfig,
} from "./projectileTableConfig"
import { GearPageTemplate } from "../GearPageTemplate"

export default () => (
  <GearPageTemplate<GearWeaponsProjectile>
    gearLabel="Projectile Weapons"
    resourceKey="projectile"
    addGearTableConfig={addProjectileTableConfig}
    listOfGear={ProjectileData}
    removeGearTableConfig={removeProjectileTableConfig}
  />
)
