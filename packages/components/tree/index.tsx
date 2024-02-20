import { FC, Fragment, useState } from 'react'
import { TreeProps } from '@regen-design/types'
import { StyledTree, StyledTreePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CaretRightIcon } from '@regen-design/icons'
export const Tree: FC<TreeProps> = ({ style = {}, className = '', data = [], indent = 24 }) => {
  const treeClass = classNames(prefixClass, className)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])
  const renderTree = (data: TreeProps['data'], level = 0) => {
    return data.map(item => {
      const nodeClassnames = classNames(`${prefixClass}-node`, {
        [`${prefixClass}-node--selected`]: selectedKeys.includes(item.key),
      })
      const isExpanded = expandedKeys.includes(item.key)
      return (
        <Fragment key={item.key}>
          <div
            role="treeitem"
            className={`${prefixClass}-node-wrapper`}
            onClick={() => {
              setSelectedKeys([item.key])
              if (item.children && item.children.length > 0) {
                setExpandedKeys(
                  expandedKeys.includes(item.key)
                    ? expandedKeys.filter(key => key !== item.key)
                    : [...expandedKeys, item.key]
                )
              }
            }}
          >
            <div className={nodeClassnames}>
              {Array.from({ length: level }).map((_, index) => (
                <div className={`${prefixClass}-node-indent`} key={index}>
                  <div style={{ width: indent }}></div>
                </div>
              ))}
              {item.children && item.children.length > 0 && (
                <div
                  className={`${prefixClass}-node-switcher ${isExpanded ? `${prefixClass}-node-switcher--expanded` : ''}`}
                >
                  <CaretRightIcon />
                </div>
              )}
              <div className={`${prefixClass}-node-content`}>{item.label}</div>
            </div>
          </div>
          {isExpanded &&
            item.children &&
            item.children.length > 0 &&
            renderTree(item.children, level + 1)}
        </Fragment>
      )
    })
  }
  return (
    <StyledTree role="tree" className={treeClass} style={style}>
      {renderTree(data)}
    </StyledTree>
  )
}
