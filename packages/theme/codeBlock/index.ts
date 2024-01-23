import styled from 'styled-components'
import { convertTheme } from '../tools'
import { CodeBlockProps } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

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
        return `1px solid ${_theme.borderColor}`
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
      position: relative;
      margin-bottom: 0;
      > code {
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
  }
`
