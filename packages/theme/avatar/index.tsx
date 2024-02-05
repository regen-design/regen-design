import { NAME_SPACE } from '@regen-design/constant'
import { AvatarProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-avatar`
export const StyledAvatarPrefixClass = prefix
export const StyledAvatar = styled.div<AvatarProps>`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  text-align: center;
  border: ${props => {
    const _theme = convertTheme(props.theme)
    return `1px solid ${_theme.colors[props.borderColor || 'transparent']}`
  }};
  width: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.avatar.size[props.size || 'default']
  }};
  height: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.avatar.size[props.size || 'default']
  }};
  color: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.colors[props.color || 'white']
  }};
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.avatar.fontSize
  }};
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.rounded) return '50%'
    return _theme.borderRadius
  }};
  background-color: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.colors[props.backgroundColor || 'placeholder']
  }};
  img {
    width: 100%;
    height: 100%;
  }
  .${prefix}__text {
    position: absolute;
    line-height: 1;
    white-space: nowrap;
    display: inline-block;
    left: 50%;
    top: 50%;
  }
`
