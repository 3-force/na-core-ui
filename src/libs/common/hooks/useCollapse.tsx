import { useContext } from 'react'
import { CollapseContext } from '../contexts/CollapseContext'

export const useCollapse = () => {
  const context = useContext(CollapseContext)
  if (context === undefined) {
    throw new Error('useCollapse must be used within a CollapseContextProvider')
  }
  return context
}
