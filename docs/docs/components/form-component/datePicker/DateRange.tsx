import { DatePicker } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState<[number, number]>([
    Date.now() - 1000 * 60 * 60 * 24 * 0,
    Date.now() + 1000 * 60 * 60 * 24 * 1,
  ])
  return (
    <>
      <DatePicker
        value={value}
        type={'date-range'}
        onChange={e => {
          console.log(e)
          setValue(e)
        }}
      />
      <span>{value}</span>
    </>
  )
}
