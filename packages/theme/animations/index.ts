import { keyframes } from 'styled-components'
import { WaveSpreadAnimationKeyframesType } from '@regen-design/types'
import { darken, lighten } from 'polished'

export const WaveSpreadAnimationKeyframes: WaveSpreadAnimationKeyframesType = options => {
  let color = '#ffffff'
  const waveDeepAmount = options.waveDeepAmount || 0
  if (options.theme === 'light') {
    color = darken(waveDeepAmount, options.color || color)
  } else {
    color = lighten(waveDeepAmount, options.color || color)
  }
  return keyframes`
    0% {
        opacity: 0.6;
        box-shadow: 0 0 1px 0 ${color};
    }
    100% {
        opacity: 0;
        box-shadow: 0 0 1px ${options.waveBlurRadius} ${color};
    }
`
}

export const SpinnerAnimationKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`
