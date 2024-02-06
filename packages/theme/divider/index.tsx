import { NAME_SPACE } from '@regen-design/constant'
import { DividerProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-divider`
export const StyledDividerPrefixClass = prefix
export const StyledDivider = styled.div<DividerProps>`
  &:not(.${prefix}--vertical) {
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;
    display: flex;
  }
  &.${prefix}--vertical {
    width: 1px;
    display: inline-block;
    margin: 0 8px;
    vertical-align: middle;
    height: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.fontSizes.default
    }};
    background-color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.borderColor
    }};
    transition: ${props => {
      const _theme = convertTheme(props.theme)
      return `background-color 300ms ${_theme.transition['ease-in']},border-color 300ms ${_theme.transition['ease-in']}`
    }};
  }
  position: relative;
  box-sizing: border-box;
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes.default
  }};
  color: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.colors.dark
  }};
  transition: ${props => {
    const _theme = convertTheme(props.theme)
    return `color 300ms ${_theme.transition['ease-in']},background-color 300ms ${_theme.transition['ease-in']}`
  }};
  &:has(.${prefix}__title) {
    display: flex;
    align-items: center;
  }
  .${prefix}__title {
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;
    white-space: nowrap;
    font-weight: 500;
  }
  .${prefix}__line--left {
    width: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.titlePlacement === 'left') {
        return `calc(${_theme.fontSizes.default} * 2)`
      }
      return '100%'
    }};
  }
  .${prefix}__line--right {
    width: ${props => {
      const _theme = convertTheme(props.theme)
      if (props.titlePlacement === 'right') {
        return `calc(${_theme.fontSizes.default} * 2)`
      }
      return '100%'
    }};
  }
  .${prefix}__line--left,.${prefix}__line--right {
    border: none;
    background-color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.borderColor
    }};
    transition: ${props => {
      const _theme = convertTheme(props.theme)
      return `background-color 300ms ${_theme.transition['ease-in']},border-color 300ms ${_theme.transition['ease-in']}`
    }};
    height: 1px;
    margin: 0;
  }
`
