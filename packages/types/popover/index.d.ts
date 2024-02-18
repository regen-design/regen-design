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
}

export interface PopoverLayerProps {
  open: boolean
  rect: DOMRect | null
  placement?: PopoverProps['placement']
}
