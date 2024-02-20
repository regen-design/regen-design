import { createContext, Dispatch, FC, Fragment, SetStateAction, useContext, useState } from 'react'
import { TreeProps } from '@regen-design/types'
import { StyledTree, StyledTreePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CaretRightIcon } from '@regen-design/icons'

const RenderItem: FC<{
  item: TreeProps['data'][0]
  level: number
}> = ({ item, level }) => {
  const { selectedKeys, setSelectedKeys, expandedKeys, setExpandedKeys, indent } =
    useContext(TreeContext)
  const nodeClassnames = classNames(`${prefixClass}-node`, {
    [`${prefixClass}-node--selected`]: selectedKeys.includes(item.key),
  })
  const isExpanded = expandedKeys.includes(item.key)
  const handleExpand = () => {
    if (item.children && item.children.length > 0) {
      setExpandedKeys(
        expandedKeys.includes(item.key)
          ? expandedKeys.filter(key => key !== item.key)
          : [...expandedKeys, item.key]
      )
    }
  }
  return (
    <Fragment key={item.key}>
      <div
        role="treeitem"
        className={`${prefixClass}-node-wrapper`}
        onClick={() => {
          setSelectedKeys([item.key])
          handleExpand()
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
}
const renderTree = (data: TreeProps['data'], level = 0) => {
  return data.map((item, index) => <RenderItem key={index} item={item} level={level} />)
}
const TreeContext = createContext<{
  selectedKeys: string[]
  setSelectedKeys?: Dispatch<SetStateAction<string[]>>
  expandedKeys: string[]
  setExpandedKeys?: Dispatch<SetStateAction<string[]>>
  indent: number
}>({
  selectedKeys: [],
  expandedKeys: [],
  indent: 24,
})
export const Tree: FC<TreeProps> = ({ style = {}, className = '', data = [], indent = 24 }) => {
  const treeClass = classNames(prefixClass, className)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])

  return (
    <TreeContext.Provider
      value={{ selectedKeys, setSelectedKeys, expandedKeys, setExpandedKeys, indent }}
    >
      <StyledTree role="tree" className={treeClass} style={style}>
        {renderTree(data)}
      </StyledTree>
    </TreeContext.Provider>
  )
}
