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
      name: 'key',
      type: '`string`',
      defaultValue: 'undefined',
      description: '唯一标识',
    },
    {
      name: 'label',
      type: '`string`',
      defaultValue: 'undefined',
      description: '显示的文本',
    },
    {
      name: 'children',
      type: '[`Array<TreeBaseOption>`](#TreeBaseOption)',
      defaultValue: 'undefined',
      description: '子节点',
    },
    {
      name: 'disabled',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否禁用',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
