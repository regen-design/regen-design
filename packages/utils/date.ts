export const formatDate = (date: Date, format: string = 'YYYY-MM-DD') => {
  const map: { [key: string]: number } = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  }
  return format.replace(/Y+|M+|D+|h+|m+|s+/g, str => {
    return map[str[0]].toString().padStart(str.length, '0')
  })
}
