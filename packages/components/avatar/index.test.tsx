import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'
import { defaultTheme } from '@regen-design/theme'

describe('Avatar', () => {
  test('should render correctly', () => {
    render(<Avatar />)
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  test('should render children', () => {
    render(<Avatar>Avatar</Avatar>)
    expect(screen.getByText('Avatar')).toBeInTheDocument()
  })

  test('should render src', () => {
    render(<Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />)
    expect(screen.getByTestId('avatar').querySelector('img')).toHaveAttribute(
      'src',
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    )
  })

  test('should render size', () => {
    render(<Avatar size={'default'} />)
    expect(screen.getByTestId('avatar')).toHaveStyle(
      `width: ${defaultTheme.components.avatar.size['default']}`
    )
    expect(screen.getByTestId('avatar')).toHaveStyle(
      `height: ${defaultTheme.components.avatar.size['default']}`
    )
  })

  test('should render rounded', () => {
    render(<Avatar rounded />)
    expect(screen.getByTestId('avatar')).toHaveStyle('border-radius: 50%')
  })

  test('should render style', () => {
    render(<Avatar style={{ color: 'red' }} />)
    expect(screen.getByTestId('avatar')).toHaveStyle('color: red')
  })

  test('should render className', () => {
    render(<Avatar className="test" />)
    expect(screen.getByTestId('avatar')).toHaveClass('test')
  })
})
