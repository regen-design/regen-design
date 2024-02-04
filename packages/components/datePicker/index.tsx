import {
  createContext,
  FC,
  ForwardedRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DatePickerProps } from '@regen-design/types'
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
import { useOutsideClick } from '@regen-design/hooks'
const DatePickerContext = createContext<{
  isFocused: boolean
  wrapperRect: DOMRect | null
}>({
  isFocused: false,
  wrapperRect: null,
})
const DatePickerPanel = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { isFocused, wrapperRect } = useContext(DatePickerContext)
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
            <div className={`${prefixPanelClass}-month__fast-prev`}>
              <AngleDoubleLeftIcon />
            </div>
            <div className={`${prefixPanelClass}-month__prev`}>
              <AngleLeftIcon />
            </div>
            <div className={`${prefixPanelClass}-month__month-year`}>
              <div className={`${prefixPanelClass}-month__text`}>2021年9月</div>
            </div>
            <div className={`${prefixPanelClass}-month__next`}>
              <AngleRightIcon />
            </div>
            <div className={`${prefixPanelClass}-month__fast-next`}>
              <AngleDoubleRightIcon />
            </div>
          </div>
          <div className={`${prefixPanelClass}-weekdays`}>
            <div>日</div>
            <div>一</div>
            <div>二</div>
            <div>三</div>
            <div>四</div>
            <div>五</div>
            <div>六</div>
          </div>
          <div className={`${prefixPanelClass}-dates`}>日期</div>
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
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const datePickerClass = classNames(prefixClass, className)
  const [isFocused, setIsFocused] = useState(false)
  const [wrapperRect, setWrapperRect] = useState<DOMRect | null>(null)
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
  return (
    <DatePickerContext.Provider
      value={{
        isFocused,
        wrapperRect,
      }}
    >
      <StyledDatePicker
        ref={wrapperRef}
        role="datePicker"
        className={datePickerClass}
        style={style}
        onClick={() => {
          setIsFocused(true)
        }}
      >
        <Input ref={inputRef} placeholder={placeholder} suffix={<CalendarIcon />} />
        <DatePickerPanel ref={panelRef} />
      </StyledDatePicker>
    </DatePickerContext.Provider>
  )
}
