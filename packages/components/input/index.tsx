import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { InputProps } from '@regen-design/types'
import { StyledInput, StyledInputPrefixClass as prefixClass } from '@regen-design/theme'
import GraphemeSplitter from 'grapheme-splitter'
import classNames from 'classnames'
import { useDebounce } from '@regen-design/hooks'

const splitter = new GraphemeSplitter()

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
  realLength = false,
  debounce,
  prefix,
  suffix,
  maxLength,
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
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let _value = e.target.value
    if (realLength) {
      const r_length = splitter.countGraphemes(_value)
      if (r_length > maxLength) {
        const splitStr = splitter.splitGraphemes(_value)
        _value = splitStr.slice(0, maxLength).join('')
      }
    } else if (_value.length > maxLength) {
      _value = _value.slice(0, maxLength)
    }
    onChange && onChange(_value)
    setInputValue(_value)
  }
  const [handleDebounceChange] = useDebounce(e => {
    handleChange(e)
  }, debounce)

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
      setInputValue(e.target.value)
      if (!debounce) {
        handleChange(e)
      } else {
        handleDebounceChange(e)
      }
    },
    onBlur: () => {
      setIsFocus(false)
    },
  }
  const valueLength = useMemo(() => {
    if (!value) return 0
    if (!realLength) return value.length
    return splitter.countGraphemes(value)
  }, [value, realLength])
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
        {showCount && (
          <div className={`${prefixClass}__suffix`}>
            {valueLength}
            {maxLength && `/${maxLength}`}
          </div>
        )}
      </div>
      <div className={`${prefixClass}__border`}></div>
      <div className={`${prefixClass}__state-border`}></div>
    </StyledInput>
  )
}
