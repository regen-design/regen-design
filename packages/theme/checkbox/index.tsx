import { NAME_SPACE } from '@regen-design/constant'
import { CheckboxProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'

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
        if (props.disabled) {
          const _theme = convertTheme(props.theme)
          return _theme.colors.light
        }
        if (props.checked) {
          const _theme = convertTheme(props.theme)
          return _theme.colors.primary
        } else {
          return 'transparent'
        }
      }};
      transition: background-color 0.3s ease;
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
      transform: ${props => {
        if (props.checked) {
          return 'scale(0.7)'
        } else {
          return 'scale(0)'
        }
      }};
      color: ${props => {
        if (props.disabled) {
          const _theme = convertTheme(props.theme)
          return _theme.colors.placeholder
        }
        return '#ffffff'
      }};
      transform-origin: center center;
      transition: transform 0.3s ease;
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
          if (props.disabled) {
            return _theme.colors.placeholder
          }
          if (props.checked) {
            return _theme.colors.primary
          }
          return _theme.borderColor
        }};
      transition: background-color 0.3s ease;
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
      return `${_theme.borderRadius}px`
    }};
  }
`
