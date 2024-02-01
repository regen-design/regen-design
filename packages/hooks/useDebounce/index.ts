import { useCallback } from 'react'
import { debounce } from '@regen-design/utils'
import { useLatest } from '../useLatest'

export const useDebounce = <T extends (...args: any[]) => any>(func: T, wait: number = 300) => {
  const fnRef = useLatest(func)
  const _debounce = useCallback(
    debounce((...args: Parameters<T>): ReturnType<T> => {
      return fnRef.current(...args)
    }, wait),
    []
  )
  return [_debounce]
}
