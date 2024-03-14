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
      name: 'type',
      type: "`'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'`",
      defaultValue: 'default',
      description: '渐变文字的类型',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'tiny' | 'small' | 'default' | 'large' | 'number'`",
      defaultValue: 'undefined',
      description: '文字大小（当不指定单位时，默认单位: px）',
    },
    {
      name: 'gradient',
      type: '`string | { from: string; to: string; deg?: number | string }`',
      defaultValue: 'undefined',
      description: '文字渐变色参数',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
