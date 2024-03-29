import { RadioGroup, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]
  const [value, setValue] = useState('')
  return (
    <Space flexDirection={'column'}>
      <RadioGroup size={'tiny'} value={value} options={options} onChange={setValue} />
      <RadioGroup size={'small'} value={value} options={options} onChange={setValue} />
      <RadioGroup size={'default'} value={value} options={options} onChange={setValue} />
      <RadioGroup size={'large'} value={value} options={options} onChange={setValue} />
    </Space>
  )
}
