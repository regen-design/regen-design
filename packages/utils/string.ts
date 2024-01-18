/**
 * @description: Convert string to camelCase
 * @param str Characters that need to be converted
 * @param chat default '' Characters spliced into each segment
 */
export const convertToUpperCase = (str: string, chat: string = ''): string => {
  let result = ''
  const strings = str.split('-')
  for (const s of strings) {
    result += s.charAt(0).toUpperCase() + s.slice(1) + chat
  }
  return result
}

/**
 * @description: Convert string to camelCase
 * @param str Characters that need to be converted
 */
export const convertToLowerCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
