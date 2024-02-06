import { FC, useEffect, useRef } from 'react'
import { SliderProps } from '@regen-design/types'
import { StyledSlider, StyledSliderPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useMergedState } from '@regen-design/hooks'
export const Slider: FC<SliderProps> = ({
  style = {},
  className = '',
  value: valueProps,
  onChange,
  max = 100,
  min = 0,
  defaultValue,
  disabled = false,
}) => {
  const thumbRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const sliderClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })
  const [value, setValue] = useMergedState(defaultValue, {
    value: valueProps,
  })
  useEffect(() => {
    if (thumbRef.current && innerRef.current && trackRef.current) {
      thumbRef.current.onmousedown = e => {
        if (disabled) return
        const startX = e.clientX
        const originThumbTransition = thumbRef.current.style.transition
        const originTrackTransition = trackRef.current.style.transition
        thumbRef.current.style.transition = 'none'
        trackRef.current.style.transition = 'none'
        const move = (e: MouseEvent) => {
          const rect = innerRef.current.getBoundingClientRect()
          const x = e.clientX - startX
          const percent = x / rect.width
          const newValue = value + Math.floor(percent * 100)
          if (newValue > max || newValue < min) return
          setValue(() => newValue)
          onChange?.(newValue)
        }
        const up = () => {
          document.removeEventListener('mousemove', move)
          document.removeEventListener('mouseup', up)
          thumbRef.current.style.transition = originThumbTransition
          trackRef.current.style.transition = originTrackTransition
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
      }
    }
  }, [value, disabled])

  return (
    <StyledSlider role="slider" disabled={disabled} className={sliderClass} style={style}>
      <div
        className={`${prefixClass}-inner`}
        ref={innerRef}
        onClick={e => {
          if (disabled) return
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const percent = x / rect.width
          const newValue = min + percent * (max - min)
          setValue(Math.floor(newValue))
          onChange?.(Math.floor(newValue))
        }}
      >
        <div
          className={`${prefixClass}-track`}
          ref={trackRef}
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        />
        <div
          ref={thumbRef}
          className={`${prefixClass}-thumb-wrap`}
          style={{
            left: `${((value - min) / (max - min)) * 100}%`,
          }}
          onClick={e => {
            e.stopPropagation()
          }}
          tabIndex={0}
        >
          <div className={`${prefixClass}-thumb`} />
        </div>
      </div>
    </StyledSlider>
  )
}
