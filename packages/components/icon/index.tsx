// @flow
import { FC } from 'react'
import { Color, IconProps } from '@regen-design/types'
import { StyledIcon, StyledIconPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

export const Icon: FC<IconProps> = ({
  name,
  style = {},
  className = '',
  children,
  svgViewBox,
  color = 'currentColor',
}) => {
  const iconClass = classNames(prefixClass, className, prefixClass + '-' + name)
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledIcon role="icon" className={iconClass} color={color as Color} style={style}>
        {name && (
          <svg
            viewBox={svgViewBox}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            data-icon={name}
            style={{
              width: '1em',
              height: '1em',
            }}
          >
            {children}
          </svg>
        )}
      </StyledIcon>
    </StyleSheetManager>
  )
}
