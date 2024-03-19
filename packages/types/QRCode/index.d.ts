import { CommonType } from '../common'
import qrcode from 'qrcode'
export interface QRCodeProps extends CommonType {
  /**
   * @description The value of the QRCode
   * @default ''
   */
  value?: string
  /**
   * @description The size of the QRCode
   * @default 100
   */
  size?: number
  /**
   * @description The scale of the QRCode
   * @default 4
   */
  scale?: number
  /**
   * @description The margin of the QRCode
   * @default 0
   */
  margin?: number
  /**
   * @description The color of the QRCode
   * @default '#000'
   */
  color?: string
  /**
   * @description The background color of the QRCode
   * @default '#fff'
   */
  backgroundColor?: string
  /**
   * @description The error correction level of the QRCode
   * @default 'M'
   */
  errorCorrectionLevel?: qrcode.QRCodeErrorCorrectionLevel
  /**
   * @description The icon src of the QRCode
   * @default undefined
   */
  iconSrc?: string
  /**
   * @description The icon size of the QRCode
   * @default 40
   */
  iconSize?: number
}
