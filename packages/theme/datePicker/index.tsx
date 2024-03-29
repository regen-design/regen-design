import { NAME_SPACE } from '@regen-design/constant'
import { DatePickerProps, DatePickerValueType } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-datePicker`
export * from './datePickerPanel'
export const StyledDatePickerPrefixClass = prefix
export const StyledDatePicker = styled.div<DatePickerProps<DatePickerValueType>>`
  position: relative;
  z-index: auto;
`
