import { Grid, GridItem, Space } from '@regen-design/components'
import { SvgIcons } from '@regen-design/icons'
import './demo.css'
export default function Demo() {
  return (
    <Space>
      <Grid cols={6} yGap={16} xGap={16}>
        {Object.keys(SvgIcons).map(key => {
          const Icon = SvgIcons[key]
          return (
            <GridItem className="icon-item" key={key}>
              <Icon size={'large'} />
            </GridItem>
          )
        })}
      </Grid>
    </Space>
  )
}
