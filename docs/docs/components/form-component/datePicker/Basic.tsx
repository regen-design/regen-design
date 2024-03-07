import { DatePicker } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState(Date.now())
  return (
    <>
      <DatePicker
        value={value}
        onChange={e => {
          setValue(e)
        }}
      />
      <span>{value}</span>
    </>
  )
}
