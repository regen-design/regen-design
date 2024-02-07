import { FC, useEffect, useMemo, useState } from 'react'
import { WatermarkProps } from '@regen-design/types'
import { StyledWatermark, StyledWatermarkPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Watermark: FC<WatermarkProps> = ({
  style = {},
  className = '',
  children,
  content,
  width = 320,
  height = 240,
  fontSize = 24,
  angle = -20,
  color = 'rgba(0, 0, 0, 0.1)',
  zIndex = 10,
  fullscreen = false,
}) => {
  const watermarkClass = classNames(prefixClass, className, {
    [`${prefixClass}--fullscreen`]: fullscreen,
  })
  const [dataUrl, setDataUrl] = useState('')
  useEffect(() => {
    // 根据 content 生成水印
    const watermark = document.createElement('canvas')
    const ctx = watermark.getContext('2d')
    watermark.width = width
    watermark.height = height
    ctx.font = `${fontSize}px Arial`
    ctx.fillStyle = color
    ctx.rotate(angle * (Math.PI / 180))
    ctx.fillText(content, width / 5, height / 2)
    const url = watermark.toDataURL('image/png')
    setDataUrl(url)
    return () => {
      setDataUrl('')
    }
  }, [content, angle, color, fontSize, height, width])
  const watermarkStyle = useMemo(() => {
    return {
      backgroundImage: `url(${dataUrl}),url(${dataUrl})`,
      zIndex,
      backgroundSize: width / 2,
      backgroundPosition: `${width / 4}px ${height / 4}px,0 0`,
    }
  }, [dataUrl, width, height])
  return (
    <StyledWatermark
      role="watermark"
      className={watermarkClass}
      style={{
        ...style,
        ...(fullscreen ? watermarkStyle : {}),
      }}
    >
      {!fullscreen && (
        <>
          <div className={`${prefixClass}__inner`} style={watermarkStyle} />
          {children}
        </>
      )}
    </StyledWatermark>
  )
}
