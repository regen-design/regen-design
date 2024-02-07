import { QRCode, Space } from '@regen-design/components'
import { useState } from 'react'

export default function Demo() {
  const [value] = useState('https://regen-design.github.io/regen-design/')
  return (
    <Space>
      <QRCode value={value} iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'} />
      <QRCode
        value={value}
        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}
        iconSize={40}
      />
      <QRCode
        value={value}
        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}
        iconSize={40}
        errorCorrectionLevel={'H'}
      />
    </Space>
  )
}
