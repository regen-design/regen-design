import { NAME_SPACE } from '@regen-design/constant'
import { SwitchProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'
const prefix = `${NAME_SPACE}-switch`
export const StyledSwitchPrefixClass = prefix
export const StyledSwitch = styled.div<SwitchProps & { innerWidth: number }>`
  min-width: ${props => {
    const _themes = convertTheme(props.theme)
    return _themes.components.switch.width[props.size]
  }};
  width: ${props => {
    const _themes = convertTheme(props.theme)
    const height = _themes.components.switch.height[props.size]
    const size = _themes.paddingSizes[props.size]
    return `calc(${props.innerWidth}px + ${height} + ${size})`
  }};
  height: ${props => {
    const _themes = convertTheme(props.theme)
    return _themes.components.switch.height[props.size]
  }};
  &:focus {
    .${prefix}-inner {
      border: ${props => {
        const _theme = convertTheme(props.theme)
        return `1px solid ${rgba(_theme.colors['primary'], 0.15)}`
      }};
      box-shadow: ${props => {
        const _theme = convertTheme(props.theme)
        const color = _theme.colors.primary
        return `0 0 0 ${_theme.waveBlurRadius / 2}px ${rgba(color, 0.15)}`
      }};
    }
  }
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  display: inline-flex;
  outline: none;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  opacity: ${props => {
    if (props.disabled) {
      return 0.5
    }
  }};
  border-radius: ${props => {
    const _themes = convertTheme(props.theme)
    const height = _themes.components.switch.height[props.size]
    return `calc(${height} / 2)`
  }};
  .${prefix}-inner {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: inherit;
    display: inline-flex;
    align-items: center;
    border: 1px solid transparent;
    transition: ${props => {
      const _themes = convertTheme(props.theme)
      const transitionNames = ['background-color', 'border', 'box-shadow']
      return transitionNames
        .map(item => {
          const transition = _themes.transition['ease-in-out']
          return `${item} 300ms ${transition}`
        })
        .join(',')
    }};
    background-color: ${props => {
      const _themes = convertTheme(props.theme)
      if (props.checked) {
        return _themes.colors.primary
      }
      return _themes.components.switch.backgroundColor[_themes.theme]
    }};
    .${prefix}-checked,.${prefix}-unchecked {
      color: #ffffff;
      white-space: nowrap;
      position: absolute;
      display: flex;
      line-height: 1;
      top: 0;
      align-items: center;
      justify-content: flex-end;
      transition: ${props => {
        const _themes = convertTheme(props.theme)
        return `margin-left 300ms ${_themes.transition['ease-in-out']}`
      }};
    }
    .${prefix}-unchecked {
      left: 0;
      margin-left: ${props => {
        const _themes = convertTheme(props.theme)
        const height = _themes.components.switch.height[props.size]
        return `calc(${height})`
      }};
    }
    .${prefix}-checked {
      right: 0;
      margin-right: ${props => {
        const _themes = convertTheme(props.theme)
        const height = _themes.components.switch.height[props.size]
        return `calc(${height})`
      }};
    }
    .${prefix}-handle {
      position: absolute;
      transition: ${props => {
        const _themes = convertTheme(props.theme)
        return `left 300ms ${_themes.transition['ease-in-out']}`
      }};
      left: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height[props.size]
        if (props.checked) {
          return `calc(100% - ${size} - 1px + 4px)`
        }
        return '1px'
      }};
      top: 1px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      height: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height[props.size]
        return `calc(${size} - 4px)`
      }};
      min-width: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height[props.size]
        return `calc(${size} - 4px)`
      }};
      background-color: #ffffff;
      border-radius: inherit;
    }
  }
`
