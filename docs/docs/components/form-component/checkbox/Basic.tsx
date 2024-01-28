import { Checkbox, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(true)
  return (
    <Space alignItems={'center'}>
      <Checkbox checked={checked} onChange={setChecked}>
        复选框
      </Checkbox>
      <Checkbox checked={checked} onChange={setChecked} />
    </Space>
  )
}
