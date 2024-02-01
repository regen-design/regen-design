import { CommonType, Type } from '../common'
import { ThemeConfig } from '../theme'
import Keyframes from 'styled-components/dist/models/Keyframes'

export interface WaveProps extends Pick<CommonType, 'theme'> {
  /**
   * @default 'default'
   * @description Button type
   * @type Type
   */
  type?: Type
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
  waveBlurRadius: string
  waveDeepAmount: number
  theme: ThemeConfig['theme']
}) => Keyframes
