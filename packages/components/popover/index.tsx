import {
  cloneElement,
  CSSProperties,
  FC,
  memo,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { PopoverLayerProps, PopoverProps } from '@regen-design/types'
import classNames from 'classnames'
import { FadeInScaleUp } from '../fadeInScaleUp'
import { StyledPopover, StyledPopoverPrefixClass as prefixClass } from '@regen-design/theme'
import { useOutsideClick } from '@regen-design/hooks'

const PopoverLayer = memo(
  ({ rect, placement = 'top', open, content, custom, arrow = true }: PopoverLayerProps) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [updater, setUpdater] = useState(+new Date())
    const layerStyle = useMemo(() => {
      const { top = 0, left = 0, bottom = 0, width = 0, height = 0 } = rect || {}
      const offsetWidth = contentRef.current?.offsetWidth || 0
      const offsetHeight = contentRef.current?.offsetHeight || 0
      const style: CSSProperties = {
        position: 'absolute',
        transformOrigin: '',
        zIndex: 9999,
        left: left,
        top: bottom,
      }
      let spacing = 10
      if (!arrow) {
        spacing = 2
      }
      switch (placement) {
        case 'top': {
          style.top = top - (offsetHeight || 0) - spacing
          style.left = left + width / 2 - (offsetWidth || 0) / 2
          style.transformOrigin = 'center bottom'
          break
        }
        case 'top-start': {
          style.top = top - (offsetHeight || 0) - spacing
          style.left = left
          style.transformOrigin = 'left bottom'
          break
        }
        case 'top-end': {
          style.top = top - (offsetHeight || 0) - spacing
          style.left = left + width - (offsetWidth || 0)
          style.transformOrigin = 'right bottom'
          break
        }
        case 'left': {
          style.top = top + height / 2 - (offsetHeight || 0) / 2
          style.left = left - (offsetWidth || 0) - spacing
          style.transformOrigin = 'right center'
          break
        }
        case 'left-start': {
          style.top = top
          style.left = left - (offsetWidth || 0) - spacing
          style.transformOrigin = 'right top'
          break
        }
        case 'left-end': {
          style.top = top + height - (offsetHeight || 0)
          style.left = left - (offsetWidth || 0) - spacing
          style.transformOrigin = 'right bottom'
          break
        }
        case 'right': {
          style.top = top + height / 2 - (offsetHeight || 0) / 2
          style.left = left + width + spacing
          style.transformOrigin = 'left center'
          break
        }
        case 'right-start': {
          style.top = top
          style.left = left + width + spacing
          style.transformOrigin = 'left top'
          break
        }
        case 'right-end': {
          style.top = top + height - (offsetHeight || 0)
          style.left = left + width + spacing
          style.transformOrigin = 'left bottom'
          break
        }
        case 'bottom': {
          style.top = top + height + spacing
          style.left = left + width / 2 - (offsetWidth || 0) / 2
          style.transformOrigin = 'center top'
          break
        }
        case 'bottom-start': {
          style.top = top + height + spacing
          style.left = left
          style.transformOrigin = 'left top'
          break
        }
        case 'bottom-end': {
          style.top = top + height + spacing
          style.left = left + width - (offsetWidth || 0)
          style.transformOrigin = 'right top'
          break
        }
      }
      return style
    }, [rect, placement, updater, arrow])
    const PopoverClassNames = classNames(prefixClass, {
      [`${prefixClass}-${placement}`]: true,
    })
    return (
      <FadeInScaleUp
        in={open}
        onEnter={() => {
          setUpdater(+new Date())
        }}
      >
        <StyledPopover style={layerStyle} ref={contentRef} className={PopoverClassNames}>
          {arrow && (
            <div className={`${prefixClass}-wrapper`}>
              <div className={`${prefixClass}-arrow`}></div>
            </div>
          )}
          {custom ? (
            content
          ) : (
            <div className={`${prefixClass}-content`}>
              <div className={`${prefixClass}-inner`}>{content}</div>
            </div>
          )}
        </StyledPopover>
      </FadeInScaleUp>
    )
  }
)
PopoverLayer.displayName = 'PopoverLayer'
export const Popover: FC<PopoverProps> = props => {
  const { trigger = 'hover', children } = props
  const [isOpen, setIsOpen] = useState(false)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [triggerUniId, setTriggerUniId] = useState('')
  const triggerClassNames = classNames(triggerUniId)
  const triggerElementRef = useRef<HTMLElement | null>(null)
  const handleMouseOver = () => {
    if (!isOpen) {
      const triggerElement = triggerElementRef.current
      const rect = triggerElement.getBoundingClientRect()
      setRect(rect)
      setIsOpen(() => true)
    }
  }
  const handleMouseLeave = () => {
    setIsOpen(() => false)
  }
  useOutsideClick(triggerElementRef, () => {
    setIsOpen(() => false)
  })
  useEffect(() => {
    setTriggerUniId(Math.random().toString(36).slice(2))
  }, [])

  useLayoutEffect(() => {
    if (triggerUniId) {
      const triggerElement = document.getElementsByClassName(triggerUniId)[0]
      triggerElementRef.current = triggerElement as HTMLElement
      if (triggerElement) {
        if (trigger === 'hover') {
          triggerElement.addEventListener('mouseover', handleMouseOver)
          triggerElement.addEventListener('mouseleave', handleMouseLeave)
        }
        if (trigger === 'click') {
          triggerElement.addEventListener('click', handleMouseOver)
        }
      }
      return () => {
        triggerElement?.removeEventListener('mouseover', handleMouseOver)
        triggerElement?.removeEventListener('click', handleMouseOver)
        triggerElement?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [triggerUniId])

  const ChildrenElement = cloneElement(children as ReactElement, {
    className: triggerClassNames,
  })
  return (
    <>
      {ChildrenElement}
      <PopoverLayer {...props} open={isOpen} rect={rect} />
    </>
  )
}
