import { createRef, FC, MouseEvent, useRef } from 'react'
import { StyledButton, StyledButtonPrefixClass as prefixClass } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'

import { Wave } from '../wave'
import classNames from 'classnames'
import { WaveRefProps } from '@regen-design/types/wave'
export const Button: FC<ButtonProps> = props => {
  const { children, type = 'default', disabled, onClick, className = '' } = props
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
    <StyledButton
      className={`${buttonClass}`}
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className={`${prefixClass}-content`}>{children || ''}</span>
      <Wave waveElementType="button" type={type} ref={waveRef} />
    </StyledButton>
  )
}
