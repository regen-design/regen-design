import styled from 'styled-components'
import { convertTheme } from '../tools'
import { WaveProps, WaveSpreadAnimationKeyframesType } from '@regen-design/types/wave'
import { ButtonWaveSpreadAnimationKeyframes } from '../animations'
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
      let keyframes: WaveSpreadAnimationKeyframesType
      switch (props.element) {
        case 'button':
          keyframes = ButtonWaveSpreadAnimationKeyframes
          break
      }
      const _theme = convertTheme(props.theme)
      const colorType = _theme.colors[props.type]
      return (
        keyframes?.({
          color: colorType === 'default' ? _theme.colors.primary : colorType,
          waveBlurRadius: _theme.waveBlurRadius,
          theme: _theme.theme,
          waveDeepAmount: _theme.waveDeepAmount,
        }) || ''
      )
    }};
  }
`
