import { GradientText, Space } from '@regen-design/components'

export default function Demo() {
  return (
    <Space flexDirection={'column'}>
      <GradientText
        size={36}
        gradient={{
          from: 'rgb(85, 85, 85)',
          to: 'rgb(170, 170, 170)',
        }}
      >
        天青色等烟雨
      </GradientText>
      <GradientText
        size={36}
        gradient={{ deg: 180, from: 'rgb(37, 175, 243)', to: 'rgb(248, 215, 20)' }}
      >
        红雨瓢泼泛起了回忆怎么潜
      </GradientText>
      <GradientText size={36} gradient={'linear-gradient(90deg, red 0%, green 50%, blue 100%)'}>
        你就不要想起我
      </GradientText>
    </Space>
  )
}
