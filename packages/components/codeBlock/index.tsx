// @flow
import { StyledCodeBlock, StyledCodeBlockPrefixClass as prefixClass } from '@regen-design/theme'
import { CodeBlockProps } from '@regen-design/types'
import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'
import Markdown from 'react-markdown'
import { CopyIcon, CodeSimpleIcon, CheckIcon } from '@regen-design/icons'
import { useCopy } from '@regen-design/hooks'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
hljs.registerLanguage('javascript', javascript)
export const CodeBlock: FC<CodeBlockProps> = ({
  title,
  description,
  children,
  code,
  onlyCode = false,
  onlyView = false,
}) => {
  const [isExpand, setIsExpand] = useState(false)
  const footerCodeRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)
  const [handleCopy, isCopied] = useCopy()
  useEffect(() => {
    setIsExpand(onlyCode)
  }, [onlyCode])
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
  const handleClickCopy = () => {
    handleCopy(code)
  }
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledCodeBlock className={`${prefixClass}`} isExpand={isExpand}>
        <div className={`${prefixClass}-header`}>
          <div className={`${prefixClass}-title`}>{title}</div>
          <div className={`${prefixClass}-tool`}>
            {!onlyView && (
              <>
                <Button
                  size="tiny"
                  icon={isCopied ? <CheckIcon color="success" /> : <CopyIcon />}
                  onClick={() => {
                    handleClickCopy()
                  }}
                />
                <Button
                  size="tiny"
                  icon={<CodeSimpleIcon />}
                  onClick={() => setIsExpand(!isExpand)}
                />
              </>
            )}
          </div>
        </div>
        <div className={`${prefixClass}-body`}>
          {description && (
            <div className={`${prefixClass}-description`}>
              <Markdown>{description}</Markdown>
            </div>
          )}
          <div className={`${prefixClass}-view`}>{children}</div>
        </div>
        <div ref={footerRef} className={`${prefixClass}-footer`}>
          <Button
            icon={isCopied ? <CheckIcon color="success" /> : <CopyIcon />}
            size="tiny"
            className={`${prefixClass}--copy`}
            onClick={() => {
              handleClickCopy()
            }}
          />
          <pre>
            <code style={{ display: 'block' }} ref={footerCodeRef}>
              {code}
            </code>
          </pre>
        </div>
      </StyledCodeBlock>
    </StyleSheetManager>
  )
}
