import { Button, Descriptions } from '@regen-design/components'

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
      children: '杭州市',
    },
    {
      label: '备注',
      children: '学校',
    },
    {
      label: '联系地址',
      children: '浙江省杭州市西湖区西湖洞底',
    },
  ]
  return <Descriptions title={'用户信息'} extra={<Button>操作</Button>} bordered items={items} />
}
