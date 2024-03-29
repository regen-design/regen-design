import { DynamicTags } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState([
    {
      label: '你好，世界',
      value: '你好，世界',
    },
  ])
  return <DynamicTags value={value} onChange={setValue} />
}
