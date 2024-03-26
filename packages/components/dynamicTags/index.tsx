import { FC, useState } from 'react'
import { DynamicTagsProps } from '@regen-design/types'
import { StyledDynamicTags, StyledDynamicTagsPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { useMergedState } from '@regen-design/hooks'
import { Tag } from '../tag'
import { Button } from '../button'
import { PlusIcon } from '@regen-design/icons'
import { Input } from '../input'
export const DynamicTags: FC<DynamicTagsProps<string>> = ({
  style = {},
  className = '',
  value: valueProps,
  onChange,
}) => {
  const dynamicTagsClass = classNames(prefixClass, className)
  const [isEdit, setIsEdit] = useState(false)
  const [tags, setTags] = useMergedState([], {
    value: valueProps,
  })
  const value = valueProps ?? tags

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
          {tag}
        </Tag>
      ))}
      {isEdit ? (
        <Input className={`${prefixClass}-input`} />
      ) : (
        <Button
          icon={<PlusIcon />}
          onClick={() => {
            setIsEdit(true)
          }}
        />
      )}
    </StyledDynamicTags>
  )
}
