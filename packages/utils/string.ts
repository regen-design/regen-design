export const convertToTitleCase = (str: string): string => {
  let result = ''
  const strings = str.split('-')
  for (const s of strings) {
    result += s.charAt(0).toUpperCase() + s.slice(1) + ' '
  }
  return result
}
