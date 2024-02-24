import {
  createContext,
  Dispatch,
  FC,
  Fragment,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { TreeOption, TreeProps } from '@regen-design/types'
import { StyledTree, StyledTreePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CaretRightIcon } from '@regen-design/icons'
import { Transition } from '../transition'
import { TransitionStatus } from 'react-transition-group'
import { Checkbox } from '../checkbox'
import { useMergedState } from '@regen-design/hooks'

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
    expandOnClickNode = false,
    multiple = false,
    onSelect,
    fieldNames: fieldNamesProps = { children: 'children', key: 'key', label: 'label' },
  } = useContext(TreeContext)
  const fieldNames = {
    children: fieldNamesProps.children || 'children',
    label: fieldNamesProps.label || 'label',
    key: fieldNamesProps.key || 'key',
  }
  const itemKey = (item?.[fieldNames.key] || '') as string
  const itemChildren = (item?.[fieldNames.children] || []) as Array<TreeOption>
  const itemLabel = (item?.[fieldNames.label] || '') as ReactNode
  const nodeClassnames = classNames(`${prefixClass}-node`, {
    [`${prefixClass}-node--selected`]: selectedKeys.includes(itemKey),
  })
  const isExpanded = expandedKeys.includes(itemKey)
  const [transitionStatus, setTransitionStatus] = useState<TransitionStatus>('entered')
  const [expandedHeight, setExpandedHeight] = useState(0)
  const indeterminate = useMemo(() => {
    if (itemChildren && itemChildren.length > 0) {
      let checked = 0
      let unchecked = 0
      itemChildren.forEach(child => {
        const childKey = (child?.[fieldNames.key] || '') as string
        if (checkedKeys.includes(childKey)) {
          checked++
        } else {
          unchecked++
        }
      })
      return checked > 0 && unchecked > 0
    }
    return false
  }, [checkedKeys])
  const checkAll = useMemo(() => {
    if (itemChildren && itemChildren.length > 0) {
      return itemChildren.every(child => {
        const childKey = (child?.[fieldNames.key] || '') as string
        return checkedKeys.includes(childKey)
      })
    }
    return false
  }, [checkedKeys])
  const handleExpand = () => {
    if (itemChildren && itemChildren.length > 0) {
      setExpandedKeys(
        expandedKeys.includes(itemKey)
          ? expandedKeys.filter(key => key !== itemKey)
          : [...expandedKeys, itemKey]
      )
    }
  }
  const computedExpandedChildrenHeight = (children: TreeProps['data']) => {
    let height = 0
    children.forEach(child => {
      const childKey = (child?.[fieldNames.key] || '') as string
      const childChildren = (child?.[fieldNames.children] || []) as Array<TreeOption>
      const element = document.querySelector(`[data-key="${childKey}"]`)
      if (element) {
        height += element.getBoundingClientRect().height
      }
      if (expandedKeys.includes(childKey)) {
        height += computedExpandedChildrenHeight(childChildren || [])
      }
    })
    return height
  }
  useEffect(() => {
    if (['entering', 'entered'].includes(transitionStatus)) {
      setExpandedHeight(computedExpandedChildrenHeight(itemChildren || []))
    } else {
      setExpandedHeight(0)
    }
  }, [item, expandedKeys, isExpanded, transitionStatus])
  const handleCheck = (checked: boolean) => {
    setCheckedKeys(checked ? [...checkedKeys, itemKey] : checkedKeys.filter(key => key !== itemKey))
    const deepCheck = (children: TreeProps['data'] = [], checked: boolean) => {
      children.forEach(child => {
        const childKey = (child?.[fieldNames.key] || '') as string
        setCheckedKeys(checkedKeys =>
          checked ? [...checkedKeys, childKey] : checkedKeys.filter(key => key !== childKey)
        )
        deepCheck((child?.[fieldNames.children] as TreeProps['data']) || [], checked)
      })
    }
    deepCheck(itemChildren, checked)
  }
  return (
    <Fragment key={itemKey}>
      <div
        role="treeitem"
        data-key={itemKey}
        className={`${prefixClass}-node-wrapper`}
        onClick={event => {
          let _selectedKeys = [...selectedKeys]
          if (multiple) {
            const index = _selectedKeys.indexOf(itemKey)
            if (index > -1) {
              _selectedKeys = _selectedKeys.filter(key => key !== itemKey)
            } else {
              _selectedKeys.push(itemKey)
            }
            setSelectedKeys([..._selectedKeys])
          } else {
            setSelectedKeys([itemKey])
          }
          onSelect?.([..._selectedKeys], {
            selected: isExpanded,
            selectedNodes: [],
            node: item,
            event,
          })
          if (expandOnClickNode) {
            handleExpand()
          }
        }}
        ref={nodeRef}
      >
        <div className={nodeClassnames}>
          {Array.from({ length: level }).map((_, index) => (
            <div className={`${prefixClass}-node-indent`} key={index}>
              <div style={{ width: indent }}></div>
            </div>
          ))}
          <div
            onClick={e => {
              e.stopPropagation()
              handleExpand()
            }}
            className={`${prefixClass}-node-switcher 
              ${isExpanded ? `${prefixClass}-node-switcher--expanded` : ''} 
              ${!(itemChildren && itemChildren.length > 0) ? `${prefixClass}-node-switcher--hide` : ''}`}
          >
            <CaretRightIcon />
          </div>
          {checkable && (
            <div className={`${prefixClass}-node-checkbox`}>
              <Checkbox
                indeterminate={indeterminate}
                checked={checkAll || checkedKeys.includes(itemKey)}
                onChange={checked => {
                  handleCheck(checked)
                }}
              />
            </div>
          )}
          <div className={`${prefixClass}-node-content`}>{itemLabel}</div>
        </div>
      </div>
      <Transition
        in={isExpanded}
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
            return itemChildren && itemChildren.length > 0 && renderTree(itemChildren, level + 1)
          }
          return (
            <div
              style={{
                height: expandedHeight,
                overflow: 'hidden',
                transition: 'height 300ms linear,opacity 300ms linear',
              }}
            >
              {itemChildren && itemChildren.length > 0 && renderTree(itemChildren, level + 1)}
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
  checkedKeys: [],
})
export const Tree: FC<TreeProps> = props => {
  const {
    style = {},
    className = '',
    data = [],
    defaultSelectedKeys = [],
    defaultCheckedKeys = [],
    defaultExpandedKeys = [],
    checkedKeys: checkedKeysProps,
    expandedKeys: expandedKeysProps,
    selectedKeys: selectedKeysProps,
  } = props
  const treeClass = classNames(prefixClass, className)
  const [checkedKeys, setCheckedKeys] = useMergedState(defaultCheckedKeys, {
    value: checkedKeysProps,
  })
  const [expandedKeys, setExpandedKeys] = useMergedState(defaultExpandedKeys, {
    value: expandedKeysProps,
  })
  const [selectedKeys, setSelectedKeys] = useMergedState(defaultSelectedKeys, {
    value: selectedKeysProps,
  })
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
