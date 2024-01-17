import { FC } from 'react'
import { Button } from '@regen-design/components'

export const BasicButton: FC = () => {
  // 是否展开代码
  return (
    <div>
      <Button>按钮</Button>&nbsp;
      <Button type="primary">primary</Button>&nbsp;
      <Button type="info">info</Button>&nbsp;
      <Button type="success">success</Button>&nbsp;
      <Button type="danger">danger</Button>&nbsp;
      <Button type="warning">warning</Button>&nbsp;
    </div>
  )
}
