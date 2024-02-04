import { CommonType } from '../common'
export interface FadeInScaleUpProps extends CommonType {
  /**
   * @default false
   * @description whether to fade in
   * @type boolean
   */
  in?: boolean
  /**
   * @default 300
   * @description fade in duration
   * @type number
   */
  timeout?: number
  /**
   * @default document.body
   * @description the container of the animation
   * @type HTMLElement
   */
  container?: HTMLElement
}
