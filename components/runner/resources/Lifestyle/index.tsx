import { lifestyles } from "@/data/lifestyle"
import { DispatchContext, gearPageReducerGenerator } from "../util"
import { Gear } from "@/types/Resources"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { ResourceBreadCrumbs } from "../GearPageTemplate/ResourceBreadCrumbs"
import { RemainingNuyen } from "../GearPageTemplate/RemainingNuyen"
import {
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import {
  AddResourceButton,
  RemoveResourceButton,
} from "../GearPageTemplate/GearTable/ResourceButtons"
import { useSinnerQualityNuyenModifier } from "@/hooks/useSinnerQualityNuyenModifier"

const LifeStyle = () => {
  const [runner, dispatch] = useRunnerAccess<Gear | number>(
    gearPageReducerGenerator("lifestyle"),
  )
  const sinnerModifier = useSinnerQualityNuyenModifier(runner)
  return runner ? (
    <>
      <ResourceBreadCrumbs activePage="Life Styles" />
      <RemainingNuyen runner={runner} />
      <Grid container spacing={3}>
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <TableContainer className="table-container">
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Buy</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lifestyles.map((lifestyle) => (
                    <TableRow key={lifestyle.name}>
                      <TableCell>
                        <AddResourceButton gear={lifestyle} />
                      </TableCell>
                      <TableCell>{lifestyle.name}</TableCell>
                      <TableCell>{lifestyle.cost * sinnerModifier}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {runner.resources?.lifestyle && (
            <Grid item md={6}>
              <h2>Purchased Life Styles</h2>
              <TableContainer className="table-container">
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Sell</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {runner.resources.lifestyle.map((lifestyle, index) => (
                      <TableRow key={lifestyle.name}>
                        <TableCell>
                          <RemoveResourceButton
                            gear={lifestyle}
                            index={index}
                          />
                        </TableCell>
                        <TableCell>{lifestyle.name}</TableCell>
                        <TableCell>
                          {lifestyle.cost * sinnerModifier}&yen;
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
        </DispatchContext.Provider>
      </Grid>
    </>
  ) : (
    <CircularProgress />
  )
}

export default LifeStyle
