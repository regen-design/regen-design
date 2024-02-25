import { createContext, FC, Fragment, useMemo } from 'react'
import { RadioGroupProps } from '@regen-design/types'
import { StyledRadioGroup, StyledRadioGroupPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { Space } from '../space'
import { Radio } from '../radio'
import { useMergedState } from '@regen-design/hooks'

export const RadioGroupContext = createContext<
  Pick<RadioGroupProps, 'optionType'> & {
    optionsLength: number
  }
>({
  optionType: 'default',
  optionsLength: 0,
})
export const RadioGroup: FC<RadioGroupProps> = ({
  style = {},
  className = '',
  options,
  defaultValue,
  value,
  onChange,
  optionType = 'default',
  size = 'default',
}) => {
  const radioGroupClass = classNames(prefixClass, className)
  const [checked, setChecked] = useMergedState(defaultValue, {
    value,
  })
  const currentValue = value ?? checked
  const currentIndex = useMemo(() => {
    return options.findIndex(option => option.value === currentValue)
  }, [currentValue, options])
  return (
    <StyledRadioGroup
      role="radioGroup"
      value={currentValue}
      className={radioGroupClass}
      style={style}
    >
      <RadioGroupContext.Provider value={{ optionType, optionsLength: options.length }}>
        <Space xGap={optionType === 'button' ? 0 : 12}>
          {options.map((option, index) => {
            return (
              <Fragment key={index}>
                <Radio
                  index={index}
                  size={size}
                  checked={currentValue === option.value}
                  disabled={option.disabled}
                  onChange={_checked => {
                    if (_checked) {
                      setChecked(option.value)
                      onChange && onChange(option.value)
                    }
                  }}
                >
                  {option.label}
                </Radio>
                {optionType === 'button' && index < options.length - 1 && (
                  <div
                    className={`${prefixClass}__divider ${
                      currentIndex >= 0 && (currentIndex === index || currentIndex === index + 1)
                        ? `${prefixClass}__divider--active`
                        : ''
                    }`}
                  />
                )}
              </Fragment>
            )
          })}
        </Space>
      </RadioGroupContext.Provider>
    </StyledRadioGroup>
  )
}
