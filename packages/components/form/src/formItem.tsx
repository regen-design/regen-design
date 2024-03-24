import { cloneElement, FC, ReactElement, useContext, useEffect, useState } from 'react'
import { FieldEntity, FormItemProps } from '@regen-design/types'
import { StyledFormItem, StyledFormItemPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { FormContext } from './form'
export const FormItem: FC<FormItemProps> = props => {
  const { className, children, name, label, required, rules } = props
  const formItemClass = classNames(prefixClass, className)
  const [errorMessages, setErrorMessages] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const { getFieldValue, setFieldValue, componentName, registerField, labelWidth } =
    useContext(FormContext)
  if (!componentName) {
    throw new Error('FormItem must be wrapped in a Form component')
  }
  const validateRules: FieldEntity['validateRules'] = value => {
    return new Promise(resolve => {
      if (rules) {
        let isError = false
        const errors: string[] = []
        for (let i = 0; i < rules.length; i++) {
          if (rules[i].required && !value) {
            const message = rules[i].message || `${label} is required`
            setErrorMessages(message)
            errors.push(message)
            isError = true
          }
        }
        setIsError(isError)
        if (!isError) {
          resolve({
            name,
            errors: [],
          })
        } else {
          resolve({
            name,
            errors: errors,
          })
        }
      }
    })
  }
  useEffect(() => {
    registerField({
      ...props,
      validateRules,
    })
  }, [registerField])
  return (
    <StyledFormItem className={formItemClass}>
      {label && (
        <label
          className={`${formItemClass}-label`}
          htmlFor={name}
          style={{
            width: labelWidth,
          }}
        >
          <span className={`${formItemClass}-label__text`}>{label}</span>
          <span className={`${formItemClass}-label__mark ${!required ? 'hidden' : ''}`}>*</span>
        </label>
      )}
      <div className={`${formItemClass}-blank`}>
        {cloneElement(children as ReactElement, {
          value: getFieldValue(name),
          onChange: (value: any) => {
            validateRules(value)
            setFieldValue(name, value)
          },
          onBlur: () => {
            validateRules(getFieldValue(name))
          },
        })}
      </div>
      <motion.div
        animate={isError ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, scaleY: 1 },
          closed: { opacity: 0, scaleY: 0 },
        }}
        className={`${formItemClass}-feedback ${isError ? `${formItemClass}-feedback__error` : ''}`}
      >
        {<div className={`${formItemClass}-feedback__line`}>{errorMessages}</div>}
      </motion.div>
    </StyledFormItem>
  )
}
