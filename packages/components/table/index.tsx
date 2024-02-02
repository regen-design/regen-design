import { FC } from 'react'
import { TableProps } from '@regen-design/types'
import { StyledTable, StyledTablePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import Markdown from 'react-markdown'
export const Table: FC<TableProps> = ({
  style = {},
  className = '',
  dataSource = [],
  columns = [],
  markdown = false,
}) => {
  const tableClass = classNames(prefixClass, className)
  return (
    <StyledTable role="table" className={tableClass} style={style}>
      {columns.length > 0 && (
        <thead>
          <tr>
            {columns.map((column, index) => {
              const { title, dataIndex, key, width, align } = column
              return (
                <th key={key || dataIndex || index} style={{ width, textAlign: align }}>
                  {title}
                </th>
              )
            })}
          </tr>
        </thead>
      )}
      {dataSource.length > 0 && (
        <tbody>
          {dataSource.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map((column, index) => {
                  const { dataIndex, key, width, align, render } = column
                  const value = row[dataIndex]
                  const content = render ? render(value, row, index) : value
                  return (
                    <td key={key || dataIndex || index} style={{ width, textAlign: align }}>
                      {markdown ? (
                        <Markdown className={`${prefixClass}-markdown`}>{content}</Markdown>
                      ) : (
                        content
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      )}
    </StyledTable>
  )
}
