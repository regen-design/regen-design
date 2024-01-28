import { Radio, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(false)
  return (
    <Space alignItems={'center'}>
      <Radio checked={checked} onChange={setChecked}>
        单选框
      </Radio>
    </Space>
  )
}
