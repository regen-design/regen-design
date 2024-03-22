import { CommonType } from '../common'

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
}
