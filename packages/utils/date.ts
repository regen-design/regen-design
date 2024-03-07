export const formatDate = (date: Date | number | string, format: string = 'YYYY-MM-DD') => {
  if (!(date instanceof Date)) date = new Date(date)
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

export const isSameDate = (date1: Date, date2: Date) => {
  const d1 = new Date(date1?.getFullYear(), date1?.getMonth(), date1?.getDate())
  const d2 = new Date(date2?.getFullYear(), date2?.getMonth(), date2?.getDate())
  return d1.getTime() === d2.getTime()
}

export const isSameMonth = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
}

export const isBetweenDate = (date: Date, start: Date, end: Date) => {
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
}
