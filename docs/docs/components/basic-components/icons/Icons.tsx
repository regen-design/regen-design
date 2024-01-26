import { Grid, GridItem, Input, Space } from '@regen-design/components'
import { SvgIcons } from '@regen-design/icons'
import './demo.css'
import { useCopy } from '@regen-design/hooks'
import { useEffect, useState } from 'react'
import { useTheme } from '@regen-design/theme'
export default function Demo() {
  const [handleCopy, isSuccess] = useCopy()
  const [searchValue, SetSearchValue] = useState<string>('')
  const theme = useTheme()
  const [filterIcons, setFilterIcons] = useState<any>({})
  const [currentClickKey, setCurrentClickKey] = useState<string>('')
  useEffect(() => {
    const keys = Object.keys(SvgIcons)
    const filterKeys = keys.filter(key => {
      return (key || '').toLocaleUpperCase().includes((searchValue || '').toLocaleUpperCase())
    })
    const filterIcons = filterKeys.reduce((pre, cur) => {
      pre[cur] = SvgIcons[cur]
      return pre
    }, {})
    setFilterIcons(filterIcons)
  }, [searchValue])
  return (
    <Space yGap={16}>
      <Input
        placeholder={'请输入要搜索的图标'}
        debounce={300}
        value={searchValue}
        onChange={SetSearchValue}
      />
      <Grid cols={6} yGap={16} xGap={16}>
        {Object.keys(filterIcons).map(key => {
          const Icon = filterIcons[key]
          return (
            <GridItem key={key}>
              <div
                className="icon-item"
                style={{
                  border: `1px solid ${theme.theme === 'light' ? theme.borderColor : theme.borderDarkColor}`,
                }}
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
