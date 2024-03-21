import { FormInstance } from '@regen-design/types'
import { useState } from 'react'

export const useForm = (): [FormInstance] => {
  const [formData, setFormData] = useState({})
  return [
    {
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
