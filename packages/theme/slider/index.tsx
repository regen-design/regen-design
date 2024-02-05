import { NAME_SPACE } from '@regen-design/constant'
import { SliderProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'
const prefix = `${NAME_SPACE}-slider`
export const StyledSliderPrefixClass = prefix
export const StyledSlider = styled.div<SliderProps>`
  display: block;
  position: relative;
  z-index: 0;
  width: 100%;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  user-select: none;
  -webkit-user-select: none;
  opacity: ${props => {
    if (props.disabled) {
      return 0.5
    }
    return 1
  }};
  .${prefix}-inner {
    width: 100%;
    position: relative;
    height: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.slider.height
    }};
    background-color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.slider.backgroundColor
    }};
    transition: ${props => {
      const _theme = convertTheme(props.theme)
      return `background-color ${_theme.transition['ease-in-out']} 300ms`
    }};
    border-radius: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.borderRadius
    }};
    .${prefix}-thumb-wrap {
      outline: none;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: ${props => {
        if (props.disabled) {
          return 'not-allowed'
        }
        return 'pointer'
      }};
      pointer-events: auto;
      display: flex;
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `left ${_theme.transition['ease-in-out']} 300ms`
      }};
      &:focus,
      &:hover {
        .${prefix}-thumb {
          border: ${props => {
            const _theme = convertTheme(props.theme)
            return `1px solid ${_theme.colors.primary}`
          }};
          box-shadow: ${props => {
            const _theme = convertTheme(props.theme)
            return `0 0 0 3px ${rgba(_theme.colors.primary, 0.15)}`
          }};
        }
      }
      .${prefix}-thumb {
        width: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.slider.thumbSize
        }};
        height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.slider.thumbSize
        }};
        background-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.slider.thumbColor
        }};
        border: ${props => {
          const _theme = convertTheme(props.theme)
          return `1px solid ${_theme.components.slider.thumbBorderColor}`
        }};
        border-radius: 50%;
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `
        border ${_theme.transition['ease-in-out']} 300ms,
        box-shadow ${_theme.transition['ease-in-out']} 300ms
        `
        }};
      }
    }

    .${prefix}-track {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0;
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.colors.primary
      }};
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `background-color ${_theme.transition['ease-in-out']} 300ms , width ${_theme.transition['ease-in-out']} 300ms`
      }};
    }
  }
`
