import React, { type ElementType } from 'react'
import { useDrawer } from '../../common/hooks/useDrawer'

interface DrawerHeaderProps {
  className?: string
  children?: React.ReactNode
  closeButtonClass?: string
  as?: ElementType
}

const DrawerHeader = ({ children, className, as: Component = 'button' }: DrawerHeaderProps) => {
  const { onHide } = useDrawer()

  return (
    <Component className={className ? className : ''} onClick={onHide}>
      {children}
    </Component>
  )
}

export default DrawerHeader
