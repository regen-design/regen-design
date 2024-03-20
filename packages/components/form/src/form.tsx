import { createContext, FC, useMemo } from 'react'
import { FormProps } from '@regen-design/types'
import { StyledForm, StyledFormPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useForm } from './useForm'
export const FormContext = createContext<
  Partial<{
    formValue: Record<string, any>
    setFormValue: (value: Record<string, any>) => void
    componentName?: string
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
  const [$form] = useForm()
  const form = useMemo(() => {
    if (formProps) {
      return formProps
    }
    return $form
  }, [formProps, $form])
  const formValue = form.getFieldsValue()
  const setFormValue = form.setFieldsValue
  return (
    <FormContext.Provider value={{ formValue, setFormValue, componentName: prefixClass }}>
      <StyledForm style={style} className={formClass} onReset={onReset} onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  )
}
