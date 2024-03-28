import { DynamicTags } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState([
    {
      label: '桃李春风一杯酒',
      value: '桃李春风一杯酒',
    },
  ])
  return <DynamicTags value={value} onChange={setValue} max={3} />
}
