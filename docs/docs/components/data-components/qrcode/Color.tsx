import { QRCode, Space } from '@regen-design/components'
import { useState } from 'react'
import { colors } from '@regen-design/theme'

export default function Demo() {
  const [value] = useState('https://regen-design.github.io/regen-design/')
  return (
    <Space>
      <QRCode value={value} color={colors.blue['500']} backgroundColor={colors.zinc['100']} />
      <QRCode value={value} color={colors.red['500']} backgroundColor={colors.zinc['100']} />
    </Space>
  )
}
