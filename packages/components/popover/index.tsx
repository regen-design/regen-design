import {
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  Fragment,
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

const PopoverLayer = forwardRef(({ rect, placement, open }: PopoverLayerProps) => {
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
    switch (placement) {
      case 'top': {
        style.top = top - height / 2 - (offsetHeight || 0) + 5
        style.left = left + width / 2 - (offsetWidth || 0) / 2
        style.transformOrigin = 'center bottom'
        break
      }
    }
    return style
  }, [rect, placement, updater])
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
        <div className={`${prefixClass}-wrapper`}>
          <div className={`${prefixClass}-arrow`}></div>
        </div>
        <div className={`${prefixClass}-content`}>
          <div className={`${prefixClass}-inner`}>
            <div>Content</div>
            <div>Content</div>
          </div>
        </div>
      </StyledPopover>
    </FadeInScaleUp>
  )
})
PopoverLayer.displayName = 'PopoverLayer'
export const Popover: FC<PopoverProps> = ({
  className = '',
  trigger = 'hover',
  placement = 'top',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [triggerUniId, setTriggerUniId] = useState('')
  const triggerClassNames = classNames(triggerUniId, className)
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
        triggerElement?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [triggerUniId])

  const ChildrenElement = cloneElement(children as ReactElement, {
    className: triggerClassNames,
  })
  return (
    <Fragment>
      {ChildrenElement}
      <PopoverLayer open={isOpen} rect={rect} placement={placement} />
    </Fragment>
  )
}
