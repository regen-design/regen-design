import { NAME_SPACE } from '@regen-design/constant'
import styled from 'styled-components'
import { SpaceProps } from '@regen-design/types'
const prefix = `${NAME_SPACE}-space`
export const StyledSpacePrefixClass = prefix
export const StyledSpace = styled.div<SpaceProps>`
  display: flex;
  flex-flow: wrap;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ yGap, xGap }) => `${yGap}px ${xGap}px`};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'nowrap')};
`
