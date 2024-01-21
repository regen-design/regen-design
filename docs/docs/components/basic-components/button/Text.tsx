import { Button, Space } from '@regen-design/components'
import { CommentAltIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <Space>
      <Button text icon={<CommentAltIcon />}>
        漂洋过海来看你~
      </Button>
      <Button text type="primary">
        primary
      </Button>
      <Button text type="info">
        info
      </Button>
      <Button text type="success">
        success
      </Button>
      <Button text type="danger">
        danger
      </Button>
      <Button text type="warning">
        warning
      </Button>
    </Space>
  )
}
