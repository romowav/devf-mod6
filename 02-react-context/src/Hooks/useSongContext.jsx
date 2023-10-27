import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// paso 3.- crear el consumidor del contexto
export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext debe estar dentro del proveedor SongProvider')
  }
  return context
}
