import { FC, Fragment, useMemo } from 'react'
import { DescriptionsItemProps, DescriptionsProps } from '@regen-design/types'
import {
  StyledDescriptions,
  StyledDescriptionsPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
export const Descriptions: FC<DescriptionsProps> = ({
  style = {},
  className = '',
  title,
  extra,
  column = 3,
  items = [],
  bordered,
}) => {
  const descriptionsClass = classNames(prefixClass, className)
  const splitItems = useMemo(() => {
    return items.reduce((result: DescriptionsItemProps[][], value, index) => {
      if (index % column === 0) {
        result.push(items.slice(index, index + column))
      }
      return result
    }, [])
  }, [items])
  return (
    <StyledDescriptions
      role="descriptions"
      bordered={bordered}
      className={descriptionsClass}
      style={style}
    >
      <div className={`${prefixClass}-header`}>
        <div className={`${prefixClass}-header__title`}>{title}</div>
        <div className={`${prefixClass}-header__extra`}>{extra}</div>
      </div>
      <div className={`${prefixClass}-wrapper`}>
        <table className={`${prefixClass}-table`}>
          <tbody>
            {splitItems?.map((items, index) => {
              let usedColumn = 0
              return (
                <tr key={index} className={`${prefixClass}-row`}>
                  {items.map((item, index) => {
                    let colSpan = 1
                    const columns = bordered ? column * 2 : column
                    const itemsLength = items.length
                    usedColumn += bordered ? 2 : 1
                    if (bordered) {
                      if (usedColumn < columns && index === itemsLength - 1) {
                        colSpan = columns - usedColumn + 1
                      }
                      return (
                        <Fragment key={index}>
                          <th
                            className={`${prefixClass}-row__item-label ${item.labelClassName || ''}`}
                            style={item.labelStyle || {}}
                            colSpan={1}
                          >
                            {item.label}
                          </th>
                          <td
                            className={`${prefixClass}-row__item-content ${item.contentClassName || ''}`}
                            style={item.contentStyle || {}}
                            colSpan={colSpan}
                          >
                            {item.children}
                          </td>
                        </Fragment>
                      )
                    }
                    if (itemsLength === columns - 1 && index == itemsLength - 1) {
                      colSpan = columns - 1
                    }
                    if (itemsLength === 1) {
                      colSpan = columns
                    }
                    return (
                      <td key={index} className={`${prefixClass}-row__item`} colSpan={colSpan}>
                        <div
                          className={`${prefixClass}-row__item-container ${item.className}`}
                          style={item.style}
                        >
                          <div
                            className={`${prefixClass}-row__item-label ${item.labelClassName}`}
                            style={item.labelStyle}
                          >
                            {item.label}
                          </div>
                          <div
                            className={`${prefixClass}-row__item-content ${item.contentClassName || ''}`}
                            style={item.contentStyle || {}}
                          >
                            {item.children}
                          </div>
                        </div>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </StyledDescriptions>
  )
}
