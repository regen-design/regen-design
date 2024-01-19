import styled from 'styled-components'
import { convertTheme } from '../tools'
import { CodeBlockProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

const prefix = `${NAME_SPACE}-code-block`

export const StyledCodeBlockPrefixClass = prefix
export const StyledCodeBlock = styled.div<CodeBlockProps>`
  border-radius: ${props => convertTheme(props.theme).borderRadius}px;
  border: 1px solid ${props => convertTheme(props.theme).borderColor};
  border-bottom: 0;
  > .${prefix}-header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    > .${prefix}-title {
      font-size: 18px;
      color: ${props => props.theme.textColor};
    }
    > .${prefix}-tool {
      display: flex;
      > * {
        margin-left: 8px;
      }
    }
  }

  > .${prefix}-body {
    > .${prefix}-description {
      margin-bottom: 16px;
    }
    > .${prefix}-view {
      margin-top: 16px;
    }
    padding: 0 16px 16px;
    border-bottom: 1px solid ${props => convertTheme(props.theme).borderColor};
  }
  > .${prefix}-footer {
    transition: height 300ms ease-out;
    overflow: hidden;
    position: relative;
    > .${prefix}--copy {
      position: absolute;
      z-index: 1;
      right: 20px;
      top: 20px;
    }
    > pre {
      position: relative;
      margin-bottom: 0;
      > code {
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
  }
`
