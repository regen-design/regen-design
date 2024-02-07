import { Button, Space, Switch, Watermark } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(false)
  const [fontSize, setFontSize] = useState(32)
  return (
    <>
      <Watermark content={'喜气洋洋'} zIndex={9e9} fontSize={fontSize} fullscreen={checked} />
      <Space flexDirection={'column'}>
        <Space>
          <Switch checked={checked} onChange={setChecked} />
          <span>开启全屏</span>
        </Space>
        <Space>
          <Button
            onClick={() => {
              setFontSize(fontSize - 1)
            }}
          >
            缩小
          </Button>
          <span>{fontSize}</span>
          <Button
            onClick={() => {
              setFontSize(fontSize + 1)
            }}
          >
            放大
          </Button>
        </Space>
      </Space>
    </>
  )
}
