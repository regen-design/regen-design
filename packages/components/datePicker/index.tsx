import { createContext, forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { DatePickerProps, DatePickerType, DatePickerValueType } from '@regen-design/types'
import {
  StyledDatePicker,
  StyledDatePickerPrefixClass as prefixClass,
  StyledDatePickerPanelPrefixClass as prefixPanelClass,
  StyledDatePickerPanel,
} from '@regen-design/theme'
import classNames from 'classnames'
import { Input } from '../input'
import { CalendarIcon } from '@regen-design/icons'
import { Button, Transition } from '..'
import { useMergedState, useOutsideClick } from '@regen-design/hooks'
import { formatDate } from '@regen-design/utils'
import { SimpleDatePanel } from './SimpleDatePanel'
export const DatePickerContext = createContext<
  DatePickerProps<DatePickerValueType<DatePickerType>, DatePickerType> & {
    isFocused: boolean
    wrapperRect: DOMRect | null
    setValue?: (value: any) => void
    setIsFocused?: (value: boolean) => void
    setFormattedValue?: (value: string) => void
  }
>({
  isFocused: false,
  wrapperRect: null,
  value: undefined,
})
const DatePickerPanel = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    type,
    isFocused,
    wrapperRect,
    value,
    setValue,
    setIsFocused,
    format,
    onChange,
    valueFormat,
  } = useContext(DatePickerContext)
  const handleCalendarClick = (date: Date) => {
    if (Array.isArray(value)) {
      console.log('date', date)
    } else {
      if (typeof value === 'number') {
        setValue && setValue(date.getTime())
        onChange && (onChange as (value: number) => void)(date.getTime())
      }
      if (typeof value === 'string') {
        const _value = formatDate(date, valueFormat || format)
        setValue && setValue(_value)
        onChange && (onChange as (value: string) => void)(_value)
      }
    }
    setIsFocused?.(false)
  }
  const topValue = useMemo(() => {
    if (wrapperRect) {
      const scrollTop = window.scrollY
      const { top, height } = wrapperRect
      return top + scrollTop + height + 3
    }
    return 0
  }, [wrapperRect])
  const className = classNames(prefixPanelClass, {
    [`${prefixPanelClass}--${type}`]: type,
  })
  return (
    <Transition in={isFocused} timeout={250} animationClassName={'fade-in-scale-up'}>
      <StyledDatePickerPanel
        ref={ref}
        size={'default'}
        className={className}
        style={{
          position: 'absolute',
          top: topValue,
          left: wrapperRect?.left,
        }}
      >
        {type === 'date' && <SimpleDatePanel onClick={handleCalendarClick} />}
        {type === 'date-range' && (
          <>
            <SimpleDatePanel
              className={`${prefixPanelClass}-calendar--start`}
              onClick={handleCalendarClick}
            />
            <div className={`${prefixPanelClass}-calendar--divider`} />
            <SimpleDatePanel
              className={`${prefixPanelClass}-calendar--end`}
              onClick={handleCalendarClick}
              isEnd
            />
          </>
        )}
        <div className={`${prefixPanelClass}-actions`}>
          <div className={`${prefixPanelClass}-actions__prefix`}></div>
          <div className={`${prefixPanelClass}-actions__suffix`}>
            <Button
              size={'tiny'}
              onClick={e => {
                e.stopPropagation()
                const date = new Date()
                handleCalendarClick(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
              }}
            >
              此刻
            </Button>
          </div>
        </div>
      </StyledDatePickerPanel>
    </Transition>
  )
})
DatePickerPanel.displayName = 'DatePickerPanel'
export const DatePicker = <V extends DatePickerValueType<T>, T extends DatePickerType>({
  style = {},
  className = '',
  placeholder = '选择日期',
  value: valueProps,
  onChange,
  disabled = false,
  // minDate,
  // maxDate,
  format = 'YYYY-MM-DD',
  size,
  valueFormat,
  type = 'date',
}: DatePickerProps<V, T>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const datePickerClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })
  const [isFocused, setIsFocused] = useState(false)
  const [wrapperRect, setWrapperRect] = useState<DOMRect | null>(null)
  const [value, setValue] = useMergedState(undefined, {
    value: valueProps,
  })

  useEffect(() => {
    if (isFocused) {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect()
        setWrapperRect(rect)
      } else {
        setWrapperRect(null)
      }
    }
  }, [isFocused])
  useOutsideClick([wrapperRef, panelRef], () => {
    if (isFocused) {
      setIsFocused(false)
    }
  })
  const formattedInputValue = useMemo(() => {
    const currentValue = valueProps ?? value
    if (!Array.isArray(currentValue)) {
      return currentValue ? formatDate(new Date(currentValue), valueFormat || format) : ''
    } else {
      return currentValue
        .map(item => (item ? formatDate(new Date(item), valueFormat || format) : ''))
        .join(' ~ ')
    }
  }, [valueProps, value])
  return (
    <DatePickerContext.Provider
      value={{
        isFocused,
        wrapperRect,
        value: valueProps ?? value,
        onChange,
        valueFormat,
        setValue,
        setIsFocused,
        type,
      }}
    >
      <StyledDatePicker
        ref={wrapperRef}
        role="datePicker"
        className={datePickerClass}
        style={style}
        onClick={() => {
          if (disabled) return
          setIsFocused(true)
        }}
      >
        <Input
          ref={inputRef}
          readOnly
          size={size}
          disabled={disabled}
          value={formattedInputValue}
          placeholder={placeholder}
          suffix={<CalendarIcon />}
        />
        <DatePickerPanel ref={panelRef} />
      </StyledDatePicker>
    </DatePickerContext.Provider>
  )
}
