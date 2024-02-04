import { Space, Slider, Switch } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState(50)
  const [disabled, setDisabled] = useState(true)
  return (
    <Space>
      <Switch checked={disabled} onChange={setDisabled} />
      <Slider value={value} disabled={disabled} onChange={setValue} />
    </Space>
  )
}
