import { Grid, GridItem } from '@regen-design/components'
import './demo.css'
export default function Demo() {
  return (
    <Grid cols={4} xGap={8} yGap={8}>
      <GridItem offset={1}>
        <div className="code-box-item-light"></div>
      </GridItem>
      <GridItem offset={1}>
        <div className="code-box-item"></div>
      </GridItem>
    </Grid>
  )
}
