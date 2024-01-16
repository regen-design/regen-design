import styled from 'styled-components'
import { convertTheme } from '../tools'
import { ButtonProps } from '@regen-design/types'

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.type === 'default') {
      return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
    }
    return _theme.colors[props.type]
  }};
  border-radius: ${props => {
    return convertTheme(props.theme).borderRadius + 'px'
  }};
  color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.type === 'default') {
      return _theme.theme === 'light' ? _theme.colors.dark : _theme.colors.light
    }
    return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
  }};
  display: inline-flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  outline: none;
  position: relative;
  z-index: auto;
  border: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.type === 'default') {
      return `1px solid ${_theme.borderColor}`
    }
    return 'none'
  }};
  padding: 0 16px;
  height: 34px;
  line-height: 1;
  font-family: inherit;
  font-size: 14px;
  width: initial;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`
