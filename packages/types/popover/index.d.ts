import { CommonType, Placement } from '../common'
export interface PopoverProps extends Omit<CommonType, 'style'> {
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
   * @description whether to show the popover
   * @default false
   */
  open?: boolean
  /**
   * @description whether to close the popover when clicking outside
   * @default true
   */
  closeOnClickOutside?: boolean
  /**
   * @description content of the popover
   * @default ''
   */
  content?: React.ReactNode
}

export interface PopoverLayerProps {
  open: boolean
  rect: DOMRect | null
  placement?: PopoverProps['placement']
  content?: PopoverProps['content']
}
