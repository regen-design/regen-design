import styled from 'styled-components'
import { convertTheme } from '../tools'
import { CodeBlockProps } from '@regen-design/types'

export const StyledCodeBlock = styled.div<CodeBlockProps>`
  border-radius: ${props => convertTheme(props.theme).borderRadius}px;
  border: 1px solid ${props => convertTheme(props.theme).borderColor};
  > .code-header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    > .title {
      font-size: 18px;
      color: ${props => props.theme.textColor};
    }
    > .tool {
      display: flex;
    }
  }
  > .code-body {
    padding: 0 16px 16px;
  }
  > .code-footer {
    border-top: 1px solid ${props => convertTheme(props.theme).borderColor};
    > pre {
      margin-bottom: 0;
      > code {
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
  }
`
