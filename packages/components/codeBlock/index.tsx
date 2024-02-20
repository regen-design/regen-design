import {
  StyledCodeBlock,
  StyledCodeBlockPrefixClass as prefixClass,
  useTheme,
} from '@regen-design/theme'
import { CodeBlockProps } from '@regen-design/types'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../button'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import Markdown from 'react-markdown'
import { CopyIcon, CodeSimpleIcon, CheckIcon } from '@regen-design/icons'
import { useCopy } from '@regen-design/hooks'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { Card, Space } from '..'
import classNames from 'classnames'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
export const CodeBlock: FC<CodeBlockProps> = ({
  style = {},
  className = '',
  title,
  description,
  children,
  code: _code,
  onlyCode = false,
  onlyView = false,
}) => {
  const code = useMemo(() => {
    return _code.replace(/from '@regen-design\/(.+?)'/g, "from 'regen-design'")
  }, [_code])
  const [isExpand, setIsExpand] = useState(false)
  const footerCodeRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)
  const [handleCopy, isCopied] = useCopy()
  const theme = useTheme()
  const hljsClassName = useMemo(() => {
    return theme.theme === 'dark' ? 'dark-theme codeBlock_hljs' : 'codeBlock_hljs'
  }, [theme])
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
  const codeBlockClass = classNames(prefixClass, className)
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledCodeBlock style={style} className={`${codeBlockClass}`} isExpand={isExpand}>
        <Card
          title={<b>{title}</b>}
          extra={
            <Space>
              {!onlyView && (
                <>
                  <Button
                    size="tiny"
                    text
                    icon={isCopied ? <CheckIcon color="success" /> : <CopyIcon />}
                    onClick={() => {
                      handleClickCopy()
                    }}
                  />
                  <Button
                    text
                    size="tiny"
                    icon={<CodeSimpleIcon />}
                    onClick={() => setIsExpand(!isExpand)}
                  />
                </>
              )}
            </Space>
          }
          footerStyle={{ padding: 0, borderBottom: 0 }}
          footer={
            <div ref={footerRef} className={`${prefixClass}-footer`}>
              <pre>
                <code
                  className={hljsClassName}
                  style={{ display: 'block', minWidth: 400 }}
                  ref={footerCodeRef}
                >
                  {code}
                </code>
              </pre>
            </div>
          }
        >
          {description && (
            <div className={`${prefixClass}-description`}>
              <Markdown>{description}</Markdown>
            </div>
          )}
          <div className={`${prefixClass}-view`}>{children}</div>
        </Card>
      </StyledCodeBlock>
    </StyleSheetManager>
  )
}
