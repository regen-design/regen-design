import { FormInstance } from '@regen-design/types'
import { useRef, useState } from 'react'

interface Callbacks {
  onFinish?: (values: any) => void
  [key: string]: any
}
class FormStore {
  constructor(private forceReRender: () => void) {}
  private store = {}
  private callbacks: Callbacks = {}
  private submit = () => {
    const { onFinish } = this.callbacks
    onFinish?.(this.store)
  }
  private registerField = (name, callback) => {
    this.callbacks[name] = callback
    return () => {
      delete this.callbacks[name]
    }
  }

  private getFieldsValue = () => {
    return { ...this.store }
  }
  private getFieldValue = (name: string | number) => {
    return this.store[name]
  }
  private setFieldsValue = values => {
    this.store = {
      ...this.store,
      ...values,
    }
    this.forceReRender()
  }
  private setFieldValue = (name, value) => {
    this.store[name] = value
    this.forceReRender()
  }
  private validateFields = () => {
    return Promise.resolve()
  }
  public getForm = (): FormInstance => ({
    getFieldsValue: this.getFieldsValue,
    getFieldValue: this.getFieldValue,
    setFieldsValue: this.setFieldsValue,
    setFieldValue: this.setFieldValue,
    validateFields: this.validateFields,
    registerField: this.registerField,
    submit: this.submit,
  })
}
export const useForm = (form?: FormInstance): [FormInstance] => {
  const formRef = useRef<FormInstance>()
  const [, forceUpdate] = useState({})
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const forceReRender = () => {
        forceUpdate({})
      }
      const formStore: FormStore = new FormStore(forceReRender)
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}
