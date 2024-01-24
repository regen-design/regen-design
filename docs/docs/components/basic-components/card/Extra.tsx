import { Button, Card, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Card
        title="卡片"
        extra={
          <Space>
            <Button text type="primary">
              按钮1
            </Button>
            <Button text type="primary">
              按钮2
            </Button>
          </Space>
        }
      >
        基本内容
      </Card>
    </Space>
  )
}
