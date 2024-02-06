import { NAME_SPACE } from '@regen-design/constant'
import { TagProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { lighten, rgba } from 'polished'
const prefix = `${NAME_SPACE}-tag`
export const StyledTagPrefixClass = prefix
export const StyledTag = styled.div<TagProps>`
  white-space: nowrap;
  position: relative;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.tag.padding[props.size || 'default']
  }};
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.borderRadius
  }};
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes[props.size]
  }};
  height: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.tag.height[props.size || 'default']
  }};
  line-height: 1;
  color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.type === 'default') {
      return _theme.colors.dark
    }
    return _theme.colors[props.type] || _theme.colors.light
  }};
  background-color: ${props => {
    const _theme = convertTheme(props.theme)
    let color = _theme.colors[props.type] || _theme.colors.light
    if (props.type === 'default') {
      color = _theme.colors.placeholder
    }
    return rgba(color, 0.15)
  }};
  border: ${props => {
    const _theme = convertTheme(props.theme)
    let color = _theme.colors[props.type] || _theme.colors.light

    if (props.type === 'default') {
      color = _theme.colors.placeholder
    }
    if (!props.bordered) {
      color = 'transparent'
    }
    return `1px solid ${lighten(0.1, color)}`
  }};
`
