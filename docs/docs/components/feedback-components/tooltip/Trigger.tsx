import { Button, Space, Tooltip } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Tooltip content={'Hover'}>
        <Button>Hover</Button>
      </Tooltip>
      <Tooltip trigger="click" content={'Click'}>
        <Button>Click</Button>
      </Tooltip>
    </Space>
  )
}
