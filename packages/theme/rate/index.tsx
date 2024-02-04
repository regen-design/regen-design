import { NAME_SPACE } from '@regen-design/constant'
import { RateProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-rate`
export const StyledRatePrefixClass = prefix
export const StyledRate = styled.div<RateProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  cursor: pointer;
  &.${prefix}--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .${prefix}__item {
    color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors.placeholder
    }};
    font-size: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.rate.iconSize['default']
    }};
    margin-right: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.rate.space
    }};
    transition: ${props => {
      const _theme = convertTheme(props.theme)
      return `color 300ms ${_theme.transition['ease-in']}`
    }};
    &:last-child {
      margin-right: 0;
    }
    &--active {
      color: ${({ color }) => color};
    }
  }
`
