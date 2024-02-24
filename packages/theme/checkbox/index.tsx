import { NAME_SPACE } from '@regen-design/constant'
import { CheckboxProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { lighten, rgba } from 'polished'

const prefix = `${NAME_SPACE}-checkbox`
export const StyledCheckboxPrefixClass = prefix
export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  word-break: break-word;
  align-items: flex-start;
  line-height: 1.5;
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes[props.size]
  }};
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  margin: 0;
  padding: 0;
  &:not(.${prefix}--disabled):focus {
    .${prefix}-wrapper {
      .${prefix}-box__border {
        border: ${props => {
          const _theme = convertTheme(props.theme)
          return `1px solid ${_theme.colors['primary']}`
        }};
      }
      .${prefix}-box {
        box-shadow: ${props => {
          const _theme = convertTheme(props.theme)
          const color = _theme.colors.primary
          return `0 0 0 ${_theme.waveBlurRadius / 2}px ${rgba(color, 0.15)}`
        }};
      }
    }
  }
  .${prefix}-label {
    user-select: none;
    -webkit-user-select: none;
    padding: 0 4px;
    line-height: 1.5;
    color: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.disabled) {
        return _theme.colors.placeholder
      }
      return 'inherit'
    }};
  }
  .${prefix}-wrapper {
    .${prefix}-box {
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        if (props.disabled) {
          if (_theme.theme === 'dark') {
            return rgba('#ffffff', 0.1)
          }
          return _theme.colors.light
        }
        if (props.indeterminate || props.checked) {
          return _theme.colors.primary
        }
        return 'inherit'
      }};
      transition:
        background-color 0.3s ease,
        box-shadow 0.3s ease;
      border-radius: inherit;
      width: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.fontSizes[props.size]
      }};
      height: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.fontSizes[props.size]
      }};
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .${prefix}-icon {
      color: ${props => {
        const _theme = convertTheme(props.theme)
        if (props.disabled) {
          if (_theme.theme === 'dark') {
            return lighten(0.25, _theme.colors.dark)
          }
          return _theme.colors.placeholder
        }
        return _theme.colors.light
      }};
      transform-origin: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 2px;
      font-weight: bold;
      font-size: ${props => {
        const _theme = convertTheme(props.theme)
        return `calc(${_theme.fontSizes[props.size]} )`
      }};
    }
    .${prefix}-box__border {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: 1px solid
        ${props => {
          const _theme = convertTheme(props.theme)
          if (_theme.theme === 'dark') {
            return _theme.borderDarkColor
          }
          if (props.disabled) {
            return _theme.colors.placeholder
          }
          if (props.indeterminate || props.checked) {
            return _theme.colors.primary
          }
          return _theme.borderColor
        }};
      transition: border-color 0.3s ease;
    }
    box-sizing: border-box;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    user-select: none;
    width: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.fontSizes[props.size]
    }};
    -webkit-user-select: none;
    white-space: nowrap;
    display: inline-block;
    line-height: 1.5;
    border-radius: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.borderRadius
    }};
  }
`
