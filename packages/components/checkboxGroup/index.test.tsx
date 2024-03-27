import '@testing-library/jest-dom/vitest'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxGroup } from './'
describe('checkboxGroup', () => {
  test('renders checkboxGroup', () => {
    const element = render(<CheckboxGroup />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkboxGroup')).toBeInTheDocument()
  })

  test('renders checkboxGroup with options', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]
    const element = render(<CheckboxGroup options={options} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkboxGroup')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  test('renders checkboxGroup with default value', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]
    const element = render(<CheckboxGroup options={options} defaultValue={['option1']} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkboxGroup')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(
      screen.getByText('Option 1').parentElement.querySelector("svg[data-icon*='check']")
    ).toBeInTheDocument()
  })

  test('renders checkboxGroup with value', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]
    const element = render(<CheckboxGroup options={options} value={['option1']} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('checkboxGroup')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(
      screen.getByText('Option 1').parentElement.querySelector("svg[data-icon*='check']")
    ).toBeInTheDocument()
  })
})
