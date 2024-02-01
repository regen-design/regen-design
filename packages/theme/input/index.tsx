import { NAME_SPACE } from '@regen-design/constant'
import { InputProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'

const prefix = `${NAME_SPACE}-input`
const diff = 2
export const StyledInputPrefixClass = prefix
export const StyledInput = styled.div<
  InputProps & {
    isFocus: boolean
  }
>`
  width: 100%;
  max-width: 100%;
  line-height: 1.5;
  z-index: auto;
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed'
    }
    return 'text'
  }};
  background-color: ${props => {
    const _theme = convertTheme(props.theme)

    if (props.disabled) {
      if (_theme.theme === 'dark') {
        return rgba('#ffffff', 0.25)
      }
      return _theme.colors.light
    }
    if (_theme.theme === 'dark') {
      return rgba('#ffffff', 0.1)
    }
    return '#ffffff'
  }};
  color: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.disabled) {
      return _theme.colors.placeholder
    }
    if (_theme.theme === 'dark') {
      return _theme.colors.light
    }
    return _theme.colors.dark
  }};
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    if (props.rounded) {
      const height = _theme.baseSizes[props.size] || _theme.baseSizes['default']
      return `calc(${height} / 2)`
    }
    return _theme.borderRadius + 'px'
  }};
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes[props.size] || _theme.fontSizes['default']
  }};

  .${prefix}__state-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-radius: inherit;
    transition:
      border 300ms ease-in-out,
      box-shadow 300ms ease-in-out;
    border: ${props => {
      if (!props.isFocus) {
        return `1px solid transparent`
      }
      const _theme = convertTheme(props.theme)
      return `1px solid ${_theme.colors['primary']}`
    }};
    box-shadow: ${props => {
      if (!props.isFocus) {
        return 'none'
      }
      const _theme = convertTheme(props.theme)
      const color = _theme.colors['primary'] || '#000000'
      return `0 0 0 ${_theme.waveBlurRadius / 2}px ${rgba(color, 0.15)}`
    }};
  }

  .${prefix}__border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-radius: inherit;
    border: ${props => {
      const _theme = convertTheme(props.theme)
      if (_theme.theme === 'dark') {
        return null
      }
      return `1px solid ${_theme.borderColor}`
    }};
  }

  .${prefix}--wrapper {
    overflow: hidden;
    display: inline-flex;
    flex-grow: 1;
    position: relative;
    padding-left: ${props => {
      const _theme = convertTheme(props.theme)
      return `calc(${_theme.paddingSizes['default']} - ${diff}px)`
    }};
    padding-right: ${props => {
      const _theme = convertTheme(props.theme)
      return `calc(${_theme.paddingSizes['default']} - ${diff}px)`
    }};
    .${prefix}__prefix {
      margin-right: 4px;
    }
    .${prefix}__suffix {
      &.active {
        width: auto;
        transform: scale(1);
        margin-left: 4px;
      }
      width: auto;
      transform: scale(0);
      .${prefix}__clear, .${prefix}__eye {
        cursor: pointer;
        transition: color 300ms ease-in-out;
        &:hover {
          color: ${props => {
            const _theme = convertTheme(props.theme)
            if (_theme.theme === 'dark') {
              return _theme.colors['light']
            }
            return _theme.colors['dark']
          }};
        }
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors['placeholder']
        }};
      }
    }
    .${prefix}__prefix, .${prefix}__suffix {
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition:
        color 300ms ease-in-out,
        margin-left 300ms ease-in-out,
        transform 300ms ease-in-out;
      color: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.colors['placeholder']
      }};
    }

    .${prefix}_input {
      flex-grow: 1;
      position: relative;
      overflow: hidden;

      .${prefix}__placeholder {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        vertical-align: bottom;
        white-space: pre-wrap;
        box-sizing: border-box;
        margin: 0;
        resize: none;
        font-family: inherit;
        font-size: inherit;
        user-select: none;
        padding: ${props => {
          const _theme = convertTheme(props.theme)
          const p = `calc(${_theme.paddingSizes['default']} - ${diff * 2}px)`
          return `${p} 0`
        }};
        display: ${props => {
          if (props.type === 'textarea') {
            return 'inline-block'
          }
          return 'flex'
        }};
        align-items: ${props => {
          if (props.type === 'textarea') {
            return null
          }
          return 'center'
        }};
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors['placeholder']
        }};
      }

      .${prefix}__input-el {
        height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.baseSizes[props.size] || _theme.baseSizes['default']
        }};
        padding-block: 0;
        padding-inline: 0;
      }

      .${prefix}__textarea-el {
        height: 100%;
      }

      .${prefix}__textarea-el, .${prefix}__input-el {
        width: 100%;
        min-width: 0;
        font-family: inherit;
        border: none;
        outline: none;
        cursor: inherit;
        text-align: inherit;
        box-sizing: border-box;
        vertical-align: bottom;
        font-size: inherit;
        color: inherit;
        word-break: break-word;
        display: inline-block;
        line-height: 1.5;
        margin: 0;
        resize: none;
        white-space: pre-wrap;
        pointer-events: ${props => {
          if (props.disabled) {
            return 'none'
          }
          return 'auto'
        }};
        user-select: ${props => {
          if (props.disabled) {
            return 'none'
          }
          return 'auto'
        }};
        background-color: ${props => {
          const _theme = convertTheme(props.theme)
          if (props.disabled) {
            if (_theme.theme === 'dark') {
              return 'inherit'
            }
            return _theme.colors.light
          }
          return 'transparent'
        }};
        caret-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors['primary']
        }};
        padding: ${props => {
          if (props.type === 'textarea') {
            const _theme = convertTheme(props.theme)
            const p = `calc(${_theme.paddingSizes['default']} - ${diff * 2}px)`
            return `${p} 0`
          }
        }};
      }
    }
  }
`
