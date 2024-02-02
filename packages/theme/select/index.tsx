import { NAME_SPACE } from '@regen-design/constant'
import { SelectProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'

export * from './selectMenu'
const prefix = `${NAME_SPACE}-select`
export const StyledSelectPrefixClass = prefix
export const StyledSelect = styled.div<SelectProps>`
  z-index: auto;
  outline: none;
  width: 100%;
  position: relative;

  &:hover {
    .${prefix}-inner {
      .${prefix}__border {
        border-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors.primary
        }};
      }
    }
  }

  .${prefix}-inner {
    position: relative;
    z-index: auto;
    box-shadow: none;
    width: 100%;
    max-width: 100%;
    display: inline-block;
    vertical-align: bottom;
    border-radius: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.borderRadius + 'px'
    }};
    min-height: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.baseSizes['default']
    }};
    line-height: 1.5;

    &:focus {
      .${prefix}__border {
        border-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors.primary
        }};
      }

      .${prefix}__state-border {
        box-shadow: ${props => {
          const _theme = convertTheme(props.theme)
          const color = _theme.colors['primary'] || '#000000'
          return `0 0 0 ${_theme.waveBlurRadius / 2}px ${rgba(color, 0.15)}`
        }};
      }
    }

    .${prefix}__border, .${prefix}__state-border {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      border-radius: inherit;
    }

    .${prefix}__state-border {
      box-shadow: none;
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `box-shadow 0.3s ${_theme.transition['ease-in']}`
      }};
    }

    .${prefix}__border {
      border: ${props => {
        const _theme = convertTheme(props.theme)
        return `1px solid ${_theme.borderColor}`
      }};
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `border-color 0.3s ${_theme.transition['ease-in']}`
      }};
    }

    .${prefix}-label {
      height: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.baseSizes['default']
      }};
      border-radius: inherit;
      vertical-align: bottom;
      cursor: pointer;
      outline: none;
      z-index: auto;
      box-sizing: border-box;
      position: relative;

      .${prefix}__placeholder {
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors.placeholder
        }};
      }
      .${prefix}__placeholder,.${prefix}__text {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: ${props => {
          const _theme = convertTheme(props.theme)
          return `0 ${_theme.paddingSizes['default']}`
        }};
      }
    }
  }
`
