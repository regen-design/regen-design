import { DatePicker, Space } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState(Date.now())
  return (
    <Space flexDirection={'column'}>
      <DatePicker value={value} onChange={setValue} size={'tiny'} />
      <DatePicker value={value} onChange={setValue} size={'small'} />
      <DatePicker value={value} onChange={setValue} size={'default'} />
      <DatePicker value={value} onChange={setValue} size={'large'} />
    </Space>
  )
}
