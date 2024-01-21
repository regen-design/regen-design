import styled from 'styled-components'
import { convertTheme } from '../tools'
import { ButtonProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'
import { lighten } from 'polished'
const prefix = `${NAME_SPACE}-button`

export const StyledButtonPrefixClass = prefix

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.text) {
      return 'transparent'
    }
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
    if (props.text) {
      return _theme.colors[props.type]
    }
    if (props.type === 'default') {
      return _theme.theme === 'light' ? _theme.colors.dark : _theme.colors.light
    }
    if (props.dashed) {
      return `${_theme.colors[props.type]}`
    }
    return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
  }};
  &:hover {
    color: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.type === 'default') {
        return lighten(0.025, _theme.colors.primary)
      }
      if (props.text) {
        return lighten(0.05, _theme.colors?.[props.type] || '#000000')
      }
    }};
  }
  &:active {
    color: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.type === 'default') {
        return lighten(0.15, _theme.colors.primary)
      }
      if (props.text) {
        return lighten(0.25, _theme.colors?.[props.type] || '#000000')
      }
      if (props.dashed) {
        return `${_theme.colors[props.type]}`
      }
      return _theme.theme === 'light' ? _theme.colors.light : _theme.colors.dark
    }};
  }
  transition: ${props => {
    const duration = `${convertTheme(props.theme).animations.duration}ms`
    return `all ${props.text ? '50ms' : duration} ease-in`
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
    if (props.text) {
      return 'transparent'
    }
    if (props.type === 'default') {
      const color = _theme.theme === 'light' ? _theme.borderColor : _theme.borderDarkColor
      return `1px ${props.dashed ? 'dashed' : 'solid'} ${color}`
    }
    if (props.dashed) {
      return `1px dashed ${_theme.colors[props.type]}`
    }
    return '1px solid transparent'
  }};
  padding: ${props => {
    if (props.text) {
      return '0 0'
    }
    switch (props.size) {
      case 'tiny':
        return '0 8px'
      case 'small':
        return '0 12px'
      case 'large':
        return '0 16px'
      default:
        return '0 12px'
    }
  }};
  height: ${props => {
    if (props.text) {
      return 'initial'
    }
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
  .${prefix}__content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 0;
  }
  .${prefix}__icon {
    margin-right: 8px;
  }
`
