import { useReducer } from 'react'

export function useUpdate(): () => void {
  const [, update] = useReducer((num: number): number => num + 1, 0)

  return update
}
