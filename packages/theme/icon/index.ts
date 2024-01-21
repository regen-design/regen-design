import { NAME_SPACE } from '@regen-design/constant'
import styled from 'styled-components'
import { IconProps } from '@regen-design/types'
import { convertTheme } from '../tools'

const prefix = `${NAME_SPACE}-icon`

export const StyledIconPrefixClass = prefix

export const StyledIcon = styled.i<IconProps>`
  display: inline-block;
  color: inherit;
  width: 1em;
  height: 1em;
  line-height: 0;
  vertical-align: -0.125em;
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
