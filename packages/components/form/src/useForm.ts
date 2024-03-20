import { FormInstance } from '@regen-design/types'
import { useState } from 'react'
import { useFormStore } from './store'

export const useForm = (): [FormInstance] => {
  const [formData, setFormData] = useState({})
  const [formElement] = useFormStore(state => [state.formElement])
  return [
    {
      submit: () => {
        formElement.submit()
      },
      getFieldsValue: () => {
        return formData
      },
      getFieldValue: name => {
        return formData[name]
      },
      setFieldsValue: values => {
        setFormData({
          ...formData,
          ...values,
        })
      },
      setFieldValue: (name, value) => {
        formData[name] = value
        setFormData({ ...formData })
      },
      validateFields: () => Promise.resolve(),
    },
  ]
}
