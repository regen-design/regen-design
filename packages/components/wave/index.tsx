import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { StyledWave, StyledWavePrefixClass as prefixClass } from '@regen-design/theme'
import { WaveProps, WaveRefProps } from '@regen-design/types'
import classNames from 'classnames'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

export const Wave = forwardRef<WaveRefProps, WaveProps>(({ type = 'default', color }, ref) => {
  const timer = useRef<number>(0)
  const selfRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const waveClass = classNames({
    active,
  })

  const play = () => {
    if (timer.current > 0) {
      window.clearTimeout(timer.current)
      setActive(() => false)
      timer.current = 0
    }
    setTimeout(() => {
      void selfRef.current?.offsetHeight
      setActive(() => true)
      timer.current = window.setTimeout(() => {
        setActive(() => false)
        timer.current = 0
      }, 1000)
    }, 0)
  }
  useImperativeHandle(ref, () => ({
    play,
  }))
  useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current)
      }
    }
  }, [])
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledWave
        ref={selfRef}
        type={type}
        color={color}
        aria-hidden
        role="wave"
        className={`${prefixClass} ${waveClass}`}
      />
    </StyleSheetManager>
  )
})

Wave.displayName = 'Wave'
