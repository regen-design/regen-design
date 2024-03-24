import { CommonType } from '../common'

export interface ErrorEntity {
  errorFields: ErrorInfo
  outOfDate: boolean
  values: any
}
export interface ErrorInfo {
  name: string
  errors: string[]
}
export interface FieldEntity extends FormItemProps {
  validateRules: (value: any) => Promise<ErrorInfo>
}
export interface InternalHooks {
  setCallbacks: (name: string, callback: any) => () => void
  registerField: (entity: FieldEntity) => () => void
}
export interface FormInstance {
  getFieldValue: (name: string) => any
  getFieldsValue: (nameList?: string[]) => any
  setFieldValue: (name: string, value: any) => void
  setFieldsValue: (values: any) => void
  validateFields: (nameList?: string[]) => Promise<any>
  submit: () => void
}
export interface FormProps extends CommonType {
  /**
   * @description The form control instance created by Form.useForm() will be automatically created if not provided.
   */
  form?: FormInstance
  /**
   * @description The initial values of the form.
   */
  initialValues?: any
  /**
   * @description The form inline layout.
   */
  inline?: boolean
  /**
   * @description The finish event of the form.
   */
  onFinish?: (values: any) => void
  /**
   * @description The finish failed event of the form.
   */
  onFinishFailed?: (errorInfo: ErrorEntity) => void
}

export interface FormItemProps extends CommonType {
  /**
   * @description The key name of the form item.
   */
  name?: string
  /**
   * @description The label of the form item.
   */
  label?: string
  /**
   * @description The required status of the form item.
   */
  required?: boolean
  /**
   * @description The rules of the form item.
   */
  rules?: Rule[]
}

export interface Rule {
  /**
   * @description Is it a required field?
   */
  required?: boolean
  /**
   * @description Error message.
   */
  message?: string
}
