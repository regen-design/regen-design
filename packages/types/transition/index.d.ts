import { TransitionChildren } from 'react-transition-group/Transition'
export interface TransitionProps {
  /**
   * @description the children of the transition
   */
  children?: TransitionChildren
  /**
   * @description the animation class name
   */
  animationClassName?: 'fade-in-scale-up' | 'fade-in-height-expanded'
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
  /**
   * @description whether to unmount on exit
   * @default false
   */
  unmountOnExit?: boolean
  /**
   * @description callback when the animation enters
   * @type () => void
   */
  onEnter?: () => void
  /**
   * @description callback when the animation exits
   * @type () => void
   */
  onExit?: () => void
  /**
   * @description callback when the animation entered
   * @type () => void
   */
  onEntered?: () => void
  /**
   * @description callback when the animation exited
   * @type () => void
   */
  onExited?: () => void
  /**
   * @description callback when the animation entering
   * @type () => void
   */
  onEntering?: () => void
  /**
   * @description callback when the animation exiting
   * @type () => void
   */
  onExiting?: () => void
  /**
   * @description whether to use the portal
   * @default false
   */
  isPortal?: boolean
}
