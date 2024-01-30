import { CommonType } from '../common'
import { CSSProperties } from 'react'
export interface SpaceProps extends CommonType {
  /**
   * @default 12
   * @description space x gap
   * @type number
   */
  xGap?: number
  /**
   * @default 8
   * @description space y gap
   * @type number
   */
  yGap?: number
  /**
   * @default 'normal'
   * @description space align items
   * @type 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'normal'
   */
  alignItems?: CSSProperties['alignItems']
  /**
   * @default 'normal'
   * @description space justify content
   * @type  CSSProperties['justifyContent']
   */
  justifyContent?: CSSProperties['justifyContent']
  /**
   * @default 'normal'
   * @description flex wrap
   * @type CSSProperties['flexWrap']
   */
  flexWrap?: CSSProperties['flexWrap']
  /**
   * @default 'row'
   * @description flex direction
   * @type CSSProperties['flexDirection']
   */
  flexDirection?: CSSProperties['flexDirection']
}
