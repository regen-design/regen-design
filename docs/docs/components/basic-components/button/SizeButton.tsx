import { Button } from '@regen-design/components'
import { AddIcon } from '@regen-design/icons'

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </div>
  )
}
