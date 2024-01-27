import { FC, useEffect, useState } from 'react'
import { CheckboxGroupProps } from '@regen-design/types'
import {
  StyledCheckboxGroup,
  StyledCheckboxGroupPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { Checkbox } from '../checkbox'
import { Space } from '../space'
export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  style = {},
  className = '',
  options,
  defaultValue,
  value,
  onChange,
}) => {
  const checkboxGroupClass = classNames(prefixClass, className)
  const [valueList, setValueList] = useState<string[]>([])
  useEffect(() => {
    if (value === undefined) {
      setValueList(defaultValue)
    } else {
      setValueList(value)
    }
  }, [value, defaultValue])
  return (
    <StyledCheckboxGroup role="checkboxGroup" className={checkboxGroupClass} style={style}>
      <Space>
        {options.map((option, index) => {
          return (
            <Checkbox
              key={index}
              disabled={option.disabled}
              onChange={checked => {
                if (checked) {
                  valueList.push(option.value)
                } else {
                  valueList.splice(valueList.indexOf(option.value), 1)
                }
                onChange && onChange(valueList)
              }}
            >
              {option.label}
            </Checkbox>
          )
        })}
      </Space>
    </StyledCheckboxGroup>
  )
}
