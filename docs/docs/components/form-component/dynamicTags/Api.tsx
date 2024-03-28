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
      name: 'value',
      type: 'Array<{ label: string; value: string }>',
      defaultValue: '[]',
      description: '标签数据',
    },
    {
      name: 'onChange',
      type: '(value: Array<{ label: string; value: string }>) => void',
      defaultValue: 'undefined',
      description: '标签数据变化时的回调',
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 'undefined',
      description: '最大标签数量',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
