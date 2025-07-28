import React, { type ElementType } from 'react'
import { useCollapse } from '../../common/hooks/useCollapse'

interface CollapseContentProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: ElementType
}

const CollapseContent = ({ children, className, as: Component = 'div' }: CollapseContentProps) => {
  const { isCollapse, isOpen } = useCollapse()
  return (
    <>
      {(isOpen ? isOpen : isCollapse) && (
        <Component className={`collapsible-content ${className ? className : ''}`}>
          {children}
        </Component>
      )}
    </>
  )
}

export { CollapseContent }
