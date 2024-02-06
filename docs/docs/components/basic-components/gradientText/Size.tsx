import { GradientText, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <>
      <Space flexDirection={'column'}>
        <GradientText type={'info'} size={'tiny'}>
          天青色等烟雨
        </GradientText>
        <GradientText type={'danger'} size={'small'}>
          红雨瓢泼泛起了回忆怎么潜
        </GradientText>
        <GradientText type={'warning'} size={'default'}>
          你就不要想起我
        </GradientText>
        <GradientText type={'success'} size={'large'}>
          这只是你头上的绿色
        </GradientText>
        <GradientText type={'danger'} size={36}>
          Live Forever
        </GradientText>
      </Space>
    </>
  )
}
