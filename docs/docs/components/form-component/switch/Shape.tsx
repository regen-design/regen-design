import { Switch, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [checked, setChecked] = useState(false)
  return (
    <Space alignItems={'center'}>
      <Switch
        rounded={false}
        checked={checked}
        onChange={e => {
          setChecked(e)
        }}
      />
      <Switch
        checked={checked}
        onChange={e => {
          setChecked(e)
        }}
      />
    </Space>
  )
}
