import { createContext, forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { DatePickerProps, DatePickerValueType } from '@regen-design/types'
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
import { formatDate, getCurrentMonth, getNextMonth, isSameMonth } from '@regen-design/utils'
import { SimpleDatePanel } from './SimpleDatePanel'
export const DatePickerContext = createContext<
  DatePickerProps<DatePickerValueType> & {
    isFocused: boolean
    wrapperRect: DOMRect | null
    setValue?: (value: any) => void
    tmpValue?: DatePickerValueType
    setTmpValue?: (value: any) => void
    setIsFocused?: (value: boolean) => void
    panelMonth?: [Date, Date]
    setPanelMonth?: (value: [Date, Date]) => void
    setFormattedValue?: (value: string) => void
    valueProps?: DatePickerValueType
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
    tmpValue,
    setTmpValue,
    setIsFocused,
    format,
    onChange,
    valueFormat,
  } = useContext(DatePickerContext)
  const oldStartValue = useRef<number | null>(null)
  const handleCalendarMouseOver = (date: Date) => {
    if (type === 'date-range') {
      if (Array.isArray(tmpValue) && tmpValue.length !== 0) {
        setTmpValue?.(() => {
          if (oldStartValue.current < date.getTime()) {
            return [oldStartValue.current, date.getTime()]
          } else {
            return [date.getTime(), oldStartValue.current]
          }
        })
      }
    }
  }
  const handleCalendarClick = (date: Date) => {
    if (type === 'date-range') {
      if (Array.isArray(tmpValue) && tmpValue.length === 0) {
        setTmpValue?.([date.getTime()])
        oldStartValue.current = date.getTime() as number
      }
      if (Array.isArray(tmpValue) && tmpValue.length === 2) {
        setValue?.(tmpValue)
        setTmpValue?.([])
        onChange?.(tmpValue as never)
        setIsFocused?.(false)
      }
    } else {
      if (typeof value === 'number') {
        setValue && setValue(date.getTime())
        onChange && (onChange as (value: number) => void)(date.getTime())
      } else if (typeof value === 'string') {
        const _value = formatDate(date, valueFormat || format)
        setValue && setValue(_value)
        onChange && (onChange as (value: string) => void)(_value)
      }
      setIsFocused?.(false)
    }
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
              onMouseOver={handleCalendarMouseOver}
            />
            <div className={`${prefixPanelClass}-calendar--divider`} />
            <SimpleDatePanel
              className={`${prefixPanelClass}-calendar--end`}
              onClick={handleCalendarClick}
              isEnd
              onMouseOver={handleCalendarMouseOver}
            />
          </>
        )}
        <div className={`${prefixPanelClass}-actions`}>
          <div className={`${prefixPanelClass}-actions__prefix`}></div>
          <div className={`${prefixPanelClass}-actions__suffix`}>
            {['date-range'].includes(type) && (
              <>
                <Button
                  size={'tiny'}
                  className={`${prefixPanelClass}-actions__suffix-clear`}
                  onClick={e => {
                    e.stopPropagation()
                    setValue?.(null)
                    onChange?.(null as never)
                    setIsFocused?.(false)
                  }}
                >
                  清除
                </Button>
                <Button
                  size={'tiny'}
                  type={'primary'}
                  className={`${prefixPanelClass}-actions__suffix-clear`}
                  onClick={e => {
                    e.stopPropagation()
                    onChange?.(value as never)
                    setIsFocused?.(false)
                  }}
                >
                  确认
                </Button>
              </>
            )}
            {['date'].includes(type) && (
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
            )}
          </div>
        </div>
      </StyledDatePickerPanel>
    </Transition>
  )
})
DatePickerPanel.displayName = 'DatePickerPanel'
export const DatePicker = <V extends DatePickerValueType>({
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
}: DatePickerProps<V>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const datePickerClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })
  const [panelMonth, setPanelMonth] = useState<[Date, Date]>([getCurrentMonth(), getNextMonth()])
  const [isFocused, setIsFocused] = useState(false)
  const [wrapperRect, setWrapperRect] = useState<DOMRect | null>(null)
  const [value, setValue] = useMergedState<DatePickerValueType>(undefined, {
    value: valueProps,
  })
  useEffect(() => {
    if (type === 'date-range' && (value?.[0] || value?.[1])) {
      if (isSameMonth(value[0], value[1])) {
        setPanelMonth([getCurrentMonth(value[0]), getNextMonth(value[0])])
      } else {
        setPanelMonth([getCurrentMonth(value[0]), getCurrentMonth(value[1])])
      }
    } else {
      if (!Array.isArray(value)) {
        const _value = value || getCurrentMonth()
        setPanelMonth([getCurrentMonth(_value), getNextMonth(_value)])
      }
    }
  }, [value, type])
  const [tmpValue, setTmpValue] = useState<DatePickerValueType>([])
  useEffect(() => {
    if (valueProps === undefined && type === 'date-range') {
      setValue([])
    }
  }, [type, valueProps])
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
      if (type === 'date-range' && Array.isArray(value) && value.length !== 2) {
        setValue([])
      }
      if (Array.isArray(tmpValue) && tmpValue.length === 2) {
        setTmpValue([])
      }
      setIsFocused(false)
    }
  })
  const formattedInputValue = useMemo(() => {
    const currentValue = Array.isArray(tmpValue) && tmpValue.length > 0 ? tmpValue : value
    if (!Array.isArray(currentValue)) {
      return currentValue ? formatDate(new Date(currentValue), valueFormat || format) : ''
    } else {
      return currentValue
        .map((item: string | number | Date) =>
          item ? formatDate(new Date(item), valueFormat || format) : ''
        )
        .join(' ~ ')
    }
  }, [value, tmpValue])
  return (
    <DatePickerContext.Provider
      value={{
        isFocused,
        wrapperRect,
        value,
        onChange,
        valueFormat,
        setValue,
        tmpValue,
        setTmpValue,
        setIsFocused,
        type,
        valueProps,
        panelMonth,
        setPanelMonth,
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
