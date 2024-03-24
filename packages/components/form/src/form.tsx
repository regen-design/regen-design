import React, { createContext, FC, useEffect, useRef } from 'react'
import { FormInstance, FormProps, InternalHooks } from '@regen-design/types'
import { StyledForm, StyledFormPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { InnerInstance, useForm } from './useForm'
import { FORM_INTERNAL_HOOKS } from './constant'
export const FormContext = createContext<
  Partial<
    {
      componentName?: string
      formRef: React.RefObject<HTMLFormElement>
    } & FormInstance &
      InternalHooks
  >
>({})
export const Form: FC<FormProps> = ({
  style = {},
  className = '',
  form,
  inline = false,
  children,
  onFinish,
  onFinishFailed,
}) => {
  const formClass = classNames(prefixClass, className, {
    [`${prefixClass}-inline`]: inline,
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [formInstance] = useForm(form)
  const internalHooks = (formInstance as InnerInstance).getInternalHooks(FORM_INTERNAL_HOOKS)
  useEffect(() => {
    internalHooks.setCallbacks('onFinish', onFinish)
    internalHooks.setCallbacks('onFinishFailed', onFinishFailed)
  }, [onFinish, onFinishFailed, internalHooks])

  return (
    <FormContext.Provider
      value={{ ...formInstance, ...internalHooks, componentName: prefixClass, formRef }}
    >
      <StyledForm
        style={style}
        ref={formRef}
        className={formClass}
        onSubmit={e => {
          e.stopPropagation()
          e.preventDefault()
          formInstance.submit()
        }}
      >
        {children}
      </StyledForm>
    </FormContext.Provider>
  )
}
