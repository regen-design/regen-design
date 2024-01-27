import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('你干🐴?')
  const [value2, setValue2] = useState('你干🐴?')
  return (
    <Space>
      <Input placeholder={'请输入'} showCount value={value} onChange={setValue} />
      <span>默认表现</span>
      <Input placeholder={'请输入'} showCount value={value1} maxLength={12} onChange={setValue1} />
      <span>正确表现</span>
      <Input
        placeholder={'请输入'}
        showCount
        value={value2}
        realLength
        maxLength={12}
        onChange={setValue2}
      />
    </Space>
  )
}
