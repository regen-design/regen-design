import { useEffect, useState } from 'react'

export function useMergedState<T>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T)
    value?: T
  }
) {
  const { defaultValue, value } = option || {}
  const [innerValue, setInnerValue] = useState<T>(() => {
    if (value !== undefined) {
      return value
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? (defaultValue as () => T)?.() : defaultValue
    }
    return typeof defaultStateValue === 'function'
      ? (defaultStateValue as () => T)?.()
      : defaultStateValue
  })

  useEffect(() => {
    if (value !== undefined) {
      setInnerValue(value)
    }
  }, [value])

  return [innerValue, setInnerValue] as const
}
