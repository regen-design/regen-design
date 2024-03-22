import React, { createContext, FC, useEffect, useMemo, useRef } from 'react'
import { FormInstance, FormProps } from '@regen-design/types'
import { StyledForm, StyledFormPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useForm } from './useForm'
import { useFormStore } from './store'
export const FormContext = createContext<
  Partial<
    {
      componentName?: string
      formRef: React.RefObject<HTMLFormElement>
    } & FormInstance
  >
>({})
export const Form: FC<FormProps> = ({
  style = {},
  className = '',
  form,
  inline = false,
  children,
  onFinish,
}) => {
  const formClass = classNames(prefixClass, className, {
    [`${prefixClass}-inline`]: inline,
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [setFormElement] = useFormStore(state => [state.setFormElement, state.setFormProps])
  const [formInstance] = useForm(form)

  useEffect(() => {
    setFormElement(formRef.current)
  }, [setFormElement, formRef])
  return (
    <FormContext.Provider value={{ ...formInstance, componentName: prefixClass, formRef }}>
      <StyledForm style={style} ref={formRef} className={formClass}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  )
}
