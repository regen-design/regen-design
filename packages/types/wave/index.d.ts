import { CommonType, Type } from '../common'

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
}

export interface WaveRefProps {
  play: () => void
}
