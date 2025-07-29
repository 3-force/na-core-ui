import React, { type ElementType } from 'react'

import { X } from 'lucide-react'
import { useModalContext } from '../../common/hooks/useModal'

interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: ElementType
  href?: string
  closeButtonClass?: string
}

const ModalHeader = ({
  children,
  className,
  closeButtonClass,
  as: Component = 'div',
  ...props
}: ModalHeaderProps) => {
  const { onHide, handleModalToggle } = useModalContext()

  return (
    <Component
      {...props}
      className={className ? className : ''}
      onClick={onHide ? onHide : handleModalToggle}
    >
      {children}
      <button data-modal-close="closeModal" className={closeButtonClass ? closeButtonClass : ''}>
        <X className="lucide lucide-x size-5"></X>
      </button>
    </Component>
  )
}

export default ModalHeader
