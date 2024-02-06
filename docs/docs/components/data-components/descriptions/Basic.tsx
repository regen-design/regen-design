import { Descriptions } from '@regen-design/components'

export default function Demo() {
  const items = [
    {
      label: '用户名',
      children: '张三',
    },
    {
      label: '手机号',
      children: '18100000000',
    },
    {
      label: '居住地',
      children: '苏州市',
    },
    {
      label: '备注',
      children: '学校',
    },
    {
      label: '联系地址',
      children: '江苏省苏州市吴中区吴中大道 1188 号',
    },
  ]
  return <Descriptions title={'用户信息'} items={items} />
}
