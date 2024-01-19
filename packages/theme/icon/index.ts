import { NAME_SPACE } from '@regen-design/constant'
import styled from 'styled-components'

const prefix = `${NAME_SPACE}-icon`

export const StyledIconPrefixClass = prefix

export const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`
