import { Button } from '@regen-design/components'

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="default">default</Button>
      <Button size="large">large</Button>
    </div>
  )
}
