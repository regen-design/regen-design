import { NAME_SPACE } from '@regen-design/constant'
import { GradientTextProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'
const prefix = `${NAME_SPACE}-gradientText`
export const StyledGradientTextPrefixClass = prefix
export const StyledGradientText = styled.div<GradientTextProps>`
  display: inline-block;
  font-weight: 500;
  -webkit-background-clip: text;
  background-clip: text;
  color: #0000;
  white-space: nowrap;
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    if (typeof props.size === 'number') {
      return `${props.size}px`
    }
    return _theme.fontSizes[props.size || 'default']
  }};
  background-image: ${props => {
    const _theme = convertTheme(props.theme)
    const start = rgba(_theme.colors[props.type] || _theme.colors.dark, 0.3)
    const end = _theme.colors[props.type] || _theme.colors.dark
    return `linear-gradient(252deg,${start} 0%, ${end} 100%)`
  }};
  transition: background-image 0.3s
    ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.transition['ease-in']
    }};
`
