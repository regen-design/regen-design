// @flow
import { FC } from 'react'
import { StyledWave } from '@regen-design/theme'
import { WaveProps } from '@regen-design/types/wave'
import { NAME_SPACE } from '@regen-design/constant'
import classNames from 'classnames'
export const Wave: FC<WaveProps> = ({ isActive }) => {
  const waveClass = classNames({
    active: isActive,
  })
  return <StyledWave className={`${NAME_SPACE}-wave ${waveClass}`}></StyledWave>
}
