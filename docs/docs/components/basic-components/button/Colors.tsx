import { Button, Space } from '@regen-design/components'
import { AddIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <Space>
      <Button icon={<AddIcon />} color={'#8a2be2'}>
        #8a2be2
      </Button>
      <Button color={'#ff69b4'}>#ff69b4</Button>
      <Button icon={<AddIcon />} color={'#8a2be2'} text>
        #8a2be2
      </Button>
      <Button color={'#ff69b4'} text>
        #ff69b4
      </Button>
    </Space>
  )
}
