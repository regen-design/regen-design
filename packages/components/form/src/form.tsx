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
    } & FormInstance &
      InternalHooks &
      FormProps
  >
>({})
export const Form: FC<FormProps> = props => {
  const { children, className, style, inline, form, onFinish, onFinishFailed } = props
  const formClass = classNames(prefixClass, className, {
    [`${prefixClass}-inline`]: inline,
  })

  const [formInstance] = useForm(form)
  const internalHooks = (formInstance as InnerInstance).getInternalHooks(FORM_INTERNAL_HOOKS)
  useEffect(() => {
    internalHooks.setCallbacks('onFinish', onFinish)
    internalHooks.setCallbacks('onFinishFailed', onFinishFailed)
  }, [onFinish, onFinishFailed, internalHooks])

  return (
    <FormContext.Provider
      value={{ ...formInstance, ...internalHooks, ...props, componentName: prefixClass }}
    >
      <StyledForm
        style={style}
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
