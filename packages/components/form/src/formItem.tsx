import { FC } from 'react'
import { FormItemProps } from '@regen-design/types'
import { StyledFormItem, StyledFormItemPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const FormItem: FC<FormItemProps> = ({ className, children, name, label, required }) => {
  const formItemClass = classNames(prefixClass, className)
  return (
    <StyledFormItem className={formItemClass}>
      {label && (
        <label className={`${formItemClass}-label`} htmlFor={name}>
          <span className={`${formItemClass}-label__text`}>{label}</span>
          <span className={`${formItemClass}-label__mark ${!required ? 'hidden' : ''}`}>*</span>
        </label>
      )}
      <div className={`${formItemClass}-blank`}>{children}</div>
      <div className={`${formItemClass}-feedback`}></div>
    </StyledFormItem>
  )
}
