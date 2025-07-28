import React, { createContext } from 'react'

export interface DrawerContextType {
  show?: boolean
  onHide?: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

interface DrawerContextProviderProps {
  children: React.ReactNode
  show?: boolean
  onHide?: () => void
}

export const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({
  show,
  onHide,
  children,
}) => {
  return <DrawerContext.Provider value={{ show, onHide }}>{children}</DrawerContext.Provider>
}
