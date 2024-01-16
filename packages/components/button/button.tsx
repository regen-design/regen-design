import { FC } from 'react'
import { StyledButton } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'

export const Button: FC<ButtonProps> = props => {
  const { children, type = 'default', disabled } = props
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
