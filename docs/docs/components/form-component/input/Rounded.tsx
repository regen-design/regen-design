import { Input, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Input size={'tiny'} round placeholder={'小小'} />
      <Input size={'small'} round placeholder={'小'} />
      <Input size={'default'} round placeholder={'默认'} />
      <Input size={'large'} round placeholder={'大'} />
    </Space>
  )
}
