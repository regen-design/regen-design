import { cloneElement, FC, ReactElement, useContext, useState } from 'react'
import { FormItemProps } from '@regen-design/types'
import { StyledFormItem, StyledFormItemPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { FormContext } from './form'
export const FormItem: FC<FormItemProps> = ({
  className,
  children,
  name,
  label,
  required,
  rules,
}) => {
  const formItemClass = classNames(prefixClass, className)
  const [errorMessages, setErrorMessages] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const { getFieldValue, setFieldValue, componentName } = useContext(FormContext)
  if (!componentName) {
    throw new Error('FormItem must be wrapped in a Form component')
  }
  const validate = value => {
    if (rules) {
      let isError = false
      for (let i = 0; i < rules.length; i++) {
        if (rules[i].required && !value) {
          setErrorMessages(rules[i].message)
          isError = true
        }
      }
      setIsError(isError)
    }
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
            validate(value)
            setFieldValue(name, value)
          },
          onBlur: () => {
            validate(getFieldValue(name))
          },
        })}
      </div>
      <motion.div
        animate={isError ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, scaleY: 1, transformOrigin: 'top' },
          closed: { opacity: 0, scaleY: 0, transformOrigin: 'top' },
        }}
        className={`${formItemClass}-feedback ${isError ? `${formItemClass}-feedback__error` : ''}`}
      >
        {<div className={`${formItemClass}-feedback__line`}>{errorMessages}</div>}
      </motion.div>
    </StyledFormItem>
  )
}
