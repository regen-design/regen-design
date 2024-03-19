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
      name: 'data',
      type: '[`Array<TreeBaseOption>`](#TreeBaseOption)',
      defaultValue: '[]',
      description: '树形数据',
    },
    {
      name: 'indent',
      type: '`number`',
      defaultValue: '24',
      description: '缩进距离',
    },
    {
      name: 'checkable',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否显示复选框',
    },
    {
      name: 'defaultExpandedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '默认展开的节点',
    },
    {
      name: 'expandedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '展开的节点',
    },
    {
      name: 'defaultSelectedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '默认选中的节点',
    },
    {
      name: 'selectedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '选中的节点',
    },
    {
      name: 'defaultCheckedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '默认选中的复选框',
    },
    {
      name: 'checkedKeys',
      type: '`Array<string>`',
      defaultValue: '[]',
      description: '选中的复选框',
    },
    {
      name: 'expandOnClickNode',
      type: '`boolean`',
      defaultValue: 'false',
      description: '点击节点时展开/收起节点',
    },
    {
      name: 'multiple',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否多选',
    },
    {
      name: 'cascade',
      type: '`boolean`',
      defaultValue: 'false',
      description: '是否级联选中',
    },
    {
      name: 'fieldNames',
      type: '`{ label: string; key: string; children: string }`',
      defaultValue: '{ label: "label", key: "key", children: "children" }',
      description: '自定义字段名',
    },
    {
      name: 'onSelect',
      type: '`(selectedKeys: string[], e: { selected: boolean; selectedNodes: any; node: any; event: Event }) => void`',
      defaultValue: 'undefined',
      description: '节点选中项发生变化时的回调函数',
    },
    {
      name: 'onCheck',
      type: '`(checkedKeys: string[], e: { checked: boolean; checkedNodes: any; node: any; event: Event }) => void`',
      defaultValue: 'undefined',
      description: '复选框选中项发生变化时的回调函数',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
