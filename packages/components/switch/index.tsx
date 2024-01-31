import { FC } from 'react'
import { SwitchProps } from '@regen-design/types'
import { StyledSwitch, StyledSwitchPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Switch: FC<SwitchProps> = ({ style = {}, className = '' }) => {
  const switchClass = classNames(prefixClass, className)
  return <StyledSwitch role="switch" className={switchClass} style={style}></StyledSwitch>
}
