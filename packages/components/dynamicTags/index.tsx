import { FC, useEffect, useRef, useState } from 'react'
import { DynamicTagsProps } from '@regen-design/types'
import { StyledDynamicTags, StyledDynamicTagsPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useMergedState } from '@regen-design/hooks'
import { Tag } from '../tag'
import { Button } from '../button'
import { PlusIcon } from '@regen-design/icons'
import { Input } from '../input'
export const DynamicTags: FC<DynamicTagsProps> = ({
  style = {},
  className = '',
  value: valueProps,
  onChange,
  max,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dynamicTagsClass = classNames(prefixClass, className)
  const [inputValue, setInputValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [tags, setTags] = useMergedState([], {
    value: valueProps,
  })
  const value = valueProps ?? tags
  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])
  const handleEdited = () => {
    if (!inputValue) {
      setIsEdit(false)
      return
    }
    const newTags = value.slice()
    newTags.push({
      label: inputValue,
      value: inputValue,
    })
    setTags([...newTags])
    setInputValue('')
    setIsEdit(false)
    onChange?.(newTags)
  }
  return (
    <StyledDynamicTags role="dynamicTags" className={dynamicTagsClass} style={style}>
      {value.map((tag, index) => (
        <Tag
          key={index}
          closable
          onClose={() => {
            const newTags = value.slice()
            newTags.splice(index, 1)
            setTags(newTags)
            onChange?.(newTags)
          }}
        >
          {tag.label}
        </Tag>
      ))}
      {max && value.length >= max ? null : isEdit ? (
        <Input
          className={`${prefixClass}-input`}
          autosize
          ref={inputRef}
          size={'small'}
          value={inputValue}
          onChange={setInputValue}
          onPressEnter={() => {
            handleEdited()
          }}
          onBlur={() => {
            handleEdited()
          }}
        />
      ) : (
        <Button
          icon={<PlusIcon />}
          size={'small'}
          onClick={() => {
            setIsEdit(true)
          }}
        />
      )}
    </StyledDynamicTags>
  )
}
