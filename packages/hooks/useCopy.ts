import { useRef, useState } from 'react'

export function useCopy(): [(text: string) => void, boolean] {
  const [isCopied, setIsCopied] = useState(false)
  const timer = useRef<number | null>(null)
  const handleCopy = (text: string) => {
    if (!window?.navigator?.clipboard) return console.error('Not support clipboard API')
    if (timer.current) {
      window?.clearTimeout(timer.current)
      timer.current = null
      setIsCopied(() => false)
    }
    window?.navigator?.clipboard.writeText(text).then(() => {
      setIsCopied(() => true)
      timer.current = window?.setTimeout(() => {
        setIsCopied(() => false)
      }, 500)
    })
  }

  return [handleCopy, isCopied]
}
