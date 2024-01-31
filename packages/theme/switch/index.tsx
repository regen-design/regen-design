import { NAME_SPACE } from '@regen-design/constant'
import { SwitchProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-switch`
export const StyledSwitchPrefixClass = prefix
export const StyledSwitch = styled.div<SwitchProps>`
  width: ${props => {
    const _themes = convertTheme(props.theme)
    return _themes.components.switch.width['default']
  }};
  height: ${props => {
    const _themes = convertTheme(props.theme)
    return _themes.components.switch.height['default']
  }};
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  display: inline-flex;
  outline: none;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: ${props => {
    const _themes = convertTheme(props.theme)
    const height = _themes.components.switch.height['default']
    return `calc(${height} / 2)`
  }};
  .${prefix}-inner {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: inherit;
    transition: ${props => {
      const _themes = convertTheme(props.theme)
      return `background-color 300ms ${_themes.transition['ease-in-out']}`
    }};
    background-color: ${props => {
      const _themes = convertTheme(props.theme)
      if (props.checked) {
        return _themes.colors.primary
      }
      return _themes.components.switch.backgroundColor[_themes.theme]
    }};
    .${prefix}-handle {
      position: absolute;
      transition: ${props => {
        const _themes = convertTheme(props.theme)
        return `left 300ms ${_themes.transition['ease-in-out']}`
      }};
      left: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height['default']
        if (props.checked) {
          return `calc(100% - ${size} - 2px + 4px)`
        }
        return '2px'
      }};
      top: 2px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      height: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height['default']
        return `calc(${size} - 4px)`
      }};
      width: ${props => {
        const _themes = convertTheme(props.theme)
        const size = _themes.components.switch.height['default']
        return `calc(${size} - 4px)`
      }};
      background-color: #ffffff;
      border-radius: inherit;
    }
  }
`
