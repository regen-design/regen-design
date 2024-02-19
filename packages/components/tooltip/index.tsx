import { FC } from 'react'
import { TooltipProps } from '@regen-design/types'
import { Popover } from '../popover'
export const Tooltip: FC<TooltipProps> = ({ children, content, trigger }) => {
  return (
    <Popover content={content} trigger={trigger}>
      {children}
    </Popover>
  )
}
