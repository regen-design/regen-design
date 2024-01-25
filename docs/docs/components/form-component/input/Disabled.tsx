import { Button, Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [disabled, setDisabled] = useState(true)
  return (
    <Space>
      <Input placeholder={'噢！它被禁用了。'} disabled={disabled} />
      <Input placeholder={'噢！它被禁用了。'} disabled={disabled} type="textarea" />
      <Button onClick={() => setDisabled(!disabled)}>切换禁用</Button>
    </Space>
  )
}
