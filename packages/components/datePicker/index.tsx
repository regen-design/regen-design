import {
  createContext,
  FC,
  ForwardedRef,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
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
import { FadeInScaleUp } from '..'
import { useMergedState, useOutsideClick } from '@regen-design/hooks'
import { formatDate } from '@regen-design/utils'
const DatePickerContext = createContext<
  DatePickerProps & {
    isFocused: boolean
    wrapperRect: DOMRect | null
    setValue?: (value: any) => void
    setIsFocused?: (value: boolean) => void
  }
>({
  isFocused: false,
  wrapperRect: null,
  value: undefined,
})
const DatePickerPanel = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { isFocused, wrapperRect, value, setValue, setIsFocused, onChange } =
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
    for (let i = dates.length; i < 42; i++) {
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
  const currentMonthTitle = useMemo(() => {
    return `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`
  }, [currentMonth])
  return (
    <FadeInScaleUp in={isFocused}>
      <StyledDatePickerPanel
        ref={ref}
        size={'default'}
        className={`${prefixPanelClass}`}
        style={{
          position: 'absolute',
          top: (wrapperRect?.bottom || 0) + 3,
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
            {['日', '一', '二', '三', '四', '五', '六'].map((day, index) => {
              return (
                <div key={index} className={`${prefixPanelClass}-weekdays__day`}>
                  {day}
                </div>
              )
            })}
          </div>
          <div className={`${prefixPanelClass}-dates`}>
            {dates.map((date, index) => {
              const dateClassName = classNames(`${prefixPanelClass}-dates__date`, {
                [`${prefixPanelClass}-dates__date-secondary`]: date.secondary,
                [`${prefixPanelClass}-dates__date-today`]:
                  date.date.toDateString() === new Date().toDateString(),
                [`${prefixPanelClass}-dates__date-selected`]:
                  value && date.date.getTime() === value,
              })
              return (
                <div
                  key={index}
                  className={dateClassName}
                  onClick={e => {
                    e.stopPropagation()
                    setValue && setValue(date.date.getTime())
                    onChange && onChange(date.date.getTime())
                    setIsFocused?.(false)
                  }}
                >
                  {date.day}
                </div>
              )
            })}
          </div>
        </div>
      </StyledDatePickerPanel>
    </FadeInScaleUp>
  )
})
DatePickerPanel.displayName = 'DatePickerPanel'
export const DatePicker: FC<DatePickerProps> = ({
  style = {},
  className = '',
  placeholder = '选择日期',
  value: valueProps,
  onChange,
  disabled = false,
  // minDate,
  // maxDate,
  format = 'YYYY-MM-DD',
}) => {
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
  const formattedValue = useMemo(() => {
    return value ? formatDate(new Date(value), format) : ''
  }, [value])
  return (
    <DatePickerContext.Provider
      value={{
        isFocused,
        wrapperRect,
        value,
        onChange,
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
          disabled={disabled}
          value={formattedValue}
          placeholder={placeholder}
          suffix={<CalendarIcon />}
        />
        <DatePickerPanel ref={panelRef} />
      </StyledDatePicker>
    </DatePickerContext.Provider>
  )
}
