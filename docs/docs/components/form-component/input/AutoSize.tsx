import { Input, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value1, setValue1] = useState('123456')
  const [value2, setValue2] = useState('1234567890123456789')
  return (
    <Space flexDirection={'column'}>
      <div
        style={{
          maxWidth: '100%',
        }}
      >
        <Input autosize placeholder={'自动调整尺寸'} value={value1} onChange={setValue1} />
      </div>
      <div
        style={{
          maxWidth: '100%',
        }}
      >
        <Input
          type={'textarea'}
          autosize={{ minRows: 2, maxRows: 4 }}
          placeholder={'自动调整尺寸'}
          value={value2}
          onChange={setValue2}
        />
      </div>
      <div
        style={{
          maxWidth: '100%',
        }}
      >
        <Input
          type={'textarea'}
          autosize={{ minRows: 3 }}
          placeholder={'自动调整尺寸'}
          value={value2}
          onChange={setValue2}
        />
      </div>
    </Space>
  )
}
