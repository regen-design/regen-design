import { Tree } from '@regen-design/components'
import { useState } from 'react'
import { TreeOption } from '@regen-design/types'

export default function Demo() {
  const [data] = useState(createData())
  function createLabel(level: number): string {
    if (level === 4) return '道生一'
    if (level === 3) return '一生二'
    if (level === 2) return '二生三'
    if (level === 1) return '三生万物'
    return ''
  }
  function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
    if (!level) return undefined
    return Array.from({ length: 6 - level }, (_, i) => {
      const key = baseKey + i
      return {
        key,
        label: createLabel(level),
        children: createData(level - 1, `${key}-`),
      }
    })
  }
  return <Tree data={data} />
}
