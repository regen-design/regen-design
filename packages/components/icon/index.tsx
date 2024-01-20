// @flow
import { FC } from 'react'
import { IconProps } from '@regen-design/types'
import { StyledIcon, StyledIconPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'

export const Icon: FC<IconProps> = ({ name, className, style, children }) => {
  const iconClass = classNames(prefixClass, className, prefixClass + '-' + name)

  return (
    <StyledIcon role="icon" className={iconClass} style={style}>
      <svg
        viewBox={'0 0 24 24'}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden
        data-icon={name}
        style={{
          width: '1em',
          height: '1em',
        }}
      >
        {children}
      </svg>
    </StyledIcon>
  )
}
