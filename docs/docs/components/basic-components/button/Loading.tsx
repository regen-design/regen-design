import { Button, Space } from '@regen-design/components'
import { AddIcon } from '@regen-design/icons'
import { useState } from 'react'

export default function Demo() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <Space>
      <Button loading>Loading...</Button>
      <Button loading={loading} icon={<AddIcon />} onClick={handleClick}>
        Click Me
      </Button>
      <Button loading={loading} onClick={handleClick}>
        Click Me
      </Button>
    </Space>
  )
}
