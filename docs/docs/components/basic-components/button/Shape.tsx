import { Button, Space } from '@regen-design/components'
import { AddIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <Space>
      <Button circle>
        <AddIcon />
      </Button>
      <Button rounded>rounded</Button>
      <Button>square</Button>
    </Space>
  )
}
