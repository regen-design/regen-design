import { FC } from 'react'
import { StyledButton } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'

export const Button: FC<ButtonProps> = props => {
  const { children, type = 'default', disabled, onClick } = props
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
