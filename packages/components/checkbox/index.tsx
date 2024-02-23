import { FC, useEffect, useRef, useState } from 'react'
import { CheckboxProps, WaveRefProps } from '@regen-design/types'
import { StyledCheckbox, StyledCheckboxPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CheckIcon, MinusIcon } from '@regen-design/icons'
import { Wave } from '../wave'
export const Checkbox: FC<CheckboxProps> = ({
  style = {},
  className = '',
  children,
  size = 'default',
  disabled = false,
  checked: WChecked = false,
  indeterminate = false,
  onChange,
}) => {
  const checkboxClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })
  const waveRef = useRef<WaveRefProps>(null)
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(WChecked)
  }, [WChecked])
  return (
    <StyledCheckbox
      role="checkbox"
      className={checkboxClass}
      style={style}
      size={size}
      checked={checked}
      disabled={disabled}
      tabIndex={0}
      onClick={e => {
        e.stopPropagation()
        if (disabled) return
        const _checked = !checked
        waveRef.current?.play()
        setChecked(_checked)
        onChange?.(_checked)
      }}
    >
      <div className={`${prefixClass}-wrapper`}>
        &nbsp;
        <div className={`${prefixClass}-box`}>
          <Wave ref={waveRef} />
          <div className={`${prefixClass}-icon`}>
            {indeterminate ? <MinusIcon /> : <CheckIcon />}
          </div>
          <div className={`${prefixClass}-box__border`}></div>
        </div>
      </div>
      {children && <span className={`${prefixClass}-label`}>{children}</span>}
    </StyledCheckbox>
  )
}
