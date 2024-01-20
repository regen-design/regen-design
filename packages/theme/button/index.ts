import styled from 'styled-components'
import { convertTheme } from '../tools'
import { ButtonProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

const prefix = `${NAME_SPACE}-button`

export const StyledButtonPrefixClass = prefix

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.type === 'default') {
      return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
    }
    if (props.dashed) {
      return 'transparent'
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
    if (props.dashed) {
      return `${_theme.colors[props.type]}`
    }
    return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
  }};
  opacity: ${props => {
    if (props.disabled) {
      return 0.5
    }
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
      const color = _theme.theme === 'light' ? _theme.borderColor : _theme.borderDarkColor
      return `1px ${props.dashed ? 'dashed' : 'solid'} ${color}`
    }
    if (props.dashed) {
      return `1px dashed ${_theme.colors[props.type]}`
    }
    return 'none'
  }};
  padding: 0 16px;
  height: ${props => {
    switch (props.size) {
      case 'tiny':
        return '24px'
      case 'small':
        return '32px'
      case 'large':
        return '40px'
      default:
        return '36px'
    }
  }};
  line-height: 1;
  font-family: inherit;
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes[props.size]
  }};
  width: initial;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  text-align: center;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  text-decoration: none;
  .${prefix}-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 0;
  }
`
