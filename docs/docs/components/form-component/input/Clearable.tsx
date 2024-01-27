import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')
  return (
    <Space>
      <Input placeholder={'可以清除'} clearable value={value} onChange={setValue} />
      <Input
        placeholder={'可以清除'}
        clearable
        type={'textarea'}
        value={value}
        onChange={setValue}
      />
      <Input placeholder={'可以清除'} clearable round value={value} onChange={setValue} />
    </Space>
  )
}
