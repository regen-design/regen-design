import { NAME_SPACE } from '@regen-design/constant'
import { RadioGroupProps, RadioProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { lighten } from 'polished'
const prefix = `${NAME_SPACE}-radio`
export const StyledRadioPrefixClass = prefix
export const StyledRadio = styled.div<
  RadioProps &
    Pick<RadioGroupProps, 'optionType'> & {
      optionsLength: number
    }
>`
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
  .${prefix}-button {
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    outline: none;
    position: relative;
    z-index: auto;
    color: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.disabled) {
        return _theme.colors.placeholder
      }
      return 'inherit'
    }};
    border: ${props => {
      const _theme = convertTheme(props.theme)
      let color = _theme.borderColor
      if (_theme.theme === 'dark') {
        color = _theme.borderDarkColor
      }
      if (props.checked) {
        color = _theme.colors.primary
      }
      if (props.disabled) {
        color = lighten(0.05, color)
      }
      return `1px solid ${color}`
    }};
    border-left: ${() => {
      return 0
    }};
    border-right: ${() => {
      return 0
    }};
    padding: ${props => {
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
      return convertTheme(props.theme).baseSizes[props.size]
    }};
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
      .${prefix}-inner {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: ${props => {
          const _theme = convertTheme(props.theme)
          if (props.disabled) {
            return _theme.colors.placeholder
          }
          return _theme.colors.primary
        }};
        transform-origin: center;
        transition: transform 0.3s ease;
        transform: ${props => {
          if (props.checked) {
            return 'scale(0.5)'
          }
          return 'scale(0)'
        }};
      }
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
          if (_theme.theme === 'dark') {
            return _theme.borderDarkColor
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
    border-radius: 50%;
    width: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.fontSizes[props.size]
    }};
    -webkit-user-select: none;
    white-space: nowrap;
    display: inline-block;
    line-height: 1.5;
  }
`
