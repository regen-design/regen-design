import { createRef, FC, MouseEvent, useRef } from 'react'
import { StyledButton } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'
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
  const prefixClass = `${NAME_SPACE}-button`
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
      <Wave waveElementType="button" type={type} ref={waveRef} />
      <span className={`${prefixClass}-content`}>{children}</span>
    </StyledButton>
  )
}
