import { FC } from 'react'
import { SpaceProps } from '@regen-design/types'
import { StyledSpace, StyledSpacePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
export const Space: FC<SpaceProps> = ({
  style = {},
  className = '',
  children,
  xGap = 12,
  yGap = 8,
  alignItems = 'normal',
  justifyContent = 'normal',
  flexDirection = 'row',
  flexWrap,
}) => {
  const spaceClass = classNames(prefixClass, className)
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledSpace
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        xGap={xGap}
        yGap={yGap}
        role="space"
        className={spaceClass}
        style={style}
      >
        {children}
      </StyledSpace>
    </StyleSheetManager>
  )
}
