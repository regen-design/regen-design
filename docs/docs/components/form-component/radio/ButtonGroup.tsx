import { RadioGroup, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Banana', value: 'Banana' },
  ]
  const [value, setValue] = useState('')
  return (
    <Space flexDirection={'column'}>
      <RadioGroup
        size={'tiny'}
        value={value}
        optionType={'button'}
        options={options}
        onChange={setValue}
      />
      <RadioGroup
        size={'small'}
        value={value}
        optionType={'button'}
        options={options}
        onChange={setValue}
      />
      <RadioGroup
        size={'default'}
        value={value}
        optionType={'button'}
        options={options}
        onChange={setValue}
      />
      <RadioGroup
        size={'large'}
        value={value}
        optionType={'button'}
        options={options}
        onChange={setValue}
      />
    </Space>
  )
}
