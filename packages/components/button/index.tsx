import { cloneElement, createRef, FC, MouseEvent, ReactElement, useRef } from 'react'
import { StyledButton, StyledButtonPrefixClass as prefixClass } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'

import { Wave } from '../wave'
import classNames from 'classnames'
import { WaveRefProps } from '@regen-design/types/wave'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
export const Button: FC<ButtonProps> = ({
  children = null,
  type = 'default',
  disabled = false,
  dashed = false,
  text = false,
  onClick,
  className = '',
  size = 'default',
  icon = null,
}) => {
  const buttonRef = createRef<HTMLButtonElement>()
  const waveRef = useRef<WaveRefProps>(null)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    waveRef.current?.play()
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
        text={text}
        disabled={disabled}
        dashed={dashed}
        onClick={handleClick}
      >
        {icon && (
          <span
            className={`${prefixClass}__icon`}
            style={{ ...(!children ? { margin: '0' } : {}) }}
          >
            {cloneElement(icon as ReactElement)}
          </span>
        )}
        <span className={`${prefixClass}__content`}>{children || ''}</span>
        {!text && <Wave element="button" type={type} ref={waveRef} />}
      </StyledButton>
    </StyleSheetManager>
  )
}
