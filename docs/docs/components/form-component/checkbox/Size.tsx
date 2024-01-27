import { Checkbox, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space alignItems={'center'}>
      <Checkbox size="tiny">小小</Checkbox>
      <Checkbox size="small">小</Checkbox>
      <Checkbox size="default">默认</Checkbox>
      <Checkbox size="large">大</Checkbox>
    </Space>
  )
}
