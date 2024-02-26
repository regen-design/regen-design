import { DatePicker } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState<[number, number]>([
    Date.now(),
    Date.now() + 1000 * 60 * 60 * 24 * 30,
  ])
  return (
    <>
      <DatePicker value={value} type={'date-range'} onChange={setValue} />
      <span>{value}</span>
    </>
  )
}
