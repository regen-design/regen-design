import { FC, useContext, useRef } from 'react'
import { RadioProps, WaveRefProps } from '@regen-design/types'
import { StyledRadio, StyledRadioPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { Wave } from '../wave'
import { RadioGroupContext } from '../radioGroup'
import { useMergedState } from '@regen-design/hooks'
export const Radio: FC<RadioProps> = ({
  style = {},
  className = '',
  size = 'default',
  checked: WChecked = false,
  disabled,
  children,
  onChange,
  index,
  defaultChecked,
}) => {
  const { optionType, optionsLength } = useContext(RadioGroupContext)
  const radioClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
  })

  const [checked, setChecked] = useMergedState(defaultChecked, {
    value: WChecked,
  })
  const waveRef = useRef<WaveRefProps>(null)
  return (
    <StyledRadio
      role="radio"
      size={size}
      index={index}
      checked={WChecked ?? checked}
      disabled={disabled}
      className={radioClass}
      optionType={optionType}
      optionsLength={optionsLength}
      tabIndex={0}
      style={style}
      onClick={() => {
        if (disabled) return
        if (checked) return
        const _checked = !checked
        waveRef.current?.play()
        setChecked(_checked)
        onChange?.(_checked)
      }}
    >
      {optionType === 'button' ? (
        <>
          <span className={`${prefixClass}-button`}>
            <Wave ref={waveRef} />
            {children}
          </span>
        </>
      ) : (
        <>
          <div className={`${prefixClass}-wrapper`}>
            &nbsp;
            <div className={`${prefixClass}-box`}>
              <Wave ref={waveRef} />
              <div className={`${prefixClass}-inner`}></div>
              <div className={`${prefixClass}-box__border`}></div>
            </div>
          </div>
          <span className={`${prefixClass}-label`}>{children}</span>
        </>
      )}
    </StyledRadio>
  )
}
