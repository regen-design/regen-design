import { Button } from '@regen-design/components'
import { AddIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button>按钮</Button>
      <Button type="primary">primary</Button>
      <Button type="info">info</Button>
      <Button type="success">success</Button>
      <Button type="danger">danger</Button>
      <Button type="warning">warning</Button>
      <Button type="primary"></Button>
      <Button type="primary">
        <AddIcon />
      </Button>
    </div>
  )
}
