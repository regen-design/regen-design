import { NAME_SPACE } from '@regen-design/constant'
import { PopoverProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-popover`
export const StyledPopoverPrefixClass = prefix
export const StyledPopover = styled.div<PopoverProps & ThemeProps>`
  cursor: auto;
  position: absolute;
  user-select: text;
  font-weight: normal;
  white-space: normal;
  &.${prefix}-bottom-end {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: auto;
      bottom: 100%;
      .${prefix}-arrow {
        left: calc(100% - 15px);
        top: 10px;
      }
    }
  }
  &.${prefix}-bottom-start {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: auto;
      bottom: 100%;
      .${prefix}-arrow {
        left: 15px;
        top: 10px;
      }
    }
  }
  &.${prefix}-bottom {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: auto;
      bottom: 100%;
      .${prefix}-arrow {
        left: 50%;
        top: 10px;
      }
    }
  }
  &.${prefix}-right-end {
    .${prefix}-wrapper {
      left: auto;
      right: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: calc(100% - 15px);
        left: 10px;
      }
    }
  }
  &.${prefix}-right-start {
    .${prefix}-wrapper {
      left: auto;
      right: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: 15px;
        left: 10px;
      }
    }
  }
  &.${prefix}-right {
    .${prefix}-wrapper {
      left: auto;
      right: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: 50%;
        left: 10px;
      }
    }
  }
  &.${prefix}-left-end {
    .${prefix}-wrapper {
      right: 0;
      left: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: calc(100% - 15px);
      }
    }
  }
  &.${prefix}-left-start {
    .${prefix}-wrapper {
      right: 0;
      left: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: 15px;
      }
    }
  }
  &.${prefix}-left {
    .${prefix}-wrapper {
      right: 0;
      left: 100%;
      top: 0;
      bottom: auto;
      width: 10px;
      height: 100%;
      .${prefix}-arrow {
        top: 50%;
      }
    }
  }
  &.${prefix}-top-end {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: 100%;
      bottom: auto;
      .${prefix}-arrow {
        left: calc(100% - 15px);
      }
    }
  }
  &.${prefix}-top-start {
    .${prefix}-wrapper {
      right: 0;
      left: 0;
      top: 100%;
      bottom: auto;
      .${prefix}-arrow {
        left: 15px;
      }
    }
  }
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
  --theme-background-color: ${props => {
    const _theme = convertTheme(props.theme)
    if (_theme.theme === 'dark') {
      return 'rgba(38, 38, 38, 1)'
    }
    return '#ffffff'
  }};
  --theme-text-color: ${props => {
    const _theme = convertTheme(props.theme)
    if (_theme.theme === 'dark') {
      return '#ffffff'
    }
    return 'rgba(38, 38, 38, 1)'
  }};
  .${prefix}-content {
    position: relative;
    .${prefix}-inner {
      background-clip: padding-box;
      background-color: ${() => `var(--theme-background-color)`};
      color: ${() => `var(--theme-text-color)`};
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
    box-shadow:
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
    position: absolute;
    z-index: 1;
    display: block;
    pointer-events: none;
    width: 10px;
    height: 10px;
    background-color: ${() => `var(--theme-background-color)`};
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
  }
`
