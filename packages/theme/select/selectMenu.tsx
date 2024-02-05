import { convertTheme } from '../tools'
import styled from 'styled-components'
import { Size, ThemeConfig } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

const prefix = `${NAME_SPACE}-select-menu`
export const StyledSelectMenuPrefixClass = prefix
export const StyledSelectMenu = styled.div<{
  theme?: ThemeConfig
  selected?: boolean
  size: Size
}>`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: ${() => {
    return '#ffffff'
  }};
  border: ${props => {
    const _theme = convertTheme(props.theme)
    return `1px solid ${_theme.borderColor}`
  }};
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.borderRadius
  }};
  padding: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.select.menuPadding
  }};
  pointer-events: auto;
  overflow: auto;
  max-height: ${props => {
    const _theme = convertTheme(props.theme)
    return `calc(${_theme.baseSizes[props.size]} * 7)`
  }};
  .${prefix}-empty {
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.select.menuItemPadding
    }};
  }
`

export const StyledSelectMenuItem = styled.div<{
  theme?: ThemeConfig
  disabled?: boolean
  size: Size
}>`
  &:hover {
    background: ${props => {
      if (props.disabled) {
        return 'none'
      }
      const _theme = convertTheme(props.theme)
      return _theme.components.select.activeBackgroundColor
    }};
  }
  &.active {
    color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors.primary
    }};
  }
  &.disabled {
    color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors.placeholder
    }};
    cursor: not-allowed;
  }
  display: flex;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  padding: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.select.menuItemPadding
  }};
  font-size: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.fontSizes[props.size]
  }};
  .${prefix}__item-checked {
    margin-left: auto;
  }
`
