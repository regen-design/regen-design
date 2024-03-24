import { FC } from 'react'
import { DynamicTagsProps } from '@regen-design/types'
import { StyledDynamicTags, StyledDynamicTagsPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const DynamicTags: FC<DynamicTagsProps> = ({ style = {}, className = '' }) => {
  const dynamicTagsClass = classNames(prefixClass, className)
  return (
    <StyledDynamicTags
      role="dynamicTags"
      className={dynamicTagsClass}
      style={style}
    ></StyledDynamicTags>
  )
}
