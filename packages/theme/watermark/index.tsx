import { NAME_SPACE } from '@regen-design/constant'
import { WatermarkProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-watermark`
export const StyledWatermarkPrefixClass = prefix
export const StyledWatermark = styled.div<WatermarkProps>`
  position: relative;
  &.${prefix}--fullscreen {
    position: fixed;
  }
  .${prefix}__inner,&.${prefix}--fullscreen {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-repeat: repeat;
  }
  .${prefix}__inner {
    position: absolute;
  }
`
