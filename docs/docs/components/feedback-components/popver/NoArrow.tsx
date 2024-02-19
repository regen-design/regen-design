import { Button, Popover, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Popover content={'rua~~~'} arrow={false}>
        <Button>悬浮</Button>
      </Popover>
    </Space>
  )
}
