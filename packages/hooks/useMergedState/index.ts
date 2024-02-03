import { useEffect, useState } from 'react'

export function useMergedState<T>(
  defaultStateValue: T | (() => T),
  option?: {
    value?: T
  }
) {
  const { value } = option || {}
  const [innerValue, setInnerValue] = useState<T>(() => {
    if (value !== undefined) {
      return value
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
