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
  cursor: text;
  line-height: 1.5;
  z-index: auto;
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.borderRadius + 'px'
  }};
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes['default']
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
        return 'none'
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
    border: 1px solid
      ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.borderColor
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
        padding: ${props => {
          if (props.type === 'textarea') {
            const _theme = convertTheme(props.theme)
            const p = `calc(${_theme.paddingSizes['default']} - ${diff}px)`
            return `${p} 0`
          }
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
        box-sizing: border-box;
        text-align: inherit;
        border: none;
        outline: none;
        vertical-align: bottom;
        width: 100%;
        caret-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors['primary']
        }};
        transition: all 0.3s ease-in;
        font-size: inherit;
        height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.baseSizes['default']
        }};
      }

      .${prefix}__textarea-el {
        box-sizing: border-box;
        text-align: inherit;
        border: none;
        outline: none;
        vertical-align: bottom;
        width: 100%;
        display: inline-block;
        resize: none;
        margin: 0;
        min-width: 0;
        word-break: break-word;
        white-space: pre-wrap;
        caret-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors['primary']
        }};
        transition: all 0.3s ease-in;
        padding-top: ${props => {
          const _theme = convertTheme(props.theme)
          return `calc(${_theme.paddingSizes['default']} - ${diff}px)`
        }};
        padding-bottom: ${props => {
          const _theme = convertTheme(props.theme)
          return `calc(${_theme.paddingSizes['default']} - ${diff}px)`
        }};
        font-size: inherit;
      }
    }
  }
`
