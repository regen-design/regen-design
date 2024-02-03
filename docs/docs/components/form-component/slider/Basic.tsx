import { Space, Slider, Input } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState(0)
  return (
    <Space>
      <Slider value={value} onChange={setValue} />
      <Input onlyNumber value={value.toString()} readOnly />
    </Space>
  )
}
