import { Input, Space } from '@regen-design/components'
import { useState } from 'react'
import { CloseFaceEyeIcon, MehEyeIcon } from '@regen-design/icons'

export default function Demo() {
  const [value, setValue] = useState('123456')
  return (
    <Space>
      <Input placeholder={'请输入'} type="password" value={value} onChange={setValue} />
      <Input
        placeholder={'请输入'}
        type="password"
        showPasswordOn={'mousedown'}
        value={value}
        onChange={setValue}
      />
      <Input
        placeholder={'请输入'}
        type="password"
        value={value}
        onChange={setValue}
        passwordVisibleIcon={<MehEyeIcon />}
        passwordInvisibleIcon={<CloseFaceEyeIcon />}
      />
      <Input
        placeholder={'请输入'}
        type="password"
        value={value}
        showPassword={false}
        onChange={setValue}
      />
    </Space>
  )
}
