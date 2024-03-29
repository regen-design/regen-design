import { createRef, FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { StyledButton, StyledButtonPrefixClass as prefixClass } from '@regen-design/theme'
import { ButtonProps } from '@regen-design/types'
import { Wave } from '../wave'
import classNames from 'classnames'
import { WaveRefProps } from '@regen-design/types/wave'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { SpinnerIcon } from '@regen-design/icons'
export const Button: FC<ButtonProps> = ({
  children = null,
  type = 'default',
  disabled = false,
  dashed = false,
  text = false,
  circle = false,
  rounded = false,
  block = false,
  loading = false,
  color,
  onClick,
  style = {},
  className = '',
  size = 'default',
  icon = null,
}) => {
  const buttonRef = createRef<HTMLButtonElement>()
  const waveRef = useRef<WaveRefProps>(null)
  const [loadingWidth, setLoadingWidth] = useState<number>(0)
  const loadingRef = useRef<HTMLSpanElement>(null)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    if (loading) return
    waveRef.current?.play()
    onClick && onClick(e)
  }
  const buttonClass = classNames(className, prefixClass, {
    [`${prefixClass}--${type}`]: type,
    [`${prefixClass}--${size}`]: size,
    [`${prefixClass}--disabled`]: disabled,
    [`${prefixClass}--dashed`]: dashed,
    [`${prefixClass}--text`]: text,
    [`${prefixClass}--circle`]: circle,
    [`${prefixClass}--rounded`]: rounded,
    [`${prefixClass}--block`]: block,
    [`${prefixClass}--loading`]: loading,
    [`${prefixClass}--${color}`]: color,
  })
  useEffect(() => {
    if (loadingRef.current) {
      const width = loadingRef.current.offsetWidth
      setLoadingWidth(width)
    }
  }, [])
  useEffect(() => {
    if (loadingRef.current) {
      if (loading) {
        loadingRef.current.style.width = `${loadingWidth}px`
      } else {
        loadingRef.current.style.width = `0px`
      }
    }
  }, [loading, loadingWidth])
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledButton
        style={style}
        className={`${buttonClass}`}
        ref={buttonRef}
        type={type}
        size={size}
        text={text}
        circle={circle}
        rounded={rounded}
        block={block}
        color={color}
        isLoading={loading}
        disabled={disabled}
        dashed={dashed}
        onClick={handleClick}
        role="button"
      >
        {icon ? (
          <span
            className={`${prefixClass}__icon ${loading ? prefixClass + '__icon--loading' : ''}`}
            style={{ ...(!children ? { margin: '0' } : {}) }}
          >
            {loading ? <SpinnerIcon /> : icon}
          </span>
        ) : (
          <span
            ref={loadingRef}
            className={`${prefixClass}__icon ${prefixClass}__icon--loading`}
            style={{ ...(!children || !loading ? { margin: '0' } : {}) }}
          >
            <SpinnerIcon />
          </span>
        )}
        <span className={`${prefixClass}__content`}>{children || ''}</span>
        {!text && <Wave color={color} type={type} ref={waveRef} />}
      </StyledButton>
    </StyleSheetManager>
  )
}
