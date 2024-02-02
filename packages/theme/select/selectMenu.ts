import { convertTheme } from '../tools'
import styled from 'styled-components'
import { ThemeConfig } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

const prefix = `${NAME_SPACE}-select-menu`
export const StyledSelectMenuPrefixClass = prefix
export const StyledSelectMenu = styled.div<{
  theme?: ThemeConfig
  selected?: boolean
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
    return _theme.borderRadius + 'px'
  }};
  padding: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.components.select.menuPadding
  }};
  pointer-events: auto;
  overflow: auto;
  max-height: ${props => {
    const _theme = convertTheme(props.theme)
    return `calc(${_theme.baseSizes.default} * 7)`
  }};
`

export const StyledSelectMenuItem = styled.div<{
  theme?: ThemeConfig
  disabled?: boolean
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

  .${prefix}__item-checked {
    margin-left: auto;
  }
`
