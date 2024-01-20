import { cloneElement, createRef, FC, MouseEvent, ReactElement, useRef } from 'react'
import { StyledButton, StyledButtonPrefixClass as prefixClass } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'

import { Wave } from '../wave'
import classNames from 'classnames'
import { WaveRefProps } from '@regen-design/types/wave'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
export const Button: FC<ButtonProps> = ({
  children,
  type = 'default',
  disabled,
  dashed,
  onClick,
  className = '',
  size = 'default',
  icon = null,
}) => {
  const buttonRef = createRef<HTMLButtonElement>()
  const waveRef = useRef<WaveRefProps>(null)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    waveRef.current.play()
    onClick && onClick(e)
  }

  const buttonClass = classNames(className, prefixClass, {
    disabled: true,
  })
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledButton
        className={`${buttonClass}`}
        ref={buttonRef}
        type={type}
        size={size}
        disabled={disabled}
        dashed={dashed}
        onClick={handleClick}
      >
        {icon && cloneElement(icon as ReactElement, { size: size })}
        <span className={`${prefixClass}-content`}>{children || ''}</span>
        <Wave element="button" type={type} ref={waveRef} />
      </StyledButton>
    </StyleSheetManager>
  )
}
