import { CommonType, Type } from '../common'

type WaveElementType = 'button'
export interface WaveProps extends CommonType {
  /**
   * @default 'default'
   * @description Button type
   * @type Type
   */
  type?: Type
  /**
   * @description Wave type
   * @type WaveElementType
   */
  waveElementType?: WaveElementType
}

export interface WaveRefProps {
  play: () => void
}
