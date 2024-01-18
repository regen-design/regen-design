import { createRef, FC, MouseEvent, useRef, useState } from 'react'
import { StyledButton } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'
import { Wave } from '../wave'
import classNames from 'classnames'
export const Button: FC<ButtonProps> = props => {
  const { children, type = 'default', disabled, onClick, className = '' } = props
  const buttonRef = createRef<HTMLButtonElement>()
  const waveTimer = useRef<number>(0)
  const [waveActive, setWaveActive] = useState(false)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (waveTimer.current) {
      window.clearTimeout(waveTimer.current)
    }
    setWaveActive(true)
    waveTimer.current = window.setTimeout(() => {
      setWaveActive(false)
    }, 300)
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
      <Wave isActive={waveActive} />
      <span className={`${prefixClass}-content`}> {children}</span>
    </StyledButton>
  )
}
