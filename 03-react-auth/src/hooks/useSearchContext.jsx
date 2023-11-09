import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'

// paso 3.- crear el consumidor del contexto
export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext debe estar dentro del proveedor SearchProvider')
  }
  return context
}
