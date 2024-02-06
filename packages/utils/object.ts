/**
 * Deep merge two objects
 */
export function deepMerge<T>(target: T, source: T): T {
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source
  }
  const mergedObject = Object.assign({}, target)
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        mergedObject[key] = deepMerge(target[key], source[key])
      } else {
        mergedObject[key] = source[key]
      }
    }
  }
  return mergedObject
}
