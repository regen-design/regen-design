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
      name: 'title',
      type: '`ReactNode`',
      defaultValue: 'undefined',
      description: '列头显示文字',
    },
    {
      name: 'dataIndex',
      type: '`string`',
      defaultValue: 'undefined',
      description: '列数据在数据项中对应的 key',
    },
    {
      name: 'key',
      type: '`string`',
      defaultValue: 'undefined',
      description: 'React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性',
    },
    {
      name: 'width',
      type: "`CSSProperties['width']`",
      defaultValue: 'undefined',
      description: '列宽度',
    },
    {
      name: 'render',
      type: '`(text, record, index) => ReactNode`',
      defaultValue: 'undefined',
      description: '生成复杂数据的渲染函数',
    },
    {
      name: 'fixed',
      type: '`"left" | "right"`',
      defaultValue: 'undefined',
      description: '列是否固定，可选 `left` `right`',
    },
    {
      name: 'align',
      type: '`"left" | "right" | "center"`',
      defaultValue: 'left',
      description: '设置列内容的对齐方式',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
