import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { InputProps } from '@regen-design/types'
import { StyledInput, StyledInputPrefixClass as prefixClass } from '@regen-design/theme'
import GraphemeSplitter from 'grapheme-splitter'
import classNames from 'classnames'
import { useDebounce } from '@regen-design/hooks'
import { CloseCircleIcon, EyeIcon, EyeInvisibleIcon } from '@regen-design/icons'

const splitter = new GraphemeSplitter()

export const Input: FC<InputProps> = ({
  style = {},
  className = '',
  placeholder,
  type = 'text',
  value = undefined,
  showPasswordOn = 'click',
  disabled = false,
  readOnly = false,
  showCount = false,
  round = false,
  realLength = false,
  clearable = false,
  showPassword = true,
  onlyNumber = false,
  trim = false,
  defaultValue = '',
  passwordVisibleIcon,
  passwordInvisibleIcon,
  debounce,
  prefix,
  suffix,
  maxLength,
  size = 'default',
  onChange,
  onClear,
  onFocus,
  onBlur,
  onPressEnter,
  onKeyDown,
  onKeyUp,
  onInput,
}) => {
  const inputClass = classNames(prefixClass, className)
  const inputElementRef = useRef<HTMLInputElement>(null)
  const textareaElementRef = useRef<HTMLTextAreaElement>(null)
  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (value === undefined) {
      setInputValue(defaultValue)
    } else {
      setInputValue(value)
    }
  }, [value, defaultValue])
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
    if (onlyNumber) {
      _value = _value.replace(/\D/g, '')
    }
    if (trim) {
      _value = _value.trim()
    }
    onChange && onChange(_value)
    setInputValue(_value)
  }
  const [handleDebounceChange] = useDebounce(e => {
    handleChange(e)
  }, debounce)
  const handleClear = () => {
    setInputValue('')
    onClear && onClear()
    onChange && onChange('')
  }
  const props: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {
    type,
    disabled,
    readOnly,
    value: inputValue,
    className: `${prefixClass}__${type === 'textarea' ? 'textarea' : 'input'}-el`,
    onFocus: e => {
      setIsFocus(true)
      onFocus && onFocus(e)
    },
    onInput: e => {
      onInput && onInput(e)
    },
    onChange: e => {
      setInputValue(e.target.value)
      if (!debounce) {
        handleChange(e)
      } else {
        handleDebounceChange(e)
      }
    },
    onKeyDown: e => {
      if (e.key === 'Enter') {
        onPressEnter && onPressEnter(e)
      }
      onKeyDown && onKeyDown(e)
    },
    onKeyUp: e => {
      onKeyUp && onKeyUp(e)
    },
    onBlur: e => {
      setIsFocus(false)
      onBlur && onBlur(e)
    },
  }
  const valueLength = useMemo(() => {
    if (!inputValue) return 0
    if (!realLength) return inputValue.length
    return splitter.countGraphemes(inputValue)
  }, [inputValue, realLength])
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
          {type === 'password' && (
            <input {...props} type={isVisible ? 'text' : 'password'} ref={inputElementRef} />
          )}
          {type === 'textarea' && <textarea {...props} ref={textareaElementRef} />}
          {!inputValue.length && (
            <div className={`${prefixClass}__placeholder`}>
              {type === 'text' ? <span>{placeholder}</span> : placeholder}
            </div>
          )}
        </div>
        {clearable && (
          <div className={`${prefixClass}__suffix ${inputValue.length > 0 ? 'active' : ''}`}>
            <div className={`${prefixClass}__clear`} onClick={handleClear}>
              <CloseCircleIcon />
            </div>
          </div>
        )}

        <div className={`${prefixClass}__suffix ${suffix ? 'active' : ''}`}>{suffix}</div>
        {type === 'password' && (
          <div className={`${prefixClass}__suffix ${showPassword ? 'active' : ''}`}>
            <div
              className={`${prefixClass}__eye`}
              onClick={() => {
                showPasswordOn === 'click' && setIsVisible(!isVisible)
              }}
              onMouseDown={() => {
                showPasswordOn === 'mousedown' && setIsVisible(true)
              }}
              onMouseUp={() => {
                showPasswordOn === 'mousedown' && setIsVisible(false)
              }}
            >
              {isVisible
                ? passwordVisibleIcon || <EyeIcon />
                : passwordInvisibleIcon || <EyeInvisibleIcon />}
            </div>
          </div>
        )}
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
