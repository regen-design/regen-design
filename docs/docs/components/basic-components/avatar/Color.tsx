import { Avatar, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space flexDirection={'column'}>
      <Space alignItems={'flex-end'} flexWrap={'wrap'}>
        <Avatar backgroundColor={'primary'}>primary</Avatar>
        <Avatar backgroundColor={'danger'}>danger</Avatar>
        <Avatar backgroundColor={'success'}>success</Avatar>
        <Avatar backgroundColor={'warning'}>warning</Avatar>
        <Avatar backgroundColor={'info'}>info</Avatar>
        <Avatar backgroundColor={'dark'}>dark</Avatar>
        <Avatar backgroundColor={'light'} borderColor={'dark'} color={'dark'}>
          light
        </Avatar>
        <Avatar backgroundColor={'placeholder'}>placeholder</Avatar>
        <Avatar backgroundColor={'white'} borderColor={'dark'} color={'dark'}>
          white
        </Avatar>
        <Avatar backgroundColor={'black'}>black</Avatar>
      </Space>
      <Space>
        <Avatar
          style={{
            color: 'white',
            backgroundColor: 'pink',
          }}
        >
          Custom
        </Avatar>
      </Space>
    </Space>
  )
}
