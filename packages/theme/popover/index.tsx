import { NAME_SPACE } from '@regen-design/constant'
import { PopoverProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-popover`
export const StyledPopoverPrefixClass = prefix
export const StyledPopover = styled.div<PopoverProps>`
  cursor: auto;
  position: absolute;
  user-select: text;
  font-weight: normal;
  white-space: normal;
  &.${prefix}-top {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: 100%;
      bottom: auto;
      .${prefix}-arrow {
        left: 50%;
      }
    }
  }
  .${prefix}-content {
    position: relative;
    .${prefix}-inner {
      background-clip: padding-box;
      background-color: #ffffff;
      padding: 8px;
      border-radius: 3px;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }
  }
  .${prefix}-wrapper {
    position: absolute;
    overflow: hidden;
    pointer-events: none;
    height: 10px;
  }
  .${prefix}-arrow {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    position: absolute;
    z-index: 1;
    display: block;
    pointer-events: none;
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
  }
`
