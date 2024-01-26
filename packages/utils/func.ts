/**
 * throttle function
 * @param func
 * @param delay
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let timerId: ReturnType<typeof setTimeout> | null
  let lastExecTime = 0

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    const currentTime = Date.now()
    const elapsedTime = currentTime - lastExecTime

    if (!timerId && elapsedTime > delay) {
      const result = func.apply(this, args)
      lastExecTime = currentTime
      return result
    } else {
      clearTimeout(timerId!)
      timerId = setTimeout(() => {
        const result = func.apply(this, args)
        lastExecTime = Date.now()
        timerId = null
        return result
      }, delay - elapsedTime)
    }
  }
}

/**
 * debounce function
 * @param func
 * @param delay
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null
  return function (this: any, ...args: Parameters<T>): void {
    clearTimeout(timerId!)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
