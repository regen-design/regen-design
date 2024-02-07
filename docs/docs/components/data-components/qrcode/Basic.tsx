import { Input, QRCode, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('https://regen-design.github.io/regen-design/')
  return (
    <Space flexDirection={'column'}>
      <QRCode value={value} />
      <Input value={value} debounce={300} onChange={setValue} />
    </Space>
  )
}
