import { NAME_SPACE } from '@regen-design/constant'
import { GridItemProps, GridProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-gridItem`
export const StyledGridItemPrefixClass = prefix
export const StyledGridItem = styled.div<GridItemProps & Pick<GridProps, 'cols' | 'xGap' | 'yGap'>>`
  grid-column: ${({ offset }) => `span ${offset + 1} / span ${offset + 1}`};
  margin-left: ${({ offset, xGap }) =>
    `calc(((100% - ${xGap}px) / ${offset + 1}) * ${offset} + ${xGap}px)`};
`
