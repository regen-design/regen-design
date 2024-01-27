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
  const cardClass = classNames(prefixClass, className)
  return (
    <StyledCard role="card" className={cardClass} style={style} size={size}>
      <div className={prefixClass + '-header'}>
        <div className={prefixClass + '-header-title'}>{title}</div>
        <div className={prefixClass + '-header-extra'}>{extra}</div>
      </div>
      <div className={prefixClass + '-body'}>{children}</div>
      {footer && (
        <div style={footerStyle} className={`${prefixClass + '-footer'} ${footerClassName}`}>
          {footer}
        </div>
      )}
    </StyledCard>
  )
}
