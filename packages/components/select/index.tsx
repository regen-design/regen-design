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
  StyledSelectMenuItem,
  StyledSelectPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import '@regen-design/theme/transition.css'
import { useMergedState } from '@regen-design/hooks'
import { AngleDownIcon, CheckIcon } from '@regen-design/icons'
import { useOutsideClick } from '@regen-design/hooks'

const SelectContext = createContext<{
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  isFocused: boolean
  innerRect: DOMRect | null
  options: SelectProps['options']
  onChange: SelectProps['onChange']
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>
}>({
  value: undefined,
  setValue: undefined,
  isFocused: false,
  innerRect: null,
  options: [],
  onChange: undefined,
  setIsFocused: undefined,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectMenu = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { isFocused, innerRect, options, value, setValue, onChange, setIsFocused } =
    useContext(SelectContext)
  return (
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
          const itemClassName = classNames(`${prefixClass}-menu__item`, {
            active,
            disabled: item.disabled,
          })
          return (
            <StyledSelectMenuItem
              className={itemClassName}
              key={index}
              disabled={item.disabled}
              onClick={e => {
                e.stopPropagation()
                if (item.disabled) return
                setValue?.(item.value)
                onChange?.(item.value)
                setIsFocused?.(false)
              }}
            >
              {item.label}
              {active && (
                <div className={`${prefixClass}-menu__item-checked`}>
                  <CheckIcon />
                </div>
              )}
            </StyledSelectMenuItem>
          )
        }) || []}
      </StyledSelectMenu>
    </CSSTransition>
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
  disabled = false,
}) => {
  const selectClass = classNames(prefixClass, className)
  const [isFocused, setIsFocused] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const labelRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [innerRect, setInnerRect] = useState<DOMRect | null>(null)
  const [value, setValue] = useMergedState(undefined, {
    value: valueProps,
    defaultValue: undefined,
  })
  const getInnerRect = () => {
    if (labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect()
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
  useOutsideClick([menuRef, labelRef], () => {
    if (isFocused && hideMenuOnClick) {
      setIsFocused(false)
    }
    if (isActivated && hideMenuOnClick) {
      setIsActivated(false)
    }
  })
  return (
    <StyledSelect
      role="select"
      className={selectClass}
      isFocused={isFocused}
      disabled={disabled}
      style={style}
    >
      <SelectContext.Provider
        value={{
          value,
          setValue,
          innerRect,
          isFocused,
          options,
          onChange,
          setIsFocused,
        }}
      >
        <div className={`${prefixClass}-inner`}>
          <div
            ref={labelRef}
            className={`${prefixClass}-label ${isActivated ? `active` : ''}`}
            tabIndex={0}
            onFocus={() => {
              if (!disabled) {
                setIsFocused(true)
                setIsActivated(true)
              }
            }}
          >
            {!value ? (
              <div className={`${prefixClass}__placeholder`}>请选择</div>
            ) : (
              <div className={`${prefixClass}__text`}>
                {options.find(item => item.value === value)?.label}
              </div>
            )}
            <div className={`${prefixClass}__icon`}>
              <AngleDownIcon />
            </div>
          </div>
          <div className={`${prefixClass}__border`}></div>
          <div className={`${prefixClass}__state-border`}></div>
        </div>
        {createPortal(<SelectMenu ref={menuRef} />, document.body)}
      </SelectContext.Provider>
    </StyledSelect>
  )
}
