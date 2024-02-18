import { FC } from 'react'
import { createPortal } from 'react-dom'
import '@regen-design/theme/transition.css'
import { CSSTransition } from 'react-transition-group'
import { FadeInScaleUpProps } from '@regen-design/types'

const TempFadeInScaleUp: FC<FadeInScaleUpProps> = props => {
  return (
    <CSSTransition
      mountOnEnter={props.mountOnEnter || true}
      classNames={'fade-in-scale-up'}
      in={props.in}
      timeout={props.timeout || 300}
      onEnter={props.onEnter}
      onExit={props.onExit}
      onEntered={props.onEntered}
      onExited={props.onExited}
    >
      {props.children}
    </CSSTransition>
  )
}

TempFadeInScaleUp.displayName = 'FadeInScaleUp'

export const FadeInScaleUp: FC<FadeInScaleUpProps> = props => {
  return createPortal(<TempFadeInScaleUp {...props} />, props.container || document.body)
}
