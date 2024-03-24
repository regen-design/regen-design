import { ErrorInfo, FieldEntity, FormInstance, InternalHooks } from '@regen-design/types'
import { useRef, useState } from 'react'
import { FORM_INTERNAL_HOOKS } from './constant'

type InnerInstance = FormInstance & {
  getInternalHooks?: (name: string) => InternalHooks | null
}
interface Callbacks {
  onFinish?: (values: any) => void
  [key: string]: any
}
class FormStore {
  constructor(private forceReRender: () => void) {}
  private store = {}
  private callbacks: Callbacks = {}
  private entities: Map<string, FieldEntity> = new Map()
  private submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks
    const entityPromise: Promise<ErrorInfo>[] = []
    this.entities.forEach(entity => {
      entityPromise.push(entity.validateRules(this.store[entity.name]))
    })
    Promise.all(entityPromise)
      .then(result => {
        if (result.every(item => item.errors.length === 0)) {
          onFinish?.(this.store)
        } else {
          onFinishFailed?.({
            errorFields: result
              .map(item => ({
                name: item.name,
                errors: item.errors,
              }))
              .filter(item => item.errors.length > 0),
            outOfDate: false,
            values: this.store,
          })
        }
      })
      .catch(() => {
        console.error('Form validation failed')
      })
  }
  private setCallbacks = (name: string, callback: any) => {
    this.callbacks[name] = callback
    return () => {
      delete this.callbacks[name]
    }
  }
  private registerField = (entity: any) => {
    this.entities.set(entity.name, entity)
    return () => {
      this.entities.delete(entity.name)
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
  private getInternalHooks = (name: string): InternalHooks => {
    if (name === FORM_INTERNAL_HOOKS) {
      return {
        setCallbacks: this.setCallbacks,
        registerField: this.registerField,
      }
    }
    return null
  }
  public getForm = (): InnerInstance => ({
    getFieldsValue: this.getFieldsValue,
    getFieldValue: this.getFieldValue,
    setFieldsValue: this.setFieldsValue,
    setFieldValue: this.setFieldValue,
    validateFields: this.validateFields,
    submit: this.submit,
    getInternalHooks: this.getInternalHooks,
  })
}
export const useForm = (form?: InnerInstance): [InnerInstance] => {
  const formRef = useRef<InnerInstance>()
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
