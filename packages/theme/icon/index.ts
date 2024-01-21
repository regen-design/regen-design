import { NAME_SPACE } from '@regen-design/constant'
import styled from 'styled-components'
import { IconProps } from '@regen-design/types'
import { convertTheme } from '../tools'

const prefix = `${NAME_SPACE}-icon`

export const StyledIconPrefixClass = prefix

export const StyledIcon = styled.i<IconProps>`
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  > svg {
    fill: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors?.[props?.color] || 'currentColor'
    }};
  }
`
