import type { ElementType } from 'react'
import React from 'react'
import { DrawerContextProvider } from '../../common/contexts/DrawerContext'

interface DrawerProps {
  children: React.ReactNode
  className?: string
  as?: ElementType
  id?: string
  show?: boolean
  onHide?: () => void
}

export const Drawer = ({
  children,
  className,
  show,
  onHide,
  id,
  as: Component = 'div',
  ...props
}: DrawerProps) => {
  return (
    <React.Fragment>
      <DrawerContextProvider show={show} onHide={onHide}>
        <Component
          {...props}
          id={id ? id : ''}
          className={`${className ? className : ''} ${!show ? 'show hidden' : ''}`}
        >
          {children}
        </Component>
      </DrawerContextProvider>
      <div
        onClick={onHide}
        className={`fixed inset-0 bg-slate-900/40 dark:bg-zink-800/70 z-[1049] backdrop-overlay ${
          !show ? 'hidden' : ''
        }`}
        id="backDropDiv"
      ></div>
    </React.Fragment>
  )
}
