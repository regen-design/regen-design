import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  return (
    <Space>
      <Input placeholder={'基本的Input'} value={value} onChange={setValue} />
      <Input placeholder={'基本的Textarea'} value={value} onChange={setValue} type="textarea" />
    </Space>
  )
}