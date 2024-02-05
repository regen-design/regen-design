import { DatePicker } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState('')
  return (
    <>
      <DatePicker value={value} valueFormat={'YYYY-MM-DD'} onChange={setValue} />
      <span>{value}</span>
    </>
  )
}
