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
      name: 'description',
      type: '`string`',
      defaultValue: 'No Data',
      description: '描述',
    },
    {
      name: 'icon',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '自定义图标',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
