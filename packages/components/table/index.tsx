import { FC } from 'react'
import { TableProps } from '@regen-design/types'
import { StyledTable, StyledTablePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import Markdown from 'react-markdown'
import { Empty } from '../empty'
export const Table: FC<TableProps> = ({
  style = {},
  className = '',
  dataSource = [],
  columns = [],
  markdown = false,
  rowKey = 'key',
  bordered = true,
}) => {
  const tableClass = classNames(prefixClass, className, {
    [`${prefixClass}-bordered`]: bordered,
  })
  const theadClass = classNames(`${prefixClass}-thead`)
  const tbodyClass = classNames(`${prefixClass}-tbody`)
  const trClass = classNames(`${prefixClass}-tr`)

  return (
    <StyledTable role="table" className={tableClass} style={style} bordered={bordered}>
      <div className={`${prefixClass}-wrapper`}>
        <div className={`${prefixClass}-inner`}>
          {columns.length > 0 && (
            <thead className={theadClass}>
              <tr className={trClass}>
                {columns.map((column, index) => {
                  const thClass = classNames(`${prefixClass}-th`)
                  const { title, dataIndex, key, width, align } = column
                  return (
                    <th
                      className={thClass}
                      key={key || dataIndex || index}
                      style={{ width, textAlign: align }}
                    >
                      {title}
                    </th>
                  )
                })}
              </tr>
            </thead>
          )}
          {dataSource.length > 0 && (
            <tbody className={tbodyClass}>
              {dataSource.map((row, index) => {
                const trKey = row[rowKey] || index
                return (
                  <tr key={trKey} className={trClass}>
                    {columns.map((column, columnIndex) => {
                      const tdClass = classNames(`${prefixClass}-td`)
                      const { dataIndex, key, width, align, render } = column
                      const value = row[dataIndex]
                      const content = render ? render(value, row, index) : value
                      return (
                        <td
                          className={tdClass}
                          key={key || dataIndex || columnIndex}
                          style={{ width, textAlign: align }}
                        >
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
        </div>
        {dataSource.length === 0 && (
          <div className={`${prefixClass}-empty`}>
            <Empty />
          </div>
        )}
      </div>
    </StyledTable>
  )
}
