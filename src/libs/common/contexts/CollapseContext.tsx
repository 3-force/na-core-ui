import React, { createContext, useState } from 'react'

export interface CollapseContextType {
  isCollapse: boolean
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>
  handleCollapseToggle: () => void
  isOpen?: boolean
  toggle?: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CollapseContext = createContext<CollapseContextType | undefined>(undefined)

interface CollapseContextProviderProps {
  children: React.ReactNode
  isOpen: boolean
  toggle?: () => void
}

export const CollapseContextProvider: React.FC<CollapseContextProviderProps> = ({
  isOpen,
  toggle,
  children,
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false)

  const handleCollapseToggle = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <CollapseContext.Provider
      value={{ isCollapse, setIsCollapse, handleCollapseToggle, isOpen, toggle }}
    >
      {children}
    </CollapseContext.Provider>
  )
}
