import styled from 'styled-components'
import { convertTheme } from '../tools'
import { WaveProps } from '@regen-design/types/wave'
import { WaveSpreadAnimationKeyframes } from '../animations'
import { NAME_SPACE } from '@regen-design/constant'
const prefix = `${NAME_SPACE}-wave`
export const StyledWavePrefixClass = prefix
export const StyledWave = styled.div<WaveProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  animation-iteration-count: 1;
  animation-duration: ${props => convertTheme(props.theme).animations.duration + 'ms'};
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1), cubic-bezier(0, 0, 0.2, 1);
  z-index: -1;

  &.active {
    z-index: 1;
    animation-name: ${props => {
      const keyframes = WaveSpreadAnimationKeyframes
      const _theme = convertTheme(props.theme)
      let colorType = _theme.colors[props.type] || _theme.colors.primary
      if (props.color) {
        colorType = props.color
      }
      return (
        keyframes?.({
          color: colorType,
          waveBlurRadius: _theme.waveBlurRadius,
          theme: _theme.theme,
          waveDeepAmount: _theme.waveDeepAmount,
        }) || ''
      )
    }};
  }
`
