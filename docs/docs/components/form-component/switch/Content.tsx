import { Switch, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space alignItems={'center'}>
      <Switch
        checkedChildren={'自然赠予你，树冠 微风 肩头的暴雨'}
        unCheckedChildren={'片刻后生成，平衡 忠诚 不息的身体'}
      />
      <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
    </Space>
  )
}
