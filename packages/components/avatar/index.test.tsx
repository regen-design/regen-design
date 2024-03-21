import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'
import { defaultTheme } from '@regen-design/theme'

describe('Avatar', () => {
  test('should render correctly', () => {
    const element = render(<Avatar />)
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  test('should render children', () => {
    const element = render(<Avatar>Avatar</Avatar>)
    expect(element).toMatchSnapshot()
    expect(screen.getByText('Avatar')).toBeInTheDocument()
  })

  test('should render src', () => {
    const element = render(
      <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    )
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar').querySelector('img')).toHaveAttribute(
      'src',
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    )
  })

  test('should render size', () => {
    const element = render(<Avatar size={'default'} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar')).toHaveStyle(
      `width: ${defaultTheme.components.avatar.size['default']}`
    )
    expect(screen.getByTestId('avatar')).toHaveStyle(
      `height: ${defaultTheme.components.avatar.size['default']}`
    )
  })

  test('should render rounded', () => {
    const element = render(<Avatar rounded />)
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar')).toHaveStyle('border-radius: 50%')
  })

  test('should render style', () => {
    const element = render(<Avatar style={{ color: 'red' }} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar')).toHaveStyle('color: red')
  })

  test('should render className', () => {
    const element = render(<Avatar className="test" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByTestId('avatar')).toHaveClass('test')
  })
})
