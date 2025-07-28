import { createContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export interface AlertContextType {
  isAlert: boolean
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>
  handleAlertToggle: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AlertContext = createContext<AlertContextType | undefined>(undefined)

interface AlertContextProviderProps {
  children: React.ReactNode
  className?: string
  Component?: React.ElementType
}

export const AlertContextProvider: React.FC<AlertContextProviderProps> = ({
  children,
  className,
  Component = 'div',
}) => {
  const [isAlert, setIsAlert] = useState<boolean>(true)

  const handleAlertToggle = () => {
    setIsAlert(!isAlert)
  }

  return (
    <AlertContext.Provider value={{ isAlert, setIsAlert, handleAlertToggle }}>
      <Component className={twMerge(!isAlert ? 'hidden' : '', className)}>{children}</Component>
    </AlertContext.Provider>
  )
}
