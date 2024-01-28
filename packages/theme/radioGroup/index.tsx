import { NAME_SPACE } from '@regen-design/constant'
import { RadioGroupProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-radioGroup`
export const StyledRadioGroupPrefixClass = prefix
export const StyledRadioGroup = styled.div<RadioGroupProps>`
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return `${_theme.borderRadius}px`
  }};
  .${prefix}__divider {
    display: inline-block;
    vertical-align: bottom;
    width: 1px;
    height: inherit;
    &--active {
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.colors.primary
      }};
    }
    background-color: ${props => {
      const _theme = convertTheme(props.theme)
      if (_theme.theme === 'dark') {
        return _theme.borderDarkColor
      }
      return _theme.borderColor
    }};
  }
`
