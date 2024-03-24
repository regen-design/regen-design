import { NAME_SPACE } from '@regen-design/constant'
import { FormProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-form`
export const StyledFormPrefixClass = prefix
export const StyledForm = styled.form<FormProps & ThemeProps>`
  &.${prefix}-inline {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    .${prefix}-item {
      width: auto;
      margin-right: 8px;
    }
  }
`

export * from './formItem'
