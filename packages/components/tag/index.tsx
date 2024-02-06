import { FC } from 'react'
import { TagProps } from '@regen-design/types'
import { StyledTag, StyledTagPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Tag: FC<TagProps> = ({
  style = {},
  className = '',
  type = 'default',
  bordered = true,
  children,
  size = 'default',
}) => {
  const tagClass = classNames(prefixClass, className, {
    [`${prefixClass}--${type}`]: type,
    [`${prefixClass}--bordered`]: bordered,
    [`${prefixClass}--${size}`]: size,
  })
  return (
    <StyledTag
      role="tag"
      type={type}
      size={size}
      bordered={bordered}
      className={tagClass}
      style={style}
    >
      {children}
    </StyledTag>
  )
}
