import { useDark, useStorage } from '@vueuse/core'
import dayjs from 'dayjs'

export const englishOnly = useStorage('antfu-english-only', false)

export const isDark = useDark()

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
