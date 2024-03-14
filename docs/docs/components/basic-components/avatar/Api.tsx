import { Table } from '@regen-design/components'
import { defaultTheme } from '@regen-design/theme'
export default function Demo() {
  const columns = [
    { title: '名称', dataIndex: 'name' },
    { title: '类型', dataIndex: 'type' },
    { title: '默认值', dataIndex: 'defaultValue' },
    { title: '描述', dataIndex: 'description' },
  ]
  const dataSource = [
    {
      name: 'src',
      type: '`string`',
      defaultValue: 'undefined',
      description: '头像的地址',
    },
    {
      name: '[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)',
      type: "`'tiny' | 'small' | 'default' | 'large'`",
      defaultValue: 'default',
      description: '头像的尺寸',
    },
    {
      name: 'rounded',
      type: '`boolean`',
      defaultValue: 'false',
      description: '头像是否圆形',
    },
    {
      name: 'name',
      type: '`string`',
      defaultValue: 'undefined',
      description: '会根据提供的名字自动显示名称',
    },
    {
      name: '[color](https://github.com/regen-design/regen-design/blob/master/packages/types/theme/index.d.ts)',
      type: "`'primary' | 'danger' | 'success' | 'warning'| 'info' | 'dark' | 'light' | 'placeholder' | 'white' | 'black' | 'zinc'`",
      defaultValue: 'white',
      description: '头像的文字颜色',
    },
    {
      name: '[backgroundColor](https://github.com/regen-design/regen-design/blob/master/packages/types/theme/index.d.ts)',
      type: "`'primary' | 'danger' | 'success' | 'warning'| 'info' | 'dark' | 'light' | 'placeholder' | 'white' | 'black' | 'zinc'`",
      defaultValue: defaultTheme.colors.placeholder,
      description: '头像的背景颜色',
    },
    {
      name: '[borderColor](https://github.com/regen-design/regen-design/blob/master/packages/types/theme/index.d.ts)',
      type: "`'primary' | 'danger' | 'success' | 'warning'| 'info' | 'dark' | 'light' | 'placeholder' | 'white' | 'black' | 'zinc'`",
      defaultValue: 'transparent',
      description: '头像的边框颜色',
    },
  ]
  return <Table columns={columns} markdown dataSource={dataSource} />
}
