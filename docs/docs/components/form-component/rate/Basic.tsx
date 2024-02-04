import { Rate, Space } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState(3)
  return (
    <Space>
      <Rate value={value} onChange={setValue} />
    </Space>
  )
}
