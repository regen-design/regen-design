import { CheckboxGroup, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
  const [value, setValue] = useState([''])
  return (
    <Space alignItems={'center'}>
      <CheckboxGroup value={value} options={options} onChange={setValue} />
    </Space>
  )
}
