import { Button, Checkbox, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(true)
  return (
    <Space alignItems={'center'}>
      <Checkbox checked={checked} disabled={disabled} onChange={setChecked}>
        不可以哦~
      </Checkbox>
      <Button onClick={() => setDisabled(!disabled)}>禁止</Button>
    </Space>
  )
}
