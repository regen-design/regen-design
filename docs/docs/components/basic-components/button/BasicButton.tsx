import { Button, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="info">info</Button>
      <Button type="success">success</Button>
      <Button type="danger">danger</Button>
      <Button type="warning">warning</Button>
    </Space>
  )
}
