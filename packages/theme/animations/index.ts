import { keyframes } from 'styled-components'

export const ButtonWaveSpreadAnimationKeyframes = (color: string) => keyframes`
    0% {
        opacity: 0.6;
        box-shadow: 0 0 1px 0 ${color};
    }
    100% {
        opacity: 0;
        box-shadow: 0 0 1px 5px ${color};
    }
`
