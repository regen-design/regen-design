import { CommonType, Type } from '../common'
import { ThemeConfig } from '../theme'
import Keyframes from 'styled-components/dist/models/Keyframes'

type ElementType = 'button'
export interface WaveProps extends Pick<CommonType, 'theme'> {
  /**
   * @default 'default'
   * @description Button type
   * @type Type
   */
  type?: Type
  /**
   * @description Wave type
   * @type ElementType
   */
  element?: ElementType
  /**
   * @default undefined
   * @description custom color
   * @type string
   */
  color?: string
}

export interface WaveRefProps {
  play: () => void
}

export type WaveSpreadAnimationKeyframesType = (options: {
  color: string
  waveBlurRadius: number
  waveDeepAmount: number
  theme: ThemeConfig['theme']
}) => Keyframes
