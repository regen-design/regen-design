import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { NumberAnimationProps, NumberAnimationInstance } from '@regen-design/types'
import {
  StyledNumberAnimation,
  StyledNumberAnimationPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
import { useMergedState } from '@regen-design/hooks'
import gsap from 'gsap'

export const NumberAnimation = forwardRef<NumberAnimationInstance, NumberAnimationProps>(
  (
    {
      style = {},
      className = '',
      from = 0,
      to = 100,
      duration = 1000,
      delay = 0,
      precision = 0,
      active = false,
      onComplete,
      onUpdate,
    },
    ref
  ) => {
    const [value, setValue] = useMergedState(from)
    const timer = useRef<GSAPTween>(null)
    const numberAnimationClass = classNames(prefixClass, className)
    const play = () => {
      if (active === false) return
      if (timer.current) timer.current.kill()
      const tmp = { value }
      timer.current = gsap.fromTo(
        tmp,
        { value: from },
        {
          value: to,
          duration: duration / 1000,
          delay,
          onUpdate: () => {
            onUpdate?.(tmp.value)
            setValue(Number(tmp.value.toFixed(precision)))
          },
          onComplete() {
            onComplete?.()
          },
        }
      )
    }
    useImperativeHandle(ref, () => ({
      play,
    }))
    useEffect(() => {
      play()
    }, [from, to, active])
    return (
      <StyledNumberAnimation role="numberAnimation" className={numberAnimationClass} style={style}>
        {value.toFixed(precision)}
      </StyledNumberAnimation>
    )
  }
)
NumberAnimation.displayName = 'NumberAnimation'
