import { Checkbox, CheckboxGroup, Divider, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const options = [
    { label: '复选框1', value: '1' },
    { label: '复选框2', value: '2' },
    { label: '复选框3', value: '3' },
  ]
  const [checkedList, setCheckedList] = useState<string[]>([])
  const indeterminate = checkedList.length > 0 && checkedList.length < options.length
  const checkedAll = options.length === checkedList.length
  return (
    <Space alignItems={'center'}>
      <Checkbox
        indeterminate={indeterminate}
        checked={checkedAll}
        onChange={checked => {
          setCheckedList(checked ? options.map(item => item.value) : [])
        }}
      >
        复选框
      </Checkbox>
      <Divider />
      <CheckboxGroup value={checkedList} onChange={setCheckedList} options={options} />
    </Space>
  )
}
