import {
  createContext,
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { TreeProps } from '@regen-design/types'
import { StyledTree, StyledTreePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CaretRightIcon } from '@regen-design/icons'
import { Transition } from '../transition'
import { TransitionStatus } from 'react-transition-group'

const RenderItem: FC<{
  item: TreeProps['data'][0]
  level: number
}> = ({ item, level }) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const { selectedKeys, setSelectedKeys, expandedKeys, setExpandedKeys, indent } =
    useContext(TreeContext)
  const nodeClassnames = classNames(`${prefixClass}-node`, {
    [`${prefixClass}-node--selected`]: selectedKeys.includes(item.key),
  })
  const isExpanded = expandedKeys.includes(item.key)
  const [transitionStatus, setTransitionStatus] = useState<TransitionStatus | ('enter' | 'exit')>(
    'enter'
  )
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
  const expandedChildrenHeight = useMemo(() => {
    const computedExpandedChildrenHeight = (children: TreeProps['data']) => {
      let height = 0
      children.forEach(child => {
        const childNode = document.querySelector(`[role="treeitem"][data-key="${child.key}"]`)
        if (childNode) {
          height += childNode.getBoundingClientRect()?.height || 0
        }
        if (expandedKeys.includes(child.key)) {
          height += computedExpandedChildrenHeight(child.children || [])
        }
      })
      return height
    }
    return computedExpandedChildrenHeight(item.children || [])
  }, [item, expandedKeys, transitionStatus])
  useEffect(() => {
    if (['entering', 'entered', 'exit'].includes(transitionStatus)) {
      setExpandedHeight(expandedChildrenHeight)
    } else {
      setExpandedHeight(0)
    }
  }, [expandedChildrenHeight, transitionStatus])

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
          <div className={`${prefixClass}-node-content`}>{item.label}</div>
        </div>
      </div>
      <Transition
        in={isExpanded}
        animationClassName={'fade-in-height-expanded'}
        isPortal={false}
        onEnter={() => {
          setTransitionStatus('enter')
        }}
        onEntering={() => {
          setTransitionStatus('entering')
        }}
        onEntered={() => {
          setTransitionStatus('entered')
        }}
        onExit={() => {
          setTransitionStatus('exit')
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
