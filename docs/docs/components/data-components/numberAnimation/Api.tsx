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
      name: 'from',
      type: '`number`',
      defaultValue: '0',
      description: '开始值',
    },
    {
      name: 'to',
      type: '`number`',
      defaultValue: '100',
      description: '结束值',
    },
    {
      name: 'duration',
      type: '`number`',
      defaultValue: '1000',
      description: '动画持续时间(ms)',
    },
    {
      name: 'precision',
      type: '`number`',
      defaultValue: '0',
      description: '精度',
    },
    {
      name: 'delay',
      type: '`number`',
      defaultValue: '0',
      description: '延迟时间(ms)',
    },
    {
      name: 'active',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否激活动画',
    },
    {
      name: 'onComplete',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '动画完成回调',
    },
    {
      name: 'onUpdate',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '动画更新回调',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
