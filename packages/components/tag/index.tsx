import { FC } from 'react'
import { TagProps } from '@regen-design/types'
import { StyledTag, StyledTagPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CloseIcon } from '@regen-design/icons'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
export const Tag: FC<TagProps> = ({
  style = {},
  className = '',
  type = 'default',
  bordered = true,
  children,
  size = 'default',
  closable = false,
  disabled = false,
  onClose,
}) => {
  const tagClass = classNames(prefixClass, className, {
    [`${prefixClass}--${type}`]: type,
    [`${prefixClass}--bordered`]: bordered,
    [`${prefixClass}--${size}`]: size,
    [`${prefixClass}--disabled`]: disabled,
  })
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledTag
        role="tag"
        type={type}
        size={size}
        bordered={bordered}
        disabled={disabled}
        className={tagClass}
        style={style}
      >
        <span className={`${prefixClass}__content`}>{children}</span>
        {closable && (
          <button
            className={`${prefixClass}__close`}
            onClick={() => {
              if (disabled) return
              onClose?.()
            }}
          >
            {<CloseIcon />}
          </button>
        )}
      </StyledTag>
    </StyleSheetManager>
  )
}
