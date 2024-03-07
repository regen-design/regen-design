import { DatePicker } from '@regen-design/components'
import { useState } from 'react'
export default function Demo() {
  const [value, setValue] = useState([Date.now(), Date.now() + 1000 * 60 * 60 * 24 * 30])
  return (
    <>
      <DatePicker
        value={value}
        type={'date-range'}
        onChange={e => {
          setValue(e)
        }}
      />
      {value?.map((item, index) => <div key={index}>{item}</div>)}
    </>
  )
}
