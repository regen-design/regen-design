import { NAME_SPACE } from '@regen-design/constant'
import { TableProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { lighten } from 'polished'
const prefix = `${NAME_SPACE}-table`
export const StyledTablePrefixClass = prefix
export const StyledTable = styled.div<TableProps>`
  &.${prefix}-bordered {
    .${prefix}-wrapper {
      border: ${props => {
        const _theme = convertTheme(props.theme)
        return `1px solid ${_theme.components.table.borderColor}`
      }};
      overflow: hidden;
      border-radius: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.borderRadius + 'px'
      }};
    }
  }
  .${prefix}-wrapper {
    position: relative;
    .${prefix}-empty {
      box-sizing: border-box;
      padding: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.components.table.emptyPadding
      }};
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `opacity 0.3s ${_theme.transition['ease-in']}`
      }};
    }
  }
  .${prefix}-inner {
    width: 100%;
    font-variant-numeric: tabular-nums;
    table-layout: auto;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    display: table;
    position: relative;
    background-color: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.table.tdBackgroundColor
    }};
    transition: ${props => {
      const _theme = convertTheme(props.theme)
      return `background-color 0.3s ${_theme.transition['ease-in']}`
    }};
    .${prefix}-thead {
      .${prefix}-tr {
        .${prefix}-th {
          padding: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.components.table.theadPadding
          }};
          position: relative;
          text-align: start;
          box-sizing: border-box;
          transition: ${props => {
            const _theme = convertTheme(props.theme)
            return `
          background-color 0.3s ${_theme.transition['ease-in']},
          border-color 0.3s ${_theme.transition['ease-in']},
          color 0.3s ${_theme.transition['ease-in']}`
          }};
          background-color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.components.table.theadBackgroundColor
          }};
          border-color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.components.table.theadBackgroundColor
          }};
          border-bottom: ${props => {
            const _theme = convertTheme(props.theme)
            return `1px solid ${_theme.components.table.theadBorderColor}`
          }};
          color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.components.table.theadTextColor
          }};
          font-weight: 500;
        }
        box-sizing: border-box;
        background-clip: padding-box;
        transition: inherit;
      }
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `background-color 0.3s ${_theme.transition['ease-in']}`
      }};
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.components.table.theadBackgroundColor
      }};
    }
    .${prefix}-tbody {
      box-sizing: border-box;
      background-clip: padding-box;
      transition: ${props => {
        const _theme = convertTheme(props.theme)
        return `background-color 0.3s ${_theme.transition['ease-in']}`
      }};
      .${prefix}-tr {
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `background-color 0.3s ${_theme.transition['ease-in']}`
        }};
        background-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.table.tdBackgroundColor
        }};
        &:hover {
          background-color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.components.table.tdHoverBackgroundColor
          }};
          > .${prefix}-td {
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.components.table.tdHoverBackgroundColor
            }};
          }
        }
      }
      .${prefix}-td {
        padding: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.table.tdPadding
        }};
        position: relative;
        text-align: start;
        box-sizing: border-box;
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `
          background-color 0.3s ${_theme.transition['ease-in']},
          border-color 0.3s ${_theme.transition['ease-in']},
          color 0.3s ${_theme.transition['ease-in']}`
        }};
        background-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.table.tdBackgroundColor
        }};
        border-color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.table.tdBackgroundColor
        }};
        border-bottom: ${props => {
          const _theme = convertTheme(props.theme)
          return `1px solid ${_theme.components.table.tdBorderColor}`
        }};
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.table.tdTextColor
        }};
        font-weight: 500;
      }
    }
    .${prefix}-markdown {
      p {
        margin: 0;
      }
      code {
        background: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.colors[_theme.theme]
        }};
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.theme === 'dark' ? _theme.colors.light : _theme.colors.dark
        }};
        border: ${props => {
          const _theme = convertTheme(props.theme)
          return `1px solid ${lighten(0.25, _theme.colors.primary)}`
        }};
        padding: 2px 4px;
        border-radius: 4px;
      }
    }
  }
`
