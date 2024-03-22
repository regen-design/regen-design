import { cloneElement, FC, ReactElement, useContext } from 'react'
import { FormItemProps } from '@regen-design/types'
import { StyledFormItem, StyledFormItemPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { FormContext } from './form'
export const FormItem: FC<FormItemProps> = ({ className, children, name, label, required }) => {
  const formItemClass = classNames(prefixClass, className)
  const { getFieldValue, setFieldValue, componentName } = useContext(FormContext)
  if (!componentName) {
    throw new Error('FormItem must be wrapped in a Form component')
  }
  return (
    <StyledFormItem className={formItemClass}>
      {label && (
        <label className={`${formItemClass}-label`} htmlFor={name}>
          <span className={`${formItemClass}-label__text`}>{label}</span>
          <span className={`${formItemClass}-label__mark ${!required ? 'hidden' : ''}`}>*</span>
        </label>
      )}
      <div className={`${formItemClass}-blank`}>
        {cloneElement(children as ReactElement, {
          value: getFieldValue(name),
          onChange: (value: any) => {
            setFieldValue(name, value)
          },
        })}
      </div>
      <div className={`${formItemClass}-feedback`}></div>
    </StyledFormItem>
  )
}
