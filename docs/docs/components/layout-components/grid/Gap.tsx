import { Grid } from '@regen-design/components'
import './demo.css'
export default function Demo() {
  return (
    <Grid cols={4} xGap={8} yGap={8}>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
      <div className="code-box-item-light"></div>
      <div className="code-box-item"></div>
    </Grid>
  )
}
