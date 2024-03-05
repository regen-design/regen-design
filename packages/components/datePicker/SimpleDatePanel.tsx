import { FC, useContext, useEffect, useMemo, useState } from 'react'
import { StyledDatePickerPanelPrefixClass as prefixPanelClass } from '@regen-design/theme'
import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleLeftIcon,
  AngleRightIcon,
} from '@regen-design/icons'
import { formatDate, isSameDate } from '@regen-design/utils'
import classNames from 'classnames'
import {
  DatePickerDateItemType,
  DatePickerValueDateRangeType,
  DatePickerValueDateType,
} from '@regen-design/types'
import { DatePickerContext } from './index'

type Props = {
  className?: string
  onClick?: (date: Date) => void
  isEnd?: boolean
}
export const SimpleDatePanel: FC<Props> = ({ className = '', onClick, isEnd }) => {
  const { value: contextValue, format, valueFormat, type } = useContext(DatePickerContext)
  const [dates, setDates] = useState<DatePickerDateItemType[]>([])
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const value = useMemo(() => {
    if (type === 'date-range') {
      if (isEnd) {
        return contextValue?.[1] || null
      }
      if (!isEnd) {
        return contextValue?.[0] || null
      }
    }
    return contextValue
  }, [contextValue, type, isEnd])
  useEffect(() => {
    if (type === 'date-range') {
      const [value1, value2] = contextValue
        ? (contextValue as DatePickerValueDateRangeType)
        : [null, null]
      const value1Format = formatDate(new Date(value1), 'YYYY-MM')
      const value2Format = formatDate(new Date(value2), 'YYYY-MM')
      if (isEnd) {
        if (value2 && value1Format === value2Format) {
          setCurrentMonth(new Date(new Date(value2).setDate(new Date(value2).getDate() + 30)))
        } else {
          handleSetCurrentMonth(value2)
        }
      }
      if (!isEnd) {
        handleSetCurrentMonth(value1)
      }
    } else {
      handleSetCurrentMonth(value)
    }
  }, [type, value, contextValue])
  const handleSetCurrentMonth = (value?: DatePickerValueDateType) => {
    setCurrentMonth(value ? new Date(value) : new Date())
  }
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
  const currentMonthTitle = useMemo(() => {
    return `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`
  }, [currentMonth])
  return (
    <div className={`${prefixPanelClass}-calendar ${className}`}>
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
          if (type === 'date') {
            if (typeof value === 'number') {
              isSelected = isSameDate(date.date, new Date(value))
            }
            if (typeof value === 'string') {
              isSelected = formatDate(date.date, valueFormat || format) === value
            }
          }
          const dateClassName = classNames(`${prefixPanelClass}-dates__date`, {
            [`${prefixPanelClass}-dates__date-secondary`]: date.secondary,
            [`${prefixPanelClass}-dates__date-today`]:
              isSameDate(date.date, new Date()) && !date.secondary,
            [`${prefixPanelClass}-dates__date-selected`]: isSelected && !date.secondary,
          })
          return (
            <div
              key={index}
              className={dateClassName}
              onClick={e => {
                e.stopPropagation()
                if (type === 'date') {
                  onClick?.(date.date)
                }
              }}
            >
              <div className={`${prefixPanelClass}-dates__trigger`}></div>
              {isSameDate(date.date, new Date()) && !date.secondary && (
                <div className={`${prefixPanelClass}-dates__sup`}></div>
              )}
              {date.day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
