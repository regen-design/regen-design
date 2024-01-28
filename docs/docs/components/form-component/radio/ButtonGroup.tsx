import { RadioGroup, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]
  const [value, setValue] = useState('')
  return (
    <Space alignItems={'center'}>
      <RadioGroup value={value} optionType={'button'} options={options} onChange={setValue} />
    </Space>
  )
}
