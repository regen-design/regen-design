import { FC, useEffect, useRef, useState } from 'react'
import { CheckboxProps, WaveRefProps } from '@regen-design/types'
import { StyledCheckbox, StyledCheckboxPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CheckIcon, MinusIcon } from '@regen-design/icons'
import { Wave } from '../wave'
import { motion } from 'framer-motion'
import { useMergedState } from '@regen-design/hooks'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
export const Checkbox: FC<CheckboxProps> = ({
  style = {},
  className = '',
  children,
  size = 'default',
  disabled = false,
  checked: checkedProps = false,
  indeterminate = false,
  onChange,
}) => {
  const checkboxClass = classNames(prefixClass, className, {
    [`${prefixClass}--disabled`]: disabled,
    [`${prefixClass}--indeterminate`]: indeterminate,
    [`${prefixClass}--${size}`]: size,
  })
  const [transitionKey, setTransitionKey] = useState('CheckIcon')
  const [initRender, setInitRender] = useState(false)
  const waveRef = useRef<WaveRefProps>(null)
  const [checked] = useMergedState(false, {
    value: checkedProps,
  })
  useEffect(() => {
    if (checked) {
      setTransitionKey('CheckIcon')
      return
    }
    if (indeterminate) {
      setTransitionKey('MinusIcon')
      return
    }
    setTransitionKey('None')
  }, [checked, indeterminate])
  useEffect(() => {
    setInitRender(true)
  }, [])
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <StyledCheckbox
        role="checkbox"
        className={checkboxClass}
        style={style}
        size={size}
        checked={checkedProps ?? checked}
        indeterminate={indeterminate}
        disabled={disabled}
        tabIndex={0}
        onClick={e => {
          e.stopPropagation()
          if (disabled) return
          const _checked = !checked
          waveRef.current?.play()
          onChange?.(_checked)
        }}
      >
        {initRender && (
          <div className={`${prefixClass}-wrapper`}>
            &nbsp;
            <div className={`${prefixClass}-box`}>
              <Wave ref={waveRef} />
              <motion.div
                key={transitionKey}
                className={`${prefixClass}-icon`}
                animate={{ scale: ['CheckIcon', 'MinusIcon'].includes(transitionKey) ? 0.7 : 0 }}
                exit={{ scale: 0 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {transitionKey === 'None' && null}
                {transitionKey === 'CheckIcon' && <CheckIcon />}
                {transitionKey === 'MinusIcon' && <MinusIcon />}
              </motion.div>
              <div className={`${prefixClass}-box__border`}></div>
            </div>
          </div>
        )}
        {children && <span className={`${prefixClass}-label`}>{children}</span>}
      </StyledCheckbox>
    </StyleSheetManager>
  )
}
