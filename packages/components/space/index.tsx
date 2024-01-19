import { FC } from 'react'
import { SpaceProps } from '@regen-design/types'
import { StyledSpace, StyledSpacePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Space: FC<SpaceProps> = ({ style, className }) => {
  const spaceClass = classNames(prefixClass, className, prefixClass + '-space')
  return <StyledSpace role="space" className={spaceClass} style={style}></StyledSpace>
}
