import { NAME_SPACE } from '@regen-design/constant'
import { SelectProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { darken, rgba } from 'polished'

export * from './selectMenu'
const prefix = `${NAME_SPACE}-select`
export const StyledSelectPrefixClass = prefix
export const StyledSelect = styled.div<
  SelectProps & {
    isFocused: boolean
    inputFocused: boolean
  }
>`
  z-index: auto;
  outline: none;
  width: 100%;
  position: relative;

  &:hover {
    .${prefix}-inner {
      .${prefix}__border {
        border-color: ${props => {
          if (props.disabled) {
            return null
          }
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
      return _theme.baseSizes[props.size]
    }};
    line-height: 1.5;

    .${prefix}__border, .${prefix}__state-border {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: inherit;
      pointer-events: none;
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
      &:hover {
        .${prefix}__clear {
          transform: translateY(-50%) scale(1);
        }
        .${prefix}__icon {
          transform: ${props => {
            if (props.clearable && props.value) {
              return `translateY(-50%) rotate(0deg) scale(0)`
            }
          }};
        }
      }
      &.active,
      &:focus {
        ~ .${prefix}__border {
          border-color: ${props => {
            if (props.disabled) {
              return null
            }
            const _theme = convertTheme(props.theme)
            return _theme.colors.primary
          }};
        }

        ~ .${prefix}__state-border {
          box-shadow: ${props => {
            if (props.disabled) {
              return null
            }
            const _theme = convertTheme(props.theme)
            const color = _theme.colors['primary'] || '#000000'
            return `0 0 0 ${_theme.waveBlurRadius / 2}px ${rgba(color, 0.15)}`
          }};
        }
      }
      height: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.baseSizes[props.size]
      }};
      border-radius: inherit;
      vertical-align: bottom;
      cursor: ${props => {
        if (props.disabled) {
          return 'not-allowed'
        }
        return 'pointer'
      }};
      outline: none;
      z-index: auto;
      box-sizing: border-box;
      position: relative;
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        if (props.disabled) {
          return darken(0.05, _theme.colors.white)
        }
        return _theme.colors.white
      }};
      .${prefix}__text {
        color: ${props => {
          const _theme = convertTheme(props.theme)
          if (props.inputFocused) {
            return _theme.colors.placeholder
          }
        }};
      }
      .${prefix}__placeholder {
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors.placeholder
        }};
      }
      .${prefix}__clear {
        &:hover {
          color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.colors.primary
          }};
        }
        transform: translateY(-50%) scale(0);
        cursor: pointer;
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `transform 0.3s ${_theme.transition['ease-in']}, color 0.3s ${_theme.transition['ease-in']}`
        }};
      }
      .${prefix}__icon {
        transform: ${props => {
          if (props.isFocused) {
            return `translateY(-50%) rotate(180deg) scale(1)`
          }
          return `translateY(-50%) rotate(0deg) scale(1)`
        }};
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `transform 0.3s ${_theme.transition['ease-in']}`
        }};
      }
      .${prefix}__icon, .${prefix}__clear {
        top: 50%;
        right: 10px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors.placeholder
        }};
        width: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.fontSizes[props.size]
        }};
        height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.fontSizes[props.size]
        }};
      }
      .${prefix}__placeholder,.${prefix}__text, .${prefix}__icon {
        font-size: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.fontSizes[props.size]
        }};
      }
      .${prefix}__input {
        outline: none;
        border: none;
      }
      .${prefix}__placeholder,.${prefix}__text, .${prefix}__input {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: ${props => {
          const _theme = convertTheme(props.theme)
          return `0 ${_theme.paddingSizes[props.size]}`
        }};
      }
    }
  }
`
