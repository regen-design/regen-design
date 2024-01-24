import { Button, Card, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Card title="卡片" footer={<span>#footer</span>}>
        基本内容
      </Card>
    </Space>
  )
}
