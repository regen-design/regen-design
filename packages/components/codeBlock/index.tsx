// @flow
import { StyledCodeBlock, StyledCodeBlockPrefixClass as prefixClass } from '@regen-design/theme'
import { CodeBlockProps } from '@regen-design/types'
import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
import Markdown from 'react-markdown'
hljs.registerLanguage('javascript', javascript)
export const CodeBlock: FC<CodeBlockProps> = ({ title, description, children, code }) => {
  const [isExpand, setIsExpand] = useState(false)
  const footerCodeRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    if (footerCodeRef.current) {
      hljs.highlightBlock(footerCodeRef.current)
    }
    if (footerRef.current) {
      const { height } = footerRef.current.getBoundingClientRect()
      setFooterHeight(height)
    }
  }, [code])
  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.style.height = isExpand ? `${footerHeight}px` : '0px'
    }
  }, [isExpand, footerHeight])
  return (
    <StyledCodeBlock className={`${prefixClass}`}>
      <div className={`${prefixClass}-header`}>
        <div className={`${prefixClass}-title`}>{title}</div>
        <div className={`${prefixClass}-tool`}>
          <Button>复制代码</Button>
          <Button onClick={() => setIsExpand(!isExpand)}>显示代码</Button>
        </div>
      </div>
      <div className={`${prefixClass}-body`}>
        <div className={`${prefixClass}-description`}>
          <Markdown>{description}</Markdown>
        </div>
        <div className={`${prefixClass}-view`}>{children}</div>
      </div>
      <div ref={footerRef} className={`${prefixClass}-footer`}>
        <Button className={`${prefixClass}--copy`}>复制代码</Button>
        <pre>
          <code style={{ display: 'block' }} ref={footerCodeRef}>
            {code}
          </code>
        </pre>
      </div>
    </StyledCodeBlock>
  )
}
