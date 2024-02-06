import { GradientText, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space flexDirection={'column'}>
      <GradientText type={'info'}>天青色等烟雨</GradientText>
      <GradientText type={'danger'}>红雨瓢泼泛起了回忆怎么潜</GradientText>
      <GradientText type={'warning'}>你就不要想起我</GradientText>
      <GradientText type={'success'}>这只是你头上的绿色</GradientText>
    </Space>
  )
}
