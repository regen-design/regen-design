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
      name: 'column',
      type: '`number`',
      defaultValue: '3',
      description: '列数',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: '`Size`',
      defaultValue: 'default',
      description: '尺寸',
    },
    {
      name: 'title',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '标题',
    },
    {
      name: 'extra',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '额外内容',
    },
    {
      name: '[items](https://github.com/regen-design/regen-design/blob/master/packages/types/descriptions/index.d.ts)',
      type: '`DescriptionsItemProps[]`',
      defaultValue: '[]',
      description: '描述项',
    },
    {
      name: 'bordered',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否展示边框',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
