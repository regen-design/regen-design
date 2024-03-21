import '@testing-library/jest-dom/vitest'
import { describe, test, expect, vitest } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from './index'
import { StyledCheckboxPrefixClass } from '@regen-design/theme'
describe('Checkbox', () => {
  test('should render correctly', () => {
    const element = render(<Checkbox />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
  test('should render checked state correctly', () => {
    const element = render(<Checkbox checked />)
    expect(element).toMatchSnapshot()
    expect(
      screen.getByRole('checkbox').querySelector("svg[data-icon*='check']")
    ).toBeInTheDocument()
  })
  test('should render indeterminate state correctly', () => {
    const element = render(<Checkbox indeterminate />)
    expect(element).toMatchSnapshot()
    expect(
      screen.getByRole('checkbox').querySelector("svg[data-icon*='minus']")
    ).toBeInTheDocument()
  })
  test('should render disabled state correctly', () => {
    const onClickMock = vitest.fn()
    const element = render(<Checkbox disabled />)
    expect(element).toMatchSnapshot()
    fireEvent.click(element.getByRole('checkbox'))
    expect(onClickMock).not.toHaveBeenCalled()
  })
  test('should trigger onChange event', () => {
    let checked = false
    const onChangeMock = vitest.fn(value => (checked = value))
    const element = render(<Checkbox checked={checked} onChange={onChangeMock} />)
    expect(element).toMatchSnapshot()
    fireEvent.click(element.getByRole('checkbox'))
    expect(checked).toBe(true)
  })
  test('should render custom size correctly', () => {
    const element = render(<Checkbox size="small" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkbox')).toHaveClass(`${StyledCheckboxPrefixClass}--small`)
  })
})
