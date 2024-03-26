import React from 'react'
import { describe, expect, test, vitest } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Button } from '.'
import { Size, Type } from '@regen-design/types'
import { StyledButtonPrefixClass as prefixClass } from '@regen-design/theme'
describe('Button', () => {
  test('Trigger wave effects when clicking the button', async () => {
    const onClickMock = vitest.fn()
    render(<Button onClick={onClickMock}>click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const wave = button.querySelector("[role='wave']")
    expect(onClickMock).toHaveBeenCalled()
    await waitFor(() => {
      expect(wave).toHaveClass('active')
    })
  })
  test("disabled button can't trigger wave effects", async () => {
    const onClickMock = vitest.fn()
    render(
      <Button disabled onClick={onClickMock}>
        click me
      </Button>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClickMock).not.toHaveBeenCalled()
  })
  test('should work with `type` prop', () => {
    ;(['primary', 'info', 'success', 'warning2', 'error'] as Type[]).forEach(type => {
      render(<Button type={type}>{type}</Button>)
    })
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toHaveClass(`${prefixClass}--${button.textContent}`)
    })
  })
  test('should work with `size` prop', () => {
    ;(['tiny', 'small', 'default', 'large'] as Size[]).forEach(size => {
      render(<Button size={size}>{size}</Button>)
    })
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toMatchSnapshot()
    })
  })
  test('should work with `dashed` prop', () => {
    render(<Button dashed>dashed</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
  })
  test('should work with `text` prop', () => {
    render(<Button text>text</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    expect(button).toHaveTextContent('text')
  })
  test('should work with `circle` prop', () => {
    render(<Button circle>circle</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    const style = window.getComputedStyle(button)
    const width = style.getPropertyValue('width')
    const height = style.getPropertyValue('height')
    expect(width).toBe(height)
  })
  test('should work with `rounded` prop', () => {
    render(<Button rounded>rounded</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    const style = window.getComputedStyle(button)
    const borderRadius = style.getPropertyValue('border-radius')
    const height = style.getPropertyValue('height')
    expect(borderRadius).toBe(height)
  })
  test('should work with `block` prop', () => {
    render(<Button block>block</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    const style = window.getComputedStyle(button)
    const display = style.getPropertyValue('display')
    const width = style.getPropertyValue('width')
    expect(display).toBe('flex')
    expect(width).toBe('100%')
  })
  test('should work with `color` prop', () => {
    render(<Button color="#f00">color</Button>)
    const button = screen.getByRole('button')
    expect(button).toMatchSnapshot()
    const style = window.getComputedStyle(button)
    const color = style.getPropertyValue('background-color')
    expect(color).toBe('#f00')
  })
  test('should work with `icon` prop', () => {
    render(<Button icon={<span>icon</span>}></Button>)
    const button = screen.getByRole('button')
    const icon = screen.getByText('icon')
    expect(button).toMatchSnapshot()
    expect(button).toContainElement(icon)
  })
  test('should work with `loading` prop', () => {
    const onClickMock = vitest.fn()
    render(
      <Button loading onClick={onClickMock}>
        loading
      </Button>
    )
    const button = screen.getByRole('button')
    const icon = screen.getByText('loading')
    expect(button).toMatchSnapshot()
    expect(button).toContainElement(icon)

    fireEvent.click(button)
    expect(onClickMock).not.toHaveBeenCalled()
  })
})
