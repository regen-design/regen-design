import { Input, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Input size={'tiny'} placeholder={'小小'} />
      <Input size={'small'} placeholder={'小'} />
      <Input size={'default'} placeholder={'默认'} />
      <Input size={'large'} placeholder={'大'} />
    </Space>
  )
}
