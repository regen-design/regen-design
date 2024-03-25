import { Space, Tag } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Tag closeable>爱在西元前</Tag>
      <Tag closeable type="success">
        不该
      </Tag>
      <Tag closeable type="warning">
        超人不会飞
      </Tag>
      <Tag closeable type="danger">
        手写的从前
      </Tag>
      <Tag closeable type="info">
        哪里都是你
      </Tag>
    </Space>
  )
}
