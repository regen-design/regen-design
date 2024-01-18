import { keyframes } from 'styled-components'

export const WaveAnimationKeyframes = keyframes`
    0% {
        opacity: 0.6;
        box-shadow: 0 0 1px 0 #985304;
    }

    100% {
        opacity: 0;
        box-shadow: 0 0 1px 5px #985304;
    }

`
