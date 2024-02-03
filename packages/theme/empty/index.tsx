import { NAME_SPACE } from '@regen-design/constant'
import { EmptyProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-empty`
export const StyledEmptyPrefixClass = prefix
export const StyledEmpty = styled.div<EmptyProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.default};
  .${prefix}-icon {
    width: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.baseSizes.default
    }};
    height: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.baseSizes.default
    }};
    font-size: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.baseSizes.default
    }};
    color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors.placeholder
    }};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .${prefix}-description {
    margin-top: 6px;
    font-size: ${({ theme }) => {
      const _theme = convertTheme(theme)
      return _theme.fontSizes['default']
    }};
    color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.colors.placeholder
    }};
  }
`
