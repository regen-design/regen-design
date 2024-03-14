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
      type: "`'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'`",
      defaultValue: '',
      description: '卡片的标题',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'tiny' | 'small' | 'default' | 'large'`",
      defaultValue: 'undefined',
      description: '卡片的尺寸',
    },
    {
      name: 'extra',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '头部额外内容',
    },
    {
      name: 'footer',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '底部内容',
    },
    {
      name: 'footerClassName',
      type: '`string`',
      defaultValue: '',
      description: '底部样式类名',
    },
    {
      name: 'footerStyle',
      type: '`React.CSSProperties`',
      defaultValue: '{}',
      description: '底部样式',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
