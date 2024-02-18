import { Button, Popover, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Popover content={'Hover'}>
        <Button>Hover</Button>
      </Popover>
      <Popover trigger="click" content={'Click'}>
        <Button>Click</Button>
      </Popover>
    </Space>
  )
}
