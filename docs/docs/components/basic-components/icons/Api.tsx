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
      name: 'name',
      type: '`string`',
      defaultValue: 'default',
      description: '图标名称',
    },
    {
      name: 'svgViewBox',
      type: '`string`',
      defaultValue: 'undefined',
      description: 'svg的viewBox属性',
    },
    {
      name: 'color',
      type: "`'primary' | 'danger' | 'success' | 'warning'| 'info' | 'dark' | 'light' | 'placeholder' | 'white' | 'black' | 'zinc'`",
      defaultValue: 'currentColor',
      description: '图标颜色',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
