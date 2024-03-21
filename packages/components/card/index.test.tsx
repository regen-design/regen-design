import '@testing-library/jest-dom/vitest'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '.'
import { StyledCardPrefixClass as prefixClass } from '@regen-design/theme'
describe('Card', () => {
  test('should work with `title` prop', () => {
    const element = render(<Card title="title" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-header')).toHaveTextContent('title')
  })
  test('should work with `extra` prop', () => {
    const element = render(<Card extra="extra" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-header')).toHaveTextContent('extra')
  })
  test('should work with `footer` prop', () => {
    const element = render(<Card footer="footer" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-footer')).toHaveTextContent('footer')
  })
  test('should work with `size` prop', () => {
    const element = render(<Card size="small" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card')).toHaveClass(`${prefixClass}--small`)
  })
  test('should work with `className` prop', () => {
    const element = render(<Card className="test" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card')).toHaveClass('test')
  })
  test('should work with `style` prop', () => {
    const element = render(<Card style={{ color: 'red' }} />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card')).toHaveStyle({ color: 'red' })
  })
  test('should work with `footerStyle` prop', () => {
    const element = render(<Card footerStyle={{ color: 'red' }} footer="footer" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-footer')).toHaveStyle({ color: 'red' })
  })
  test('should work with `footerClassName` prop', () => {
    const element = render(<Card footerClassName="test" footer="footer" />)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-footer')).toHaveClass('test')
  })
  test('should work with `children` prop', () => {
    const element = render(<Card>children</Card>)
    expect(element).toMatchSnapshot()
    expect(screen.getByRole('card-body')).toHaveTextContent('children')
  })
})
