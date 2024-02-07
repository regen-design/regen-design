import { Button, NumberAnimation, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [active, setActive] = useState(false)
  return (
    <Space flexDirection={'column'}>
      <NumberAnimation
        active={active}
        from={0}
        to={Math.floor(Math.random() * 100)}
        duration={1000}
        precision={2}
        style={{
          fontSize: 36,
        }}
        onComplete={() => {
          setActive(false)
        }}
      />
      <Button
        onClick={() => {
          setActive(true)
        }}
      >
        播放
      </Button>
    </Space>
  )
}
