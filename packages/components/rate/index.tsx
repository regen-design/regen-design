import React, { FC, useRef, useState } from 'react'
import { RateProps } from '@regen-design/types'
import { StyledRate, StyledRatePrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { StarFillIcon } from '@regen-design/icons'
import { useMergedState } from '@regen-design/hooks'
export const Rate: FC<RateProps> = ({
  style = {},
  className = '',
  count = 5,
  value: valueProps,
  color = '#FFCC33',
  onChange,
  disabled = false,
  defaultValue,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  const [hoverValue, setHoverValue] = useState(defaultValue)
  const [value, setValue] = useMergedState(defaultValue, { value: valueProps })
  const computedActiveCount = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrapperElement = wrapperRef.current
    const rect = wrapperElement.getBoundingClientRect()
    const startX = e.clientX
    const offsetX = startX - rect.left
    const width = rect.width
    return Math.ceil((offsetX / width) * count)
  }
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    setIsHover(true)
    const activeCount = computedActiveCount(e)
    setHoverValue(activeCount)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    const activeCount = computedActiveCount(e)
    setValue(activeCount)
    onChange?.(activeCount)
  }
  const rateClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })
  return (
    <StyledRate
      role="rate"
      ref={wrapperRef}
      className={rateClass}
      style={style}
      color={color}
      disabled={disabled}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {Array(count)
        .fill(null)
        .map((_, index) => {
          const isActive = isHover ? index < hoverValue : index < value
          return (
            <div
              className={`${prefixClass}__item ${isActive ? `${prefixClass}__item--active` : ''}`}
              key={index}
            >
              <StarFillIcon />
            </div>
          )
        })}
    </StyledRate>
  )
}
