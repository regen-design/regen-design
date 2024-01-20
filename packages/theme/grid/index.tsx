import { NAME_SPACE } from '@regen-design/constant'
import { GridProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-grid`
export const StyledGridPrefixClass = prefix
export const StyledGrid = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0px, 1fr))`};
  gap: ${({ yGap, xGap }) => `${yGap}px ${xGap}px`};
`
