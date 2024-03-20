import React, { createContext, FC, useEffect, useMemo, useRef } from 'react'
import { FormProps } from '@regen-design/types'
import { StyledForm, StyledFormPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useForm } from './useForm'
import { useFormStore } from './store'
export const FormContext = createContext<
  Partial<{
    formValue: Record<string, any>
    setFormValue: (value: Record<string, any>) => void
    componentName?: string
    formRef: React.RefObject<HTMLFormElement>
  }>
>({})
export const Form: FC<FormProps> = ({
  style = {},
  className = '',
  form: formProps,
  inline = false,
  children,
  onSubmit,
  onReset,
}) => {
  const formClass = classNames(prefixClass, className, {
    [`${prefixClass}-inline`]: inline,
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [setFormElement] = useFormStore(state => [state.setFormElement])
  const [$form] = useForm()
  const form = useMemo(() => {
    if (formProps) {
      return formProps
    }
    return $form
  }, [formProps, $form])
  const formValue = form.getFieldsValue()
  const setFormValue = form.setFieldsValue
  useEffect(() => {
    setFormElement(formRef.current)
  }, [setFormElement, formRef])
  return (
    <FormContext.Provider value={{ formValue, setFormValue, componentName: prefixClass, formRef }}>
      <StyledForm
        style={style}
        ref={formRef}
        className={formClass}
        onReset={onReset}
        onSubmit={e => {
          e.preventDefault()
          onSubmit?.(formValue)
        }}
      >
        {children}
      </StyledForm>
    </FormContext.Provider>
  )
}
