import { Button, Radio, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(true)
  return (
    <Space alignItems={'center'}>
      <Radio checked={checked} disabled={disabled} onChange={setChecked}>
        不可以哦~
      </Radio>
      <Button onClick={() => setDisabled(!disabled)}>禁止</Button>
    </Space>
  )
}
