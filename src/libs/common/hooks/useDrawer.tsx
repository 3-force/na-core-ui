import { useContext } from 'react'
import { DrawerContext } from '../contexts/DrawerContext'

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (context === undefined) {
    throw new Error('useDrawerContext must be used within a DrawerContextProvider')
  }
  return context
}
