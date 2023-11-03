import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// paso 3.- crear el consumidor del contexto
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext debe estar dentro del proveedor AuthProvider')
  }
  return context
}
