import { Button, Checkbox, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)
  return (
    <Space alignItems={'center'}>
      <Checkbox checked={checked} onChange={setChecked}>
        复选框
      </Checkbox>
      <Checkbox checked={checked} onChange={setChecked} />
      <Checkbox disabled={disabled} checked={checked} onChange={setChecked}>
        复选框
      </Checkbox>
      <Button size="small" onClick={() => setDisabled(!disabled)}>
        禁用
      </Button>
    </Space>
  )
}
