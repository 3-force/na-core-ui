import React, { type ElementType } from 'react'
import { ModalContextProvider } from '../../common/contexts/ModalContext'

interface ModalProps {
  show?: boolean
  onHide?: () => void
  className?: string
  children: React.ReactNode
  as?: ElementType
  id?: string
  placement?: string
  dialogClassName?: string
}

export const Modal = ({
  show,
  onHide,
  children,
  className,
  id,
  dialogClassName,
  as: Component = 'div',
  ...props
}: ModalProps) => {
  return (
    <React.Fragment>
      <div
        {...props}
        id={id ? id : 'defaultModal'}
        className={`${className} ${!show ? 'show hidden' : ''}`}
      >
        <ModalContextProvider show={!!show} onHide={onHide}>
          <Component className={dialogClassName ? dialogClassName : ''}>{children}</Component>
        </ModalContextProvider>
      </div>
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
