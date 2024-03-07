export type DateType = Date | number | string
export const formatDate = (date: DateType, format: string = 'YYYY-MM-DD') => {
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

export const isSameDate = (date1: DateType, date2: DateType) => {
  if (!(date1 instanceof Date)) date1 = new Date(date1)
  if (!(date2 instanceof Date)) date2 = new Date(date2)
  const d1 = new Date(date1?.getFullYear(), date1?.getMonth(), date1?.getDate())
  const d2 = new Date(date2?.getFullYear(), date2?.getMonth(), date2?.getDate())
  return d1.getTime() === d2.getTime()
}

export const isSameMonth = (date1: DateType, date2: DateType) => {
  if (!(date1 instanceof Date)) date1 = new Date(date1)
  if (!(date2 instanceof Date)) date2 = new Date(date2)
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
}

export const isBetweenDate = (date: DateType, start: DateType, end: DateType) => {
  if (!(date instanceof Date)) date = new Date(date)
  if (!(start instanceof Date)) start = new Date(start)
  if (!(end instanceof Date)) end = new Date(end)
  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
}

export const getPrevMonth = (date: DateType = new Date()) => {
  if (!(date instanceof Date)) date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth()
  return new Date(year, month - 1, 1)
}
export const getCurrentMonth = (date: DateType = new Date()) => {
  if (!(date instanceof Date)) date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth()
  return new Date(year, month, 1)
}
export const getNextMonth = (date: DateType = new Date()) => {
  if (!(date instanceof Date)) date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth()
  return new Date(year, month + 1, 1)
}
