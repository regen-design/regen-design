import { FC, useMemo } from 'react'
import { GradientTextProps } from '@regen-design/types'
import {
  StyledGradientText,
  StyledGradientTextPrefixClass as prefixClass,
} from '@regen-design/theme'
import classNames from 'classnames'
export const GradientText: FC<GradientTextProps> = ({
  style = {},
  className = '',
  size = 'default',
  type = 'default',
  children,
  gradient,
}) => {
  const gradientTextClass = classNames(prefixClass, className)
  const backgroundImage = useMemo(() => {
    if (!gradient) return
    if (typeof gradient === 'string') {
      return gradient
    }
    let deg = gradient.deg || 0
    if (typeof deg === 'number') {
      deg = `${deg}deg`
    }
    return `linear-gradient(${deg},${gradient.from} 0%, ${gradient.to} 100%)`
  }, [gradient])
  console.log(backgroundImage)
  return (
    <StyledGradientText
      size={size}
      type={type}
      role="gradientText"
      className={gradientTextClass}
      style={{
        backgroundImage,
        ...style,
      }}
    >
      {children}
    </StyledGradientText>
  )
}
