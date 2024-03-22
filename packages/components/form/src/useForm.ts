import { FormInstance } from '@regen-design/types'
import { useRef, useState } from 'react'

class FormStore {
  constructor(private forceReRender: () => void) {}
  public store = {}
  public submit = () => {
    console.log(this)
  }
  public getFieldsValue = () => {
    return { ...this.store }
  }
  public getFieldValue = (name: string | number) => {
    return this.store[name]
  }
  public setFieldsValue = values => {
    this.store = {
      ...this.store,
      ...values,
    }
    this.forceReRender()
  }
  public setFieldValue = (name, value) => {
    this.store[name] = value
    this.forceReRender()
  }
  public validateFields = () => {
    return Promise.resolve()
  }
  public getForm = (): FormInstance => ({
    getFieldsValue: this.getFieldsValue,
    getFieldValue: this.getFieldValue,
    setFieldsValue: this.setFieldsValue,
    setFieldValue: this.setFieldValue,
    validateFields: this.validateFields,
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
