import { useEffect, RefObject } from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  callback: () => void
): void => {
  const handleClick = (event: MouseEvent): void => {
    if (Array.isArray(ref)) {
      const isOutside = ref.every(r => r.current && !r.current.contains(event.target as Node))
      if (isOutside) {
        callback()
      }
      return
    }
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback])
}
