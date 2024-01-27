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
        &.codeBlock_hljs {
          display: block;
          overflow-x: auto;
          padding: 1em;
          color: #383a42;
          background: #fafafa;

          .hljs-comment,
          .hljs-quote {
            color: #a0a1a7;
            font-style: italic;
          }

          .hljs-doctag,
          .hljs-keyword,
          .hljs-formula {
            color: #a626a4;
          }

          .hljs-section,
          .hljs-name,
          .hljs-selector-tag,
          .hljs-deletion,
          .hljs-subst {
            color: #e45649;
          }

          .hljs-literal {
            color: #0184bb;
          }

          .hljs-string,
          .hljs-regexp,
          .hljs-addition,
          .hljs-attribute,
          .hljs-meta .hljs-string {
            color: #50a14f;
          }

          .hljs-attr,
          .hljs-variable,
          .hljs-template-variable,
          .hljs-type,
          .hljs-selector-class,
          .hljs-selector-attr,
          .hljs-selector-pseudo,
          .hljs-number {
            color: #986801;
          }

          .hljs-symbol,
          .hljs-bullet,
          .hljs-link,
          .hljs-meta,
          .hljs-selector-id,
          .hljs-title {
            color: #4078f2;
          }

          .hljs-built_in,
          .hljs-title.class_,
          .hljs-class .hljs-title {
            color: #c18401;
          }

          .hljs-emphasis {
            font-style: italic;
          }

          .hljs-strong {
            font-weight: bold;
          }

          .hljs-link {
            text-decoration: underline;
          }
        }
        &.dark-theme.codeBlock_hljs {
          display: block;
          overflow-x: auto;
          padding: 1em;
          color: #abb2bf;
          background: #282c34;

          .hljs-comment,
          .hljs-quote {
            color: #5c6370;
            font-style: italic;
          }

          .hljs-doctag,
          .hljs-keyword,
          .hljs-formula {
            color: #c678dd;
          }

          .hljs-section,
          .hljs-name,
          .hljs-selector-tag,
          .hljs-deletion,
          .hljs-subst {
            color: #e06c75;
          }

          .hljs-literal {
            color: #56b6c2;
          }

          .hljs-string,
          .hljs-regexp,
          .hljs-addition,
          .hljs-attribute,
          .hljs-meta .hljs-string {
            color: #98c379;
          }

          .hljs-attr,
          .hljs-variable,
          .hljs-template-variable,
          .hljs-type,
          .hljs-selector-class,
          .hljs-selector-attr,
          .hljs-selector-pseudo,
          .hljs-number {
            color: #d19a66;
          }

          .hljs-symbol,
          .hljs-bullet,
          .hljs-link,
          .hljs-meta,
          .hljs-selector-id,
          .hljs-title {
            color: #61aeee;
          }

          .hljs-built_in,
          .hljs-title.class_,
          .hljs-class .hljs-title {
            color: #e6c07b;
          }

          .hljs-emphasis {
            font-style: italic;
          }

          .hljs-strong {
            font-weight: bold;
          }

          .hljs-link {
            text-decoration: underline;
          }
        }
        white-space: pre-wrap;
        word-break: break-word;
      }
    }
  }
`
