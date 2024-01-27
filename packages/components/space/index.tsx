import { FC } from 'react'
import { SpaceProps } from '@regen-design/types'
import { StyledSpace, StyledSpacePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Space: FC<SpaceProps> = ({
  style = {},
  className = '',
  children,
  xGap = 12,
  yGap = 8,
  alignItems = 'normal',
  justifyContent = 'normal',
}) => {
  const spaceClass = classNames(prefixClass, className)
  return (
    <StyledSpace
      alignItems={alignItems}
      justifyContent={justifyContent}
      xGap={xGap}
      yGap={yGap}
      role="space"
      className={spaceClass}
      style={style}
    >
      {children}
    </StyledSpace>
  )
}
