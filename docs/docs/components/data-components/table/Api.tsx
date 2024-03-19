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
      name: 'dataSource',
      type: '`Array`',
      defaultValue: '[]',
      description: '数据源',
    },
    {
      name: 'columns',
      type: '[`TableColumnItem[]`](#TableColumnItem)',
      defaultValue: '[]',
      description: '列配置',
    },
    {
      name: 'markdown',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否使用markdown渲染数据',
    },
    {
      name: 'rowKey',
      type: '`string`',
      defaultValue: 'key',
      description: '行数据的唯一键',
    },
    {
      name: 'bordered',
      type: '`boolean`',
      defaultValue: 'true',
      description: '是否展示外边框和列边框',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
