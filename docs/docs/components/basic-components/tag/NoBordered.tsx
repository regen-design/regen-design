import { Space, Tag } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Tag bordered={false}>爱在西元前</Tag>
      <Tag bordered={false} type="success">
        不该
      </Tag>
      <Tag bordered={false} type="warning">
        超人不会飞
      </Tag>
      <Tag bordered={false} type="danger">
        手写的从前
      </Tag>
      <Tag bordered={false} type="info">
        哪里都是你
      </Tag>
    </Space>
  )
}
