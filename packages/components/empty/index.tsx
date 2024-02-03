import { FC } from 'react'
import { EmptyProps } from '@regen-design/types'
import { StyledEmpty, StyledEmptyPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { EmptyIcon } from '@regen-design/icons'
export const Empty: FC<EmptyProps> = ({
  style = {},
  className = '',
  icon,
  description = '无数据',
}) => {
  const emptyClass = classNames(prefixClass, className)
  return (
    <StyledEmpty role="empty" className={emptyClass} style={style}>
      <div className={`${prefixClass}-icon`}>{icon || <EmptyIcon />}</div>
      <div className={`${prefixClass}-description`}>{description}</div>
    </StyledEmpty>
  )
}
