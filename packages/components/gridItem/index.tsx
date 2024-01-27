import { FC, useContext } from 'react'
import { GridItemProps } from '@regen-design/types'
import { StyledGridItem, StyledGridItemPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { PrivateGridContext } from '../grid'
export const GridItem: FC<GridItemProps> = ({
  style = {},
  className = '',
  children,
  offset = 0,
  span = 1,
}) => {
  const gridItemClass = classNames(prefixClass, className)
  const { cols, xGap, yGap, wrapper } = useContext(PrivateGridContext)
  if (wrapper !== 'grid') {
    console.error('GridItem must be used in Grid')
  }
  return (
    <StyledGridItem
      role="gridItem"
      offset={offset}
      span={span}
      cols={cols}
      xGap={xGap}
      yGap={yGap}
      className={gridItemClass}
      style={style}
    >
      {children}
    </StyledGridItem>
  )
}
