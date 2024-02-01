import { NAME_SPACE } from '@regen-design/constant'
import { TableProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-table`
export const StyledTablePrefixClass = prefix
export const StyledTable = styled.table<TableProps>`
  width: 100%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  display: table;
`
