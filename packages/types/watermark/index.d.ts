import { CommonType } from '../common'
export interface WatermarkProps extends CommonType {
  /**
   * @description The content of the watermark
   * @default ''
   */
  content?: string
  /**
   * @description The font size of the watermark
   * @default 16
   */
  fontSize?: number
  /**
   * @description The color of the watermark
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  color?: string
  /**
   * @description The angle of the watermark
   * @default -20
   */
  angle?: number
  /**
   * @description The width of the watermark
   * @default 320
   */
  width?: number
  /**
   * @description The height of the watermark
   * @default 160
   */
  height?: number
  /**
   * @description The zIndex of the watermark
   * @default 10
   */
  zIndex?: number
  /**
   * @description The fullscreen of the watermark
   * @default false
   */
  fullscreen?: boolean
}
