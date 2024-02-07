import { Button, NumberAnimation, Space } from '@regen-design/components'
import { useRef, useState } from 'react'
import { NumberAnimationInstance } from '@regen-design/types'

export default function Demo() {
  const numberRef = useRef<NumberAnimationInstance>(null)
  return (
    <Space flexDirection={'column'}>
      <span>你一共处理了</span>
      <NumberAnimation
        ref={numberRef}
        from={0}
        active
        to={Math.floor(Math.random() * 10000)}
        duration={1000}
        style={{
          fontSize: 36,
        }}
      />
      <span>花时间、花精力、花心思，愿你每一份努力都不负所望</span>
      <Button
        onClick={() => {
          numberRef.current?.play()
        }}
      >
        播放
      </Button>
    </Space>
  )
}
