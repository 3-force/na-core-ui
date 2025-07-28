import React, { type ElementType } from 'react'
import { CollapseContextProvider } from '../../common/contexts/CollapseContext'

interface CollapseProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: ElementType
  isOpen?: boolean
  toggle?: () => void
}

export const Collapse = ({
  children,
  isOpen,
  toggle,
  className,
  as: Component = 'div',
}: CollapseProps) => {
  return (
    <>
      <CollapseContextProvider isOpen={!!isOpen} toggle={toggle}>
        <Component className={`collapsible ${className ? className : ''}`}>{children}</Component>
      </CollapseContextProvider>
    </>
  )
}
