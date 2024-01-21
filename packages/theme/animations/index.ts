import { keyframes } from 'styled-components'
import { AnimationsKeyFrames } from '@regen-design/types'

export const ButtonWaveSpreadAnimationKeyframes: AnimationsKeyFrames = options => keyframes`
    0% {
        opacity: 0.6;
        box-shadow: 0 0 1px 0 ${options.color};
    }
    100% {
        opacity: 0;
        box-shadow: 0 0 1px ${options.waveBlurRadius}px ${options.color};
    }
`
