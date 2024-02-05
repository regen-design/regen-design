import { Avatar, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space alignItems={'flex-end'}>
      <Avatar rounded size="tiny" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar rounded size="small" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar rounded size="default" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
      <Avatar rounded size="large" src="https://avatars.githubusercontent.com/u/66107882?v=4" />
    </Space>
  )
}
