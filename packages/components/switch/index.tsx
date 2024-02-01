import { FC, useEffect, useRef, useState } from 'react'
import { SwitchProps, WaveRefProps } from '@regen-design/types'
import { useMergedState } from '@regen-design/hooks'
import { StyledSwitch, StyledSwitchPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { Wave } from '../wave'
export const Switch: FC<SwitchProps> = ({
  style = {},
  className = '',
  disabled,
  checked,
  onChange,
  rounded = true,
  size = 'default',
  checkedChildren,
  unCheckedChildren,
}) => {
  const switchClass = classNames(prefixClass, className)
  const [innerValue, setInnerValue] = useMergedState(false, {
    value: checked,
    defaultValue: false,
  })
  const waveRef = useRef<WaveRefProps>(null)
  const checkedChildrenRef = useRef<HTMLDivElement>(null)
  const unCheckedChildrenRef = useRef<HTMLDivElement>(null)
  const [maxInnerWidth, setMaxInnerWidth] = useState(0)
  useEffect(() => {
    if (checkedChildrenRef.current) {
      const { width } = checkedChildrenRef.current.getBoundingClientRect()
      if (width > maxInnerWidth) {
        setMaxInnerWidth(width)
      }
    }
    if (unCheckedChildrenRef.current) {
      const { width } = unCheckedChildrenRef.current.getBoundingClientRect()
      if (width > maxInnerWidth) {
        setMaxInnerWidth(width)
      }
    }
  }, [checkedChildren, checkedChildrenRef])
  return (
    <StyledSwitch
      role="switch"
      className={switchClass}
      style={style}
      checked={innerValue}
      disabled={disabled}
      rounded={rounded}
      innerWidth={maxInnerWidth}
      size={size}
      tabIndex={0}
      onClick={() => {
        if (disabled) return
        waveRef.current?.play()
        setInnerValue(!innerValue)
        onChange?.(!innerValue)
      }}
    >
      <Wave ref={waveRef} />
      <div className={`${prefixClass}-inner`}>
        <div className={`${prefixClass}-handle`}>
          {checkedChildren && (
            <div ref={checkedChildrenRef} className={`${prefixClass}-checked`}>
              {checkedChildren}
            </div>
          )}
          {unCheckedChildren && (
            <div ref={unCheckedChildrenRef} className={`${prefixClass}-unchecked`}>
              {unCheckedChildren}
            </div>
          )}
        </div>
      </div>
    </StyledSwitch>
  )
}
