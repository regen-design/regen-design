import { CommonType } from '../common'
export interface FadeInScaleUpProps extends Omit<CommonType, 'style' | 'className'> {
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
  /**
   * @description whether to mount on enter
   * @default true
   */
  mountOnEnter?: boolean
  onEnter?: () => void
  onExit?: () => void
  onEntered?: () => void
  onExited?: () => void
}
