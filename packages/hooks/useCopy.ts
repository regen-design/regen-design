import { useState } from 'react'

export function useCopy(): [(text: string) => void, boolean] {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = (text: string) => {
    if (!window?.navigator?.clipboard) return console.error('Not support clipboard API')
    window?.navigator?.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 500)
    })
  }

  return [handleCopy, isCopied]
}
