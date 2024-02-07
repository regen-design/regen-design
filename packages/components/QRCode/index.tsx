import { FC, useEffect, useRef } from 'react'
import { QRCodeProps } from '@regen-design/types'
import { StyledQRCode, StyledQRCodePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import qrcode from 'qrcode'
export const QRCode: FC<QRCodeProps> = ({
  style = {},
  className = '',
  value,
  size = 100,
  margin = 0,
  color = '#000',
  backgroundColor = '#fff',
  iconSrc,
  iconSize = 40,
  scale = 4,
  errorCorrectionLevel = 'M',
}) => {
  const QRCodeClass = classNames(prefixClass, className)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // 生成二维码
  const generateQRCode = (value: string) => {
    qrcode
      .toCanvas(canvasRef.current, value, {
        width: size * 2,
        scale: scale,
        margin: margin,
        errorCorrectionLevel: errorCorrectionLevel as qrcode.QRCodeErrorCorrectionLevel,
        color: {
          dark: color,
          light: '#ffffff00',
        },
      })
      .then(() => {
        canvasRef.current?.setAttribute('style', `width: ${size}px; height: ${size}px;`)
        canvasRef.current?.setAttribute('aspect-ratio', `auto ${size * 2} / ${size * 2};`)
        if (iconSrc) {
          const img = new Image()
          img.src = iconSrc
          img.onload = () => {
            const ctx = canvasRef.current?.getContext('2d')
            if (ctx) {
              const size = iconSize * 2
              const x = (canvasRef.current.width - size) / 2
              const y = (canvasRef.current.height - size) / 2
              ctx.drawImage(img, x, y, size, size)
            }
          }
        }
      })
  }
  useEffect(() => {
    if (canvasRef.current) {
      generateQRCode(value)
    }
  }, [value])
  return (
    <StyledQRCode
      role="QRCode"
      className={QRCodeClass}
      style={{
        ...style,
        backgroundColor,
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </StyledQRCode>
  )
}
