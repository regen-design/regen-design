import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { AvatarProps } from '@regen-design/types'
import { StyledAvatar, StyledAvatarPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
export const Avatar: FC<AvatarProps> = ({
  style = {},
  className = '',
  rounded = false,
  src,
  size,
  children,
  name,
  color = 'white',
  backgroundColor = 'placeholder',
  borderColor,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const avatarClass = classNames(prefixClass, className)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    if (children && wrapperRef.current) {
      const { offsetWidth } = wrapperRef.current
      const text = children.toString()
      const length = text.length
      const width = 10 * length
      if (width > offsetWidth) {
        setScale(offsetWidth / width)
      } else {
        setScale(1)
      }
    }
  }, [children])
  const nameString = useMemo(() => {
    if (!name) return ''
    if (name.length === 1) return name
    return name.substring(1)
  }, [name])
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledAvatar
        ref={wrapperRef}
        size={size}
        rounded={rounded}
        role="avatar"
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        className={avatarClass}
        style={style}
      >
        {src && <img src={src} loading={'eager'} alt="avatar" />}
        <span
          className={`${prefixClass}__text`}
          style={{
            transform: ` translateX(-50%) translateY(-50%) scale(${scale})`,
          }}
        >
          {nameString || children}
        </span>
      </StyledAvatar>
    </StyleSheetManager>
  )
}
