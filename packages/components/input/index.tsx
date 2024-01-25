import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { InputProps } from '@regen-design/types'
import { StyledInput, StyledInputPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
export const Input: FC<InputProps> = ({
  style,
  className,
  placeholder,
  type = 'text',
  value = '',
  disabled = false,
  readOnly = false,
  showCount = false,
  round = false,
  prefix,
  suffix,
  size = 'default',
  onChange,
}) => {
  const inputClass = classNames(prefixClass, className)
  const inputElementRef = useRef<HTMLInputElement>(null)
  const textareaElementRef = useRef<HTMLTextAreaElement>(null)
  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    setInputValue(value)
  }, [value])
  const props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {
    type,
    disabled,
    readOnly,
    value: inputValue,
    className: `${prefixClass}__${type === 'textarea' ? 'textarea' : 'input'}-el`,
    onFocus: () => {
      setIsFocus(true)
    },
    onChange: e => {
      onChange && onChange(e.target.value)
      setInputValue(e.target.value)
    },
    onBlur: () => {
      setIsFocus(false)
    },
  }
  return (
    <StyledInput
      role="input"
      size={size}
      isFocus={isFocus}
      type={type}
      disabled={disabled}
      round={round}
      className={inputClass}
      style={style}
    >
      <div className={`${prefixClass + '--wrapper'}`}>
        {prefix && <div className={`${prefixClass}__prefix`}>{prefix}</div>}
        <div className={`${prefixClass}_input`}>
          {type === 'text' && <input {...props} ref={inputElementRef} />}
          {type === 'textarea' && <textarea {...props} ref={textareaElementRef} />}
          {!inputValue.length && (
            <div className={`${prefixClass}__placeholder`}>
              {type === 'text' ? <span>{placeholder}</span> : placeholder}
            </div>
          )}
        </div>
        {suffix && <div className={`${prefixClass}__suffix`}>{suffix}</div>}
        {showCount && <div className={`${prefixClass}__suffix`}>{value.length}</div>}
      </div>
      <div className={`${prefixClass}__border`}></div>
      <div className={`${prefixClass}__state-border`}></div>
    </StyledInput>
  )
}
