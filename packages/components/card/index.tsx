import { FC } from 'react'
import { CardProps } from '@regen-design/types'
import { StyledCard, StyledCardPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Card: FC<CardProps> = ({
  style = {},
  className = '',
  title,
  children,
  extra = null,
  footer = null,
  footerStyle = {},
  footerClassName = '',
  size = 'default',
}) => {
  const cardClass = classNames(prefixClass, className, {
    [`${prefixClass}--${size}`]: size,
  })
  return (
    <StyledCard role="card" className={cardClass} style={style} size={size}>
      <div role="card-header" className={prefixClass + '-header'}>
        <div className={prefixClass + '-header-title'}>{title}</div>
        <div className={prefixClass + '-header-extra'}>{extra}</div>
      </div>
      <div role="card-body" className={prefixClass + '-body'}>
        {children}
      </div>
      {footer && (
        <div
          role="card-footer"
          style={footerStyle}
          className={`${prefixClass + '-footer'} ${footerClassName}`}
        >
          {footer}
        </div>
      )}
    </StyledCard>
  )
}
