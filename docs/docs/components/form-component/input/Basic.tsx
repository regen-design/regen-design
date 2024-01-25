import { Input, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Input placeholder={'基本的Input'} />
      <Input placeholder={'基本的Textarea'} type="textarea" />
    </Space>
  )
}
