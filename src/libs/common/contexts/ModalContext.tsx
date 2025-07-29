import React, { createContext, useState } from 'react'

export interface ModalContextType {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
  handleModalToggle: () => void
  show?: boolean
  onHide?: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalContextProviderProps {
  children: React.ReactNode
  show: boolean
  onHide?: () => void
}

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({
  show,
  onHide,
  children,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const handleModalToggle = () => {
    setIsModal(!isModal)
  }

  const bodyElement = document.body

  React.useEffect(() => {
    bodyElement.classList.toggle('overflow-hidden')
  }, [isModal, show, bodyElement])

  return (
    <ModalContext.Provider value={{ isModal, setIsModal, handleModalToggle, show, onHide }}>
      {children}
    </ModalContext.Provider>
  )
}
