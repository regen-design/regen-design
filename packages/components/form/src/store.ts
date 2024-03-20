import { create } from 'zustand'

interface State {
  formElement: HTMLFormElement | null
  setFormElement: (formRef: State['formElement']) => void
}
export const useFormStore = create<State>(set => ({
  formElement: null,
  setFormElement: formElement => set({ formElement }),
}))
