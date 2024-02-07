import { CommonType } from '../common'
export interface NumberAnimationProps extends CommonType {
  /**
   * @description The start value of the animation
   * @default 0
   */
  from?: number
  /**
   * @description The end value of the animation
   * @default 100
   */
  to?: number
  /**
   * @description The duration of the animation
   * @default 1000
   */
  duration?: number
  /**
   * @description The precision of the animation
   * @default 0
   */
  precision?: number
  /**
   * @description The delay of the animation
   * @default 0
   */
  delay?: number
  /**
   * @description The active is start of the animation
   * @default false
   */
  active?: boolean
  /**
   * @description Callback after animation execution is completed
   * @default undefined
   */
  onComplete?: () => void
  /**
   * @description Animation update callback
   * @default undefined
   */
  onUpdate?: (value: number) => void
}
export interface NumberAnimationInstance {
  play: () => void
}
