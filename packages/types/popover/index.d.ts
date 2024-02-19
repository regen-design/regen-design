import { CommonType, Placement } from '../common'
import { ReactNode } from 'react'
export interface PopoverProps extends Omit<CommonType, 'style' | 'className'> {
  /**
   * @description trigger event
   * @default 'hover'
   */
  trigger?: 'click' | 'hover'
  /**
   * @description placement
   * @default 'top'
   */
  placement?: Placement
  /**
   * @description whether to show arrow
   * @default true
   */
  arrow?: boolean
  /**
   * @description whether to use custom popover
   * @default false
   */
  custom?: boolean
  /**
   * @description content of the popover
   * @default ''
   */
  content?: ReactNode
}

export interface PopoverLayerProps extends PopoverProps {
  open: boolean
  rect: DOMRect | null
}
