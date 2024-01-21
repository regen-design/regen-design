import { Grid, GridItem, Space } from '@regen-design/components'
import { SvgIcons } from '@regen-design/icons'
import './demo.css'
import { useCopy } from '@regen-design/hooks'
import { useState } from 'react'
import { useTheme } from '@regen-design/theme'
export default function Demo() {
  const [handleCopy, isSuccess] = useCopy()
  const theme = useTheme()
  const [currentClickKey, setCurrentClickKey] = useState<string>('')

  return (
    <Space>
      <Grid cols={6} yGap={16} xGap={16}>
        {Object.keys(SvgIcons).map(key => {
          const Icon = SvgIcons[key]
          return (
            <GridItem key={key}>
              <div
                className="icon-item"
                onClick={() => {
                  setCurrentClickKey(key)
                  handleCopy(`<${key} />`)
                }}
              >
                <div
                  className="icon-item__tip"
                  style={{
                    opacity: isSuccess && currentClickKey === key ? 1 : 0,
                    backgroundColor: theme.colors.primary,
                  }}
                >
                  Copied
                </div>
                <Icon size={'large'} />
              </div>
            </GridItem>
          )
        })}
      </Grid>
    </Space>
  )
}
