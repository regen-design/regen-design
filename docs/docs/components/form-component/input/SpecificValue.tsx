import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  return (
    <Space>
      <Input placeholder={'只能输入数字'} onlyNumber />
      <Input placeholder={'没有前后空格'} trim />
    </Space>
  )
}
