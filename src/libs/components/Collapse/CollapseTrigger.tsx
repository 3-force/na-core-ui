import React, { type ElementType } from 'react'
import { useCollapse } from '../../common/hooks/useCollapse'

interface CollapseTriggerProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: ElementType
  href?: string
}

const CollapseTrigger = ({
  children,
  className,
  as: Component = 'button',
  ...props
}: CollapseTriggerProps) => {
  const { isCollapse, isOpen, toggle, handleCollapseToggle } = useCollapse()
  const addShowClass = (isOpen ? isOpen : isCollapse) ? 'show' : ''
  return (
    <>
      <Component
        {...props}
        className={`${addShowClass} ${className ? className : ''}`}
        onClick={toggle ? toggle : handleCollapseToggle}
      >
        {children}
      </Component>
    </>
  )
}

export { CollapseTrigger }
