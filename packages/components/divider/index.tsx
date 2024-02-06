import { FC } from 'react'
import { DividerProps } from '@regen-design/types'
import { StyledDivider, StyledDividerPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Divider: FC<DividerProps> = ({
  style = {},
  className = '',
  vertical = false,
  titlePlacement,
  children,
}) => {
  const dividerClass = classNames(prefixClass, className, {
    [`${prefixClass}--vertical`]: vertical,
    [`${prefixClass}--title-${titlePlacement}`]: titlePlacement,
  })
  return (
    <StyledDivider
      role="divider"
      vertical={vertical}
      titlePlacement={titlePlacement}
      className={dividerClass}
      style={style}
    >
      {!vertical && (
        <>
          <div className={`${prefixClass}__line--left`} />
          {titlePlacement && <div className={`${prefixClass}__title`}>{children}</div>}
          <div className={`${prefixClass}__line--right`} />
        </>
      )}
    </StyledDivider>
  )
}
