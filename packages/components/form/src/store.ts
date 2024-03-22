import { create } from 'zustand'
import { FormProps } from '@regen-design/types'

interface State {
  formElement: HTMLFormElement | null
  setFormElement: (formRef: State['formElement']) => void
  formProps: FormProps
  setFormProps: (formProps: State['formProps']) => void
}
export const useFormStore = create<State>(set => ({
  formElement: null,
  setFormElement: formElement => set({ formElement }),
  formProps: {},
  setFormProps: formProps => set({ formProps }),
}))
