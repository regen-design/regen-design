import { FC, useRef, useState } from 'react'
import { SwitchProps, WaveRefProps } from '@regen-design/types'
import { StyledSwitch, StyledSwitchPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { Wave } from '../wave'
export const Switch: FC<SwitchProps> = ({ style = {}, className = '' }) => {
  const switchClass = classNames(prefixClass, className)
  const [value, setValue] = useState(false)
  const waveRef = useRef<WaveRefProps>(null)
  return (
    <StyledSwitch
      role="switch"
      className={switchClass}
      style={style}
      checked={value}
      onClick={() => {
        waveRef.current?.play()
        setValue(!value)
      }}
    >
      <Wave ref={waveRef} />
      <div className={`${prefixClass}-inner`}>
        <div className={`${prefixClass}-handle`}></div>
      </div>
    </StyledSwitch>
  )
}
