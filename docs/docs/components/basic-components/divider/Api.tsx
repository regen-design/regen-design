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
      name: 'vertical',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否为竖直分割线',
    },
    {
      name: '[titlePlacement](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'left' | 'right' | 'center'`",
      defaultValue: 'undefined',
      description: '标题的位置',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
