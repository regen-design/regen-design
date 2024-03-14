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
      name: '[type](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: '`string`',
      defaultValue: 'default',
      description: '标签类型',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'tiny' | 'small' | 'default' | 'large'`",
      defaultValue: 'default',
      description: '标签尺寸',
    },
    {
      name: 'bordered',
      type: '`boolean`',
      defaultValue: 'ture',
      description: '是否显示边框',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
