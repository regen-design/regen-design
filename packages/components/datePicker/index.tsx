import { createContext, forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { DatePickerDateItemType, DatePickerProps } from '@regen-design/types'
import {
  StyledDatePicker,
  StyledDatePickerPrefixClass as prefixClass,
  StyledDatePickerPanelPrefixClass as prefixPanelClass,
  StyledDatePickerPanel,
} from '@regen-design/theme'
import classNames from 'classnames'
import { Input } from '../input'
import {
  AngleLeftIcon,
  AngleRightIcon,
  CalendarIcon,
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
} from '@regen-design/icons'
import { Button, FadeInScaleUp } from '..'
import { useMergedState, useOutsideClick } from '@regen-design/hooks'
import { formatDate, isSameDate } from '@regen-design/utils'
const DatePickerContext = createContext<
  DatePickerProps<string | number> & {
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
  const { isFocused, wrapperRect, value, setValue, setIsFocused, format, onChange, valueFormat } =
    useContext(DatePickerContext)
  const [dates, setDates] = useState<DatePickerDateItemType[]>([])
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const getCurrentMothDates = () => {
    const newDate = currentMonth
    const year = newDate.getFullYear()
    const month = newDate.getMonth()
    const lastDay = new Date(year, month + 1, 0)
    const dates: DatePickerDateItemType[] = []
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i)
      dates.push({
        day: date.getDate(),
        date,
        secondary: false,
      })
    }
    const firstDay = new Date(year, month, 1)
    const firstDayWeek = firstDay.getDay()
    for (let i = 1; i < firstDayWeek; i++) {
      const date = new Date(year, month, 1 - i)
      dates.unshift({
        day: date.getDate(),
        date,
        secondary: true,
      })
    }
    for (let i = 1; 42 - dates.length; i++) {
      const date = new Date(year, month + 1, i)
      dates.push({
        day: date.getDate(),
        date,
        secondary: true,
      })
    }
    setDates(dates)
  }
  useEffect(() => {
    getCurrentMothDates()
  }, [currentMonth])
  const handleCalendarClick = (date: Date) => {
    if (typeof value === 'number') {
      setValue && setValue(date.getTime())
      onChange && (onChange as (value: number) => void)(date.getTime())
    }
    if (typeof value === 'string') {
      const _value = formatDate(date, valueFormat || format)
      setValue && setValue(_value)
      onChange && (onChange as (value: string) => void)(_value)
    }
    setIsFocused?.(false)
  }
  const currentMonthTitle = useMemo(() => {
    return `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`
  }, [currentMonth])
  const topValue = useMemo(() => {
    if (wrapperRect) {
      const scrollTop = window.scrollY
      const { top, height } = wrapperRect
      return top + scrollTop + height + 3
    }
    return 0
  }, [wrapperRect])
  return (
    <FadeInScaleUp in={isFocused} timeout={250}>
      <StyledDatePickerPanel
        ref={ref}
        size={'default'}
        className={`${prefixPanelClass}`}
        style={{
          position: 'absolute',
          top: topValue,
          left: wrapperRect?.left,
        }}
      >
        <div className={`${prefixPanelClass}-calendar`}>
          <div className={`${prefixPanelClass}-month`}>
            <div
              className={`${prefixPanelClass}-month__fast-prev`}
              onClick={() => {
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 12))
              }}
            >
              <AngleDoubleLeftIcon />
            </div>
            <div
              className={`${prefixPanelClass}-month__prev`}
              onClick={() => {
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
              }}
            >
              <AngleLeftIcon />
            </div>
            <div className={`${prefixPanelClass}-month__month-year`}>
              <div className={`${prefixPanelClass}-month__text`}>{currentMonthTitle}</div>
            </div>
            <div
              className={`${prefixPanelClass}-month__next`}
              onClick={() => {
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
              }}
            >
              <AngleRightIcon />
            </div>
            <div
              className={`${prefixPanelClass}-month__fast-next`}
              onClick={() => {
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 12))
              }}
            >
              <AngleDoubleRightIcon />
            </div>
          </div>
          <div className={`${prefixPanelClass}-weekdays`}>
            {['一', '二', '三', '四', '五', '六', '日'].map((day, index) => {
              return (
                <div key={index} className={`${prefixPanelClass}-weekdays__day`}>
                  {day}
                </div>
              )
            })}
          </div>
          <div className={`${prefixPanelClass}-dates`}>
            {dates.map((date, index) => {
              let isSelected = false
              if (typeof value === 'number') {
                isSelected = isSameDate(date.date, new Date(value))
              }
              if (typeof value === 'string') {
                isSelected = formatDate(date.date, valueFormat || format) === value
              }
              const dateClassName = classNames(`${prefixPanelClass}-dates__date`, {
                [`${prefixPanelClass}-dates__date-secondary`]: date.secondary,
                [`${prefixPanelClass}-dates__date-today`]: isSameDate(date.date, new Date()),
                [`${prefixPanelClass}-dates__date-selected`]: isSelected,
              })
              return (
                <div
                  key={index}
                  className={dateClassName}
                  onClick={e => {
                    e.stopPropagation()
                    handleCalendarClick(date.date)
                  }}
                >
                  {date.day}
                </div>
              )
            })}
          </div>
        </div>
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
    </FadeInScaleUp>
  )
})
DatePickerPanel.displayName = 'DatePickerPanel'
export const DatePicker = <T extends number | string>({
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
}: DatePickerProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const datePickerClass = classNames(prefixClass, className)
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
    return value ? formatDate(new Date(value), valueFormat || format) : ''
  }, [value])
  return (
    <DatePickerContext.Provider
      value={{
        isFocused,
        wrapperRect,
        value,
        onChange,
        valueFormat,
        setValue,
        setIsFocused,
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
