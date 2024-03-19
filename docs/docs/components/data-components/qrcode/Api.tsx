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
      name: 'value',
      type: '`string`',
      defaultValue: "''",
      description: '描述',
    },
    {
      name: 'size',
      type: '`number`',
      defaultValue: '100',
      description: '二维码大小',
    },
    {
      name: 'scale',
      type: '`number`',
      defaultValue: '4',
      description: '二维码比例',
    },
    {
      name: 'margin',
      type: '`number`',
      defaultValue: '0',
      description: '二维码边距',
    },
    {
      name: 'color',
      type: '`string`',
      defaultValue: '#000',
      description: '二维码颜色',
    },
    {
      name: 'backgroundColor',
      type: '`string`',
      defaultValue: '#fff',
      description: '二维码背景颜色',
    },
    {
      name: 'errorCorrectionLevel',
      type: '`QRCodeErrorCorrectionLevel`',
      defaultValue: 'M',
      description: '二维码容错率',
    },
    {
      name: 'iconSrc',
      type: '`string`',
      defaultValue: 'undefined',
      description: '图标地址',
    },
    {
      name: 'iconSize',
      type: '`number`',
      defaultValue: '40',
      description: '图标大小',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
