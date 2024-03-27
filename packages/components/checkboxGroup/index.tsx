import { FC } from 'react'
import { CheckboxGroupProps } from '@regen-design/types'
import {
  StyledCheckboxGroup,
  StyledCheckboxGroupPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { Checkbox } from '../checkbox'
import { Space } from '../space'
import { useMergedState } from '@regen-design/hooks'
export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  style = {},
  className = '',
  options = [],
  defaultValue,
  value: valueProps,
  onChange,
}) => {
  const checkboxGroupClass = classNames(prefixClass, className)
  const [value] = useMergedState(defaultValue, {
    value: valueProps,
  })
  return (
    <StyledCheckboxGroup role="checkboxGroup" className={checkboxGroupClass} style={style}>
      <Space>
        {options.map((option, index) => {
          return (
            <Checkbox
              key={index}
              disabled={option.disabled}
              checked={value?.includes(option.value)}
              onChange={checked => {
                if (checked) {
                  value?.push(option.value)
                } else {
                  value?.splice(value.indexOf(option.value), 1)
                }
                onChange && onChange([...value])
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
