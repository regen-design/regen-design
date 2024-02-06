import { Space, Tag } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Tag type="success" size={'tiny'}>
        不该
      </Tag>
      <Tag type="warning" size={'small'}>
        超人不会飞
      </Tag>
      <Tag type="danger" size={'default'}>
        手写的从前
      </Tag>
      <Tag type="info" size={'large'}>
        哪里都是你
      </Tag>
    </Space>
  )
}
