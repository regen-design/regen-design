import { createContext, FC } from 'react'
import { GridProps } from '@regen-design/types'
import { StyledGrid, StyledGridPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
export const PrivateGridContext = createContext({ wrapper: 'grid', cols: 0, yGap: 0, xGap: 0 })
export const Grid: FC<GridProps> = ({
  style,
  className,
  children,
  cols = 4,
  yGap = 0,
  xGap = 0,
}) => {
  const gridClass = classNames(prefixClass, className)
  return (
    <PrivateGridContext.Provider value={{ wrapper: 'grid', cols, yGap, xGap }}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <StyledGrid
          role="grid"
          cols={cols}
          yGap={yGap}
          xGap={xGap}
          className={gridClass}
          style={style}
        >
          {children}
        </StyledGrid>
      </StyleSheetManager>
    </PrivateGridContext.Provider>
  )
}
