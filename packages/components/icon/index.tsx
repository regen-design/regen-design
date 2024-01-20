// @flow
import { FC, useMemo } from 'react'
import { IconProps } from '@regen-design/types'
import { StyledIcon, StyledIconPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { defaultTheme } from '@regen-design/theme'

export const Icon: FC<IconProps> = ({ name, className, style, children, size = 'default' }) => {
  const iconClass = classNames(prefixClass, className, prefixClass + '-' + name)
  const [width, height] = useMemo(() => {
    const width = defaultTheme.fontSizes?.[size] || defaultTheme.fontSizes.default
    const height = defaultTheme.fontSizes?.[size] || defaultTheme.fontSizes.default
    return [width, height]
  }, [size])

  return (
    <StyledIcon role="icon" className={iconClass} style={style}>
      <svg
        viewBox={'0 0 24 24'}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden
        data-icon={name}
        width={width}
        height={height}
      >
        {children}
      </svg>
    </StyledIcon>
  )
}
