import { Select, Space } from '@regen-design/components'
import { TrashIcon } from '@regen-design/icons'

export default function Demo() {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ]
  return (
    <Space alignItems={'center'}>
      <Select options={options} clearable />
      <Select options={options} clearable clearIcon={<TrashIcon />} />
    </Space>
  )
}
