import { Avatar, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space alignItems={'flex-end'}>
      <Avatar size="tiny" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar size="small" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar size="default" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar size="large" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
    </Space>
  )
}
