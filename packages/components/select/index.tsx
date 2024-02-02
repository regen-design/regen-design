import React, {
  createContext,
  FC,
  ForwardedRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SelectProps } from '@regen-design/types'
import {
  StyledSelect,
  StyledSelectMenu,
  StyledSelectPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import '@regen-design/theme/transition.css'
import { StyledFollowerContainer } from '@regen-design/theme'
import { useMergedState } from '@regen-design/hooks'
import { CheckIcon } from '@regen-design/icons'
import { useOutsideClick } from '@regen-design/hooks'

const SelectContext = createContext<{
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  isFocused: boolean
  innerRect: DOMRect | null
  options: SelectProps['options']
  onChange: SelectProps['onChange']
}>({
  value: undefined,
  setValue: undefined,
  isFocused: false,
  innerRect: null,
  options: [],
  onChange: undefined,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectMenu = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { isFocused, innerRect, options, value, setValue, onChange } = useContext(SelectContext)
  return (
    <StyledFollowerContainer zIndex={2000}>
      <CSSTransition mountOnEnter classNames={'fade-in-scale-up'} in={isFocused} timeout={300}>
        <StyledSelectMenu
          ref={ref}
          className={`${prefixClass}-menu`}
          style={{
            position: 'absolute',
            width: innerRect?.width,
            top: (innerRect?.bottom || 0) + 3,
            left: innerRect?.left,
          }}
        >
          {options.length === 0 && <div className={`${prefixClass}-menu__empty`}>暂无数据</div>}
          {options?.map((item, index) => {
            const active = value === item.value
            return (
              <div
                className={`${prefixClass}-menu__item ${active ? 'active' : ''}`}
                key={index}
                onClick={e => {
                  e.stopPropagation()
                  setValue?.(item.value)
                  onChange?.(item.value)
                }}
              >
                {item.label}
                {active && (
                  <div className={`${prefixClass}-menu__item-checked`}>
                    <CheckIcon />
                  </div>
                )}
              </div>
            )
          }) || []}
        </StyledSelectMenu>
      </CSSTransition>
    </StyledFollowerContainer>
  )
})
SelectMenu.displayName = 'SelectMenu'

export const Select: FC<SelectProps> = ({
  style = {},
  className = '',
  value: valueProps,
  options = [],
  hideMenuOnClick = true,
  onChange,
}) => {
  const selectClass = classNames(prefixClass, className)
  const [isFocused, setIsFocused] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [innerRect, setInnerRect] = useState<DOMRect | null>(null)
  const [value, setValue] = useMergedState(undefined, {
    value: valueProps,
    defaultValue: undefined,
  })
  const getInnerRect = () => {
    if (innerRef.current) {
      const rect = innerRef.current.getBoundingClientRect()
      setInnerRect(rect)
    } else {
      setInnerRect(null)
    }
  }
  useEffect(() => {
    if (isFocused) {
      getInnerRect()
    }
  }, [isFocused])
  useOutsideClick([menuRef, innerRef], () => {
    if (isFocused && !hideMenuOnClick) {
      setIsFocused(false)
    }
  })
  return (
    <StyledSelect role="select" className={selectClass} style={style}>
      <SelectContext.Provider
        value={{
          value,
          setValue,
          innerRect,
          isFocused,
          options,
          onChange,
        }}
      >
        <div
          ref={innerRef}
          className={`${prefixClass}-inner`}
          tabIndex={0}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            if (hideMenuOnClick) {
              setIsFocused(false)
            }
          }}
        >
          <div className={`${prefixClass}-label`}>
            {!value ? (
              <div className={`${prefixClass}__placeholder`}>请选择</div>
            ) : (
              <div className={`${prefixClass}__text`}>
                {options.find(item => item.value === value)?.label}
              </div>
            )}
          </div>
          <div className={`${prefixClass}__border`}></div>
          <div className={`${prefixClass}__state-border`}></div>
        </div>
        {createPortal(<SelectMenu ref={menuRef} />, document.body)}
      </SelectContext.Provider>
    </StyledSelect>
  )
}
