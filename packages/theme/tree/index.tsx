import { NAME_SPACE } from '@regen-design/constant'
import { TreeProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { rgba } from 'polished'
const prefix = `${NAME_SPACE}-tree`
export const StyledTreePrefixClass = prefix
export const StyledTree = styled.div<TreeProps & ThemeProps>`
  --r-font-size: 14px;
  --r-node-wrapper-padding: 3px 0;
  --r-node-border-radius: 3px;
  --r-node-color-active: ${props => {
    const _theme = convertTheme(props.theme)
    return rgba(_theme.colors.primary, 0.1)
  }};
  --r-node-color-hover: rgb(243, 243, 245);
  --r-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${() => 'var(--r-font-size)'};
  outline: none;
  .${prefix}-node-wrapper {
    box-sizing: border-box;
    padding: ${() => 'var(--r-node-wrapper-padding)'};
    .${prefix}-node {
      &--selected {
        background-color: ${() => 'var(--r-node-color-active)'};
      }
      &:hover {
        background-color: ${() => 'var(--r-node-color-hover)'};
      }
      cursor: pointer;
      transform: translate3d(0, 0, 0);
      position: relative;
      display: flex;
      border-radius: ${() => 'var(--r-node-border-radius)'};
      transition: background-color 0.3s ${() => 'var(--r-bezier)'};
      .${prefix}-node-switcher {
        &--expanded {
          transform: rotate(90deg);
        }
        color: ${() => {
          return 'rgb(118, 124, 130)'
        }};
        transition: transform 0.3s ${() => 'var(--r-bezier)'};
        width: 24px;
        height: 24px;
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        vertical-align: bottom;
      }
      .${prefix}-node-indent {
        flex-grow: 0;
        flex-shrink: 0;
      }
      .${prefix}-node-content {
        padding: 0 6px 0 4px;
        vertical-align: bottom;
        user-select: none;
        position: relative;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        transition:
          color 0.3s ${() => 'var(--r-bezier)'},
          background-color 0.3s ${() => 'var(--r-bezier)'},
          border-color 0.3s ${() => 'var(--r-bezier)'};
      }
    }
  }
`
