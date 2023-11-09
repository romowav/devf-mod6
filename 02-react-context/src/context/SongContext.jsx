import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
// Context tiene que ver con el manejo de estados globales en react
// es decir poder compartir la misma informacion entre diferentes niveles de componentes.
// para usar context necesitamos seguir una serie de pasos

// 1.- crear el contexto
const SongContext = createContext()

// 2.- crear provedor del contexto
// es decir maneja de donde se obtiene la informacion y como se comparte
// el provedor es un componente de react que envuelve a los componentes que van usar el contexto

function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({})

  // similo llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  const data = {
    list, loading, selectedSong, setSelectedSong
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

// exportar las funciones del provider y el contexto para hacerlos accesibles
export { SongProvider, SongContext }
