import styled from 'styled-components'
import { convertTheme } from '../tools'
import { CodeBlockProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'
import { darken, lighten } from 'polished'

const prefix = `${NAME_SPACE}-code-block`

export const StyledCodeBlockPrefixClass = prefix
export const StyledCodeBlock = styled.div<
  CodeBlockProps & {
    isExpand: boolean
  }
>`
  .${prefix}-footer {
    transition: height 300ms ease-out;
    overflow: hidden;
    position: relative;
    border-bottom: ${props => {
      if (props.isExpand) {
        const _theme = convertTheme(props.theme)
        const color = _theme.theme === 'dark' ? _theme.borderDarkColor : _theme.borderColor
        return `1px solid ${color}`
      } else {
        return 'none'
      }
    }};
    > .${prefix}--copy {
      position: absolute;
      z-index: 1;
      right: 20px;
      top: 20px;
    }
    > pre {
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        if (_theme.theme === 'dark') {
          return darken(0.1, _theme.colors.dark)
        } else {
          return lighten(0.1, _theme.colors.light)
        }
      }};
      border-radius: 0;
      color: inherit;
      padding: 16px;
      overflow: auto;
      margin: 0;
      position: relative;
      > code {
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
  }
`
