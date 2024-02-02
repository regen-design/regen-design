import { NAME_SPACE } from '@regen-design/constant'
import { TableProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
import { lighten } from 'polished'
const prefix = `${NAME_SPACE}-table`
export const StyledTablePrefixClass = prefix
export const StyledTable = styled.table<TableProps>`
  width: 100%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  display: table;
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
`
