import { Grid, GridItem } from '@regen-design/components'
import './demo.css'
export default function Demo() {
  return (
    <Grid cols={4} xGap={16}>
      <GridItem>
        <div className="code-box-item-light"></div>
      </GridItem>
      <GridItem>
        <div className="code-box-item"></div>
      </GridItem>
      <GridItem>
        <div className="code-box-item-light"></div>
      </GridItem>
      <GridItem>
        <div className="code-box-item"></div>
      </GridItem>
    </Grid>
  )
}
