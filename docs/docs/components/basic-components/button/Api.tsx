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
      defaultValue: 'default',
      description: '按钮类型',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'tiny' | 'small' | 'default' | 'large'`",
      defaultValue: 'default',
      description: '按钮大小',
    },
    {
      name: 'disabled',
      type: '`boolean`',
      defaultValue: 'false',
      description: '按钮是否禁用',
    },
    {
      name: 'color',
      type: '`undefined`',
      defaultValue: 'false',
      description: '按钮是否禁用',
    },
    {
      name: 'dashed',
      type: '`boolean`',
      defaultValue: 'false',
      description: '虚线按钮',
    },
    {
      name: 'block',
      type: '`boolean`',
      defaultValue: 'false',
      description: '将按钮宽度调整为占整块',
    },
    {
      name: 'text',
      type: `boolean`,
      defaultValue: 'false',
      description: '文字按钮',
    },
    {
      name: 'loading',
      type: '`boolean`',
      defaultValue: 'false',
      description: '加载中状态',
    },
    {
      name: 'circle',
      type: '`boolean`',
      defaultValue: 'false',
      description: '圆形按钮',
    },
    {
      name: 'rounded',
      type: '`boolean`',
      defaultValue: 'false',
      description: '圆角按钮',
    },
    {
      name: 'icon',
      type: '`string`',
      defaultValue: 'false',
      description: '图标按钮',
    },
    {
      name: 'htmlType',
      type: "`'button' | 'submit' | 'reset'`",
      defaultValue: 'button',
      description: '原生 button 标签的 type 属性',
    },
    {
      name: 'onClick',
      type: '`(event: React.MouseEvent) => void`',
      defaultValue: 'null',
      description: '点击按钮时的回调',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
