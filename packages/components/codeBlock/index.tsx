// @flow
import { StyledCodeBlock } from '@regen-design/theme'
import { CodeBlockProps } from '@regen-design/types'
import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/xcode.css'
import xml from 'highlight.js/lib/languages/xml'
import format from 'xml-formatter'
hljs.registerLanguage('xml', xml)

export const CodeBlock: FC<CodeBlockProps> = ({ title, children, code }) => {
  const [isExpand, setIsExpand] = useState(false)
  const footerCodeRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (isExpand && footerCodeRef.current) {
      hljs.highlightBlock(footerCodeRef.current)
    }
  }, [isExpand, code])
  return (
    <StyledCodeBlock>
      <div className="code-header">
        <div className="code-title">{title}</div>
        <div className="code-tool">
          <Button>复制代码</Button>
          <Button onClick={() => setIsExpand(!isExpand)}>显示代码</Button>
        </div>
      </div>
      <div className="code-body">{children}</div>
      {isExpand && (
        <div className="code-footer">
          <pre>
            <code style={{ display: 'block' }} ref={footerCodeRef}>
              {format(code)}
            </code>
          </pre>
        </div>
      )}
    </StyledCodeBlock>
  )
}
