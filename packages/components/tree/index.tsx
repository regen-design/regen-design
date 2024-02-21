import {
  createContext,
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { TreeProps } from '@regen-design/types'
import { StyledTree, StyledTreePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CaretRightIcon } from '@regen-design/icons'
import { Transition } from '../transition'
import { TransitionStatus } from 'react-transition-group'
import { Checkbox } from '../checkbox'

const RenderItem: FC<{
  item: TreeProps['data'][0]
  level: number
}> = ({ item, level }) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const {
    selectedKeys,
    setSelectedKeys,
    expandedKeys,
    setExpandedKeys,
    checkedKeys,
    setCheckedKeys,
    indent = 20,
    checkable = false,
  } = useContext(TreeContext)
  const nodeClassnames = classNames(`${prefixClass}-node`, {
    [`${prefixClass}-node--selected`]: selectedKeys.includes(item.key),
  })
  const isExpanded = expandedKeys.includes(item.key)
  const [transitionStatus, setTransitionStatus] = useState<TransitionStatus>('entered')
  const [expandedHeight, setExpandedHeight] = useState(0)
  const handleExpand = () => {
    if (item.children && item.children.length > 0) {
      setExpandedKeys(
        expandedKeys.includes(item.key)
          ? expandedKeys.filter(key => key !== item.key)
          : [...expandedKeys, item.key]
      )
    }
  }
  const computedExpandedChildrenHeight = (children: TreeProps['data']) => {
    let height = 0
    children.forEach(child => {
      const element = document.querySelector(`[data-key="${child.key}"]`)
      if (element) {
        height += element.getBoundingClientRect().height
      }
      if (expandedKeys.includes(child.key)) {
        height += computedExpandedChildrenHeight(child.children || [])
      }
    })
    return height
  }
  useEffect(() => {
    if (['entering', 'entered'].includes(transitionStatus)) {
      setExpandedHeight(computedExpandedChildrenHeight(item.children || []))
    } else {
      setExpandedHeight(0)
    }
  }, [item, expandedKeys, isExpanded, transitionStatus])
  return (
    <Fragment key={item.key}>
      <div
        role="treeitem"
        data-key={item.key}
        className={`${prefixClass}-node-wrapper`}
        onClick={() => {
          setSelectedKeys([item.key])
          handleExpand()
        }}
        ref={nodeRef}
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
          {checkable && (
            <div className={`${prefixClass}-node-checkbox`}>
              <Checkbox
                checked={checkedKeys.includes(item.key)}
                onChange={checked => {
                  setCheckedKeys(
                    checked
                      ? [...checkedKeys, item.key]
                      : checkedKeys.filter(key => key !== item.key)
                  )
                }}
              />
            </div>
          )}
          <div className={`${prefixClass}-node-content`}>{item.label}</div>
        </div>
      </div>
      <Transition
        in={isExpanded}
        animationClassName={'fade-in-height-expanded'}
        isPortal={false}
        onEnter={() => {
          setTransitionStatus('exited')
        }}
        onEntering={() => {
          setTransitionStatus('entering')
        }}
        onEntered={() => {
          setTransitionStatus('entered')
        }}
        onExit={() => {
          setTransitionStatus('entered')
        }}
        onExiting={() => {
          setTransitionStatus('exiting')
        }}
        onExited={() => {
          setTransitionStatus('exited')
        }}
      >
        {status => {
          if (isExpanded && status === 'entered') {
            return item.children && item.children.length > 0 && renderTree(item.children, level + 1)
          }
          return (
            <div
              style={{
                height: expandedHeight,
                overflow: 'hidden',
                transition: 'height 300ms linear,opacity 300ms linear',
              }}
            >
              {item.children && item.children.length > 0 && renderTree(item.children, level + 1)}
            </div>
          )
        }}
      </Transition>
    </Fragment>
  )
}
const renderTree = (data: TreeProps['data'], level = 0) => {
  return data.map((item, index) => <RenderItem key={index} item={item} level={level} />)
}
const TreeContext = createContext<
  {
    selectedKeys: string[]
    setSelectedKeys?: Dispatch<SetStateAction<string[]>>
    expandedKeys: string[]
    setExpandedKeys?: Dispatch<SetStateAction<string[]>>
    checkedKeys?: string[]
    setCheckedKeys?: Dispatch<SetStateAction<string[]>>
  } & TreeProps
>({
  selectedKeys: [],
  expandedKeys: [],
})
export const Tree: FC<TreeProps> = props => {
  const { style = {}, className = '', data = [] } = props
  const treeClass = classNames(prefixClass, className)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])
  return (
    <TreeContext.Provider
      value={{
        selectedKeys,
        setSelectedKeys,
        expandedKeys,
        setExpandedKeys,
        checkedKeys,
        setCheckedKeys,
        ...props,
      }}
    >
      <StyledTree role="tree" className={treeClass} style={style}>
        {renderTree(data)}
      </StyledTree>
    </TreeContext.Provider>
  )
}
