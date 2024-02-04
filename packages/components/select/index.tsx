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
  StyledSelectMenuPrefixClass as menuPrefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { FadeInScaleUp } from '..'
import '@regen-design/theme/transition.css'
import { useMergedState } from '@regen-design/hooks'
import { AngleDownIcon, CheckIcon, CloseCircleIcon } from '@regen-design/icons'
import { useOutsideClick } from '@regen-design/hooks'
import { Empty } from '../empty'

const SelectContext = createContext<
  SelectProps & {
    value?: string
    setValue?: React.Dispatch<React.SetStateAction<string>>
    isFocused: boolean
    innerRect: DOMRect | null
    setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>
    searchValue?: string
    setSearchValue?: React.Dispatch<React.SetStateAction<string>>
  }
>({
  value: undefined,
  setValue: undefined,
  isFocused: false,
  innerRect: null,
  options: [],
  onChange: undefined,
  setIsFocused: undefined,
  size: 'default',
  searchValue: undefined,
  setSearchValue: undefined,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectMenu = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    isFocused,
    innerRect,
    setSearchValue,
    options,
    value,
    setValue,
    onChange,
    setIsFocused,
    size,
    filterable,
    searchValue,
  } = useContext(SelectContext)
  const children = options?.map((item, index) => {
    const active = value === item.value
    const itemClassName = classNames(`${menuPrefixClass}__item`, {
      active,
      disabled: item.disabled,
    })
    if (filterable && searchValue) {
      const label = item.label as string
      if (label?.indexOf(searchValue) === -1) {
        return null
      }
    }
    return (
      <StyledSelectMenuItem
        className={itemClassName}
        key={index}
        size={size}
        disabled={item.disabled}
        onClick={e => {
          e.stopPropagation()
          if (item.disabled) return
          setValue?.(item.value)
          onChange?.(item.value)
          setIsFocused?.(false)
          setSearchValue?.('')
        }}
      >
        {item.label}
        {active && (
          <div className={`${menuPrefixClass}__item-checked`}>
            <CheckIcon />
          </div>
        )}
      </StyledSelectMenuItem>
    )
  })
  return (
    <FadeInScaleUp in={isFocused}>
      <StyledSelectMenu
        ref={ref}
        className={`${menuPrefixClass}`}
        size={size}
        style={{
          position: 'absolute',
          width: innerRect?.width,
          top: (innerRect?.bottom || 0) + 3,
          left: innerRect?.left,
        }}
      >
        {children?.length && children.filter(Boolean)?.length ? (
          children
        ) : (
          <div className={`${menuPrefixClass}-empty`}>
            <Empty />
          </div>
        )}
      </StyledSelectMenu>
    </FadeInScaleUp>
  )
})
SelectMenu.displayName = 'SelectMenu'

export const Select: FC<SelectProps> = props => {
  const {
    style = {},
    className = '',
    value: valueProps,
    options = [],
    hideMenuOnClick = true,
    onChange,
    disabled = false,
    size = 'default',
    placeholder = '请选择',
    clearable = false,
    clearIcon,
    filterable = false,
  } = props
  const selectClass = classNames(prefixClass, className)
  const [isFocused, setIsFocused] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const labelRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const clearIconRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState('')
  const [innerRect, setInnerRect] = useState<DOMRect | null>(null)
  const [value, setValue] = useMergedState(undefined, {
    value: valueProps,
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
  useEffect(() => {
    window.addEventListener('resize', getInnerRect)
    return () => {
      window.removeEventListener('resize', getInnerRect)
    }
  }, [])
  const Placeholder = <div className={`${prefixClass}__placeholder`}>{placeholder}</div>
  const SelectedText = (
    <div className={`${prefixClass}__text`}>
      {options.find(item => item.value === value)?.label}
    </div>
  )
  return (
    <StyledSelect
      role="select"
      className={selectClass}
      isFocused={isFocused}
      inputFocused={inputFocused}
      disabled={disabled}
      size={size}
      style={style}
      value={value}
      clearable={clearable}
    >
      <SelectContext.Provider
        value={{
          ...props,
          value,
          setValue,
          innerRect,
          isFocused,
          setIsFocused,
          setSearchValue,
          searchValue,
        }}
      >
        <div className={`${prefixClass}-inner`}>
          <div
            ref={labelRef}
            className={`${prefixClass}-label ${isActivated ? `active` : ''}`}
            tabIndex={0}
            onClick={() => {
              if (!disabled) {
                if (inputRef.current) {
                  inputRef.current.focus()
                }
                setIsFocused(true)
                setIsActivated(true)
              }
            }}
          >
            {filterable && (
              <input
                ref={inputRef}
                value={searchValue}
                onChange={e => {
                  setSearchValue(e.target.value)
                }}
                onFocus={() => {
                  setInputFocused(true)
                }}
                onBlur={() => {
                  setInputFocused(false)
                  setSearchValue('')
                }}
                type="text"
                className={`${prefixClass}__input`}
                tabIndex={-1}
              />
            )}
            {!filterable ? (
              <>
                {!value && Placeholder}
                {value && SelectedText}
              </>
            ) : (
              <>{!searchValue && (value ? SelectedText : Placeholder)}</>
            )}
            {clearable && value && (
              <div
                ref={clearIconRef}
                className={`${prefixClass}__clear`}
                onClick={e => {
                  e.stopPropagation()
                  setValue(undefined)
                  onChange?.(undefined)
                }}
              >
                {clearIcon || <CloseCircleIcon />}
              </div>
            )}
            <div className={`${prefixClass}__icon`}>
              <AngleDownIcon />
            </div>
          </div>
          <div className={`${prefixClass}__border`}></div>
          <div className={`${prefixClass}__state-border`}></div>
        </div>
        <SelectMenu ref={menuRef} />
      </SelectContext.Provider>
    </StyledSelect>
  )
}
