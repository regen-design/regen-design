import { FC } from 'react'
import { createPortal } from 'react-dom'
import '@regen-design/theme/transition.css'
import { CSSTransition } from 'react-transition-group'
import { TransitionProps } from '@regen-design/types'
import { useTheme } from '@regen-design/theme'

const TempTransition: FC<TransitionProps> = props => {
  const theme = useTheme()
  return (
    <CSSTransition
      key={theme.theme}
      mountOnEnter={props.mountOnEnter || true}
      classNames={props.animationClassName}
      in={props.in}
      timeout={props.timeout || 300}
      onEnter={props.onEnter}
      onExit={props.onExit}
      onEntered={props.onEntered}
      onExited={props.onExited}
      onEntering={props.onEntering}
      onExiting={props.onExiting}
      unmountOnExit={props.unmountOnExit || true}
    >
      {props.children}
    </CSSTransition>
  )
}

TempTransition.displayName = 'Transition'

export const Transition: FC<TransitionProps> = props => {
  const isPortal = props.isPortal ?? true
  if (isPortal) {
    return createPortal(<TempTransition {...props} />, props.container || document.body)
  } else {
    return <TempTransition {...props} />
  }
}
