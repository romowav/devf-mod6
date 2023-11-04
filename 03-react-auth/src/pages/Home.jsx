import { useState, useEffect } from 'react'
import { getAllItemService } from '@/services/itemServices'

const Home = () => {
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    const getItemData = async () => {
      try {
        const response = await getAllItemService()
        if (response.status === 200) {
          setItemData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error.message)
      }
    }
    getItemData()
  }, [])
  return (
    <>
      <h1>Home</h1>
      {/* Crear logica para crear cards con informacion de cada item que ya estamos llamando de la API */}
    </>
  )
}

export default Home
