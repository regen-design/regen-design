import { Grid } from '@regen-design/components'
import './demo.css'
export default function Demo() {
  return (
    <Grid cols={4}>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
    </Grid>
  )
}
