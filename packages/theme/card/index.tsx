import { NAME_SPACE } from '@regen-design/constant'
import { CardProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-card`
export const StyledCardPrefixClass = prefix
export const StyledCard = styled.div<CardProps>`
  border: ${props => {
    const _theme = convertTheme(props.theme)
    return `1px solid ${_theme.theme === 'light' ? _theme.borderColor : _theme.borderDarkColor}`
  }};
  border-radius: ${props => convertTheme(props.theme).borderRadius};
  border-bottom: 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  > .${prefix}-header {
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      return `${_theme.paddingSizes[props.size]}`
    }};
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .${prefix}-title {
      font-size: ${props => {
        const _theme = convertTheme(props.theme)
        return `${_theme.fontSizes[props.size]}`
      }};
      color: ${props => props.theme.textColor};
    }
  }

  > .${prefix}-body {
    > .${prefix}-description {
      margin-bottom: ${props => {
        const _theme = convertTheme(props.theme)
        return `${_theme.paddingSizes[props.size]}`
      }};
    }
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      const size = _theme.paddingSizes[props.size]
      return `0 ${size} ${size}`
    }};
    border-bottom: ${props => {
      const _theme = convertTheme(props.theme)
      return `1px solid ${_theme.theme === 'light' ? _theme.borderColor : _theme.borderDarkColor}`
    }};
  }
  > .${prefix}-footer {
    position: relative;
    border-bottom: ${props => {
      const _theme = convertTheme(props.theme)
      const color = _theme.theme === 'dark' ? _theme.borderDarkColor : _theme.borderColor
      return `1px solid ${color}`
    }};
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      const size = _theme.paddingSizes[props.size]
      return `${size}`
    }};
  }
`
