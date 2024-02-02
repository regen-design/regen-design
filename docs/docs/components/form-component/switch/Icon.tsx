import { Switch, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space alignItems={'center'}>
      <Switch icon={<span>🌚</span>} />
      <Switch checkedIcon={<span>😁</span>} size={'large'} unCheckedIcon={<span>😭</span>} />
    </Space>
  )
}
