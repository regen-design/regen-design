import { Switch, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(false)
  return (
    <Space alignItems={'center'}>
      <Switch></Switch>
    </Space>
  )
}
