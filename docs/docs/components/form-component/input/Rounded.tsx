import { Input, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Input size={'tiny'} rounded placeholder={'小小'} />
      <Input size={'small'} rounded placeholder={'小'} />
      <Input size={'default'} rounded placeholder={'默认'} />
      <Input size={'large'} rounded placeholder={'大'} />
    </Space>
  )
}
