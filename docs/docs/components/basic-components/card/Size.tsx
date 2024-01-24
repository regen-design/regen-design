import { Card, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Card title="小小卡片" size="tiny">
        基本内容
      </Card>
      <Card title="小卡片" size="small">
        基本内容
      </Card>
      <Card title="卡片" size="default">
        基本内容
      </Card>
      <Card title="大卡片" size="large">
        基本内容
      </Card>
    </Space>
  )
}
