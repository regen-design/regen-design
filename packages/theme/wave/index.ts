import styled from 'styled-components'
import { convertTheme } from '../tools'
import { WaveProps } from '@regen-design/types/wave'
import { WaveAnimationKeyframes } from '../animations'

export const StyledWave = styled.div<WaveProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  animation-iteration-count: 1;
  animation-duration: ${props => convertTheme(props.theme).animations.duration + 'ms'};
  animation-timing-function: ease-in;
  &.active {
    animation-name: ${WaveAnimationKeyframes};
  }
`
