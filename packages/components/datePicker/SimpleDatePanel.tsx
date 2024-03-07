import { FC, useContext, useEffect, useMemo, useState } from 'react'
import { StyledDatePickerPanelPrefixClass as prefixPanelClass } from '@regen-design/theme'
import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleLeftIcon,
  AngleRightIcon,
} from '@regen-design/icons'
import { formatDate, isBetweenDate, isSameDate, isSameMonth } from '@regen-design/utils'
import classNames from 'classnames'
import { DatePickerDateItemType, DatePickerValueDateType } from '@regen-design/types'
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
    return contextValue
  }, [contextValue])
  useEffect(() => {
    if (type === 'date-range') {
      if (isEnd) {
        const picker1 = new Date(contextValue?.[0] || null)
        const picker2 = new Date(contextValue?.[1] || null)
        // if the two pickers are in the same month, then set the current month to the second picker
        if (Array.isArray(contextValue) && contextValue?.length && isSameMonth(picker1, picker2)) {
          const year = picker2.getFullYear()
          const month = picker2.getMonth() + 1
          handleSetCurrentMonth(new Date(year, month, 1).getTime())
        } else {
          handleSetCurrentMonth(new Date(picker2.getFullYear(), picker2.getMonth(), 1).getTime())
        }
      }
    } else {
      if (type === 'date' && !Array.isArray(value)) {
        handleSetCurrentMonth(value)
      }
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
    // 如果第一天是周一，那么前面补一排

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
          let rangeDateClass = {}
          if (type === 'date') {
            if (typeof value === 'number') {
              isSelected = isSameDate(date.date, new Date(value))
            }
            if (typeof value === 'string') {
              isSelected = formatDate(date.date, valueFormat || format) === value
            }
          } else {
            if (Array.isArray(value) && type === 'date-range') {
              // if the value is an array, then check if the date is in the array
              isSelected = value.some(item => {
                if (typeof item === 'number') {
                  return isSameDate(date.date, new Date(item))
                }
                if (typeof item === 'string') {
                  return formatDate(date.date, valueFormat || format) === item
                }
                return false
              })
              if (value.length === 2 && !date.secondary) {
                const [start, end] = value
                if (isBetweenDate(date.date, new Date(start), new Date(end))) {
                  rangeDateClass = {
                    [`${prefixPanelClass}-dates__date-range-middle`]: true,
                  }
                }
                if (isSameDate(date.date, new Date(start))) {
                  rangeDateClass = {
                    [`${prefixPanelClass}-dates__date-range-start`]: true,
                  }
                }
                if (isSameDate(date.date, new Date(end))) {
                  rangeDateClass = {
                    [`${prefixPanelClass}-dates__date-range-end`]: true,
                  }
                }
              }
            }
          }
          const dateClassName = classNames(`${prefixPanelClass}-dates__date`, {
            [`${prefixPanelClass}-dates__date-secondary`]: date.secondary,
            [`${prefixPanelClass}-dates__date-today`]:
              isSameDate(date.date, new Date()) && !date.secondary,
            [`${prefixPanelClass}-dates__date-selected`]: isSelected && !date.secondary,
            ...rangeDateClass,
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
