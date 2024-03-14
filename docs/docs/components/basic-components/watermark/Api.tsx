import { Table } from '@regen-design/components'
export default function Demo() {
  const columns = [
    { title: '名称', dataIndex: 'name' },
    { title: '类型', dataIndex: 'type' },
    { title: '默认值', dataIndex: 'defaultValue' },
    { title: '描述', dataIndex: 'description' },
  ]
  const dataSource = [
    {
      name: 'content',
      type: '`string`',
      defaultValue: '',
      description: '水印内容',
    },
    {
      name: 'fontSize',
      type: '`number`',
      defaultValue: '16',
      description: '水印字体大小',
    },
    {
      name: 'color',
      type: '`string`',
      defaultValue: 'rgba(0, 0, 0, 0.1)',
      description: '水印字体颜色',
    },
    {
      name: 'angle',
      type: '`number`',
      defaultValue: '-20',
      description: '水印倾斜角度',
    },
    {
      name: 'width',
      type: '`number`',
      defaultValue: '320',
      description: '水印宽度',
    },
    {
      name: 'height',
      type: '`number`',
      defaultValue: '160',
      description: '水印高度',
    },
    {
      name: 'zIndex',
      type: '`number`',
      defaultValue: '10',
      description: '水印层级',
    },
    {
      name: 'fullscreen',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否全屏显示水印',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
