import { Button, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space>
      <Button dashed>default</Button>
      <Button dashed type="primary">
        primary
      </Button>
      <Button dashed type="info">
        info
      </Button>
      <Button dashed type="success">
        success
      </Button>
      <Button dashed type="danger">
        danger
      </Button>
      <Button dashed type="warning">
        warning
      </Button>
    </Space>
  )
}
