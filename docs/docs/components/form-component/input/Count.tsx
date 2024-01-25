import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  return (
    <Space>
      <Input placeholder={'请输入'} showCount value={value} onChange={setValue} />
    </Space>
  )
}
