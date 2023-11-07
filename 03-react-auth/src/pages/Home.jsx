import { useState, useEffect } from 'react'
import { getAllItemService } from '@/services/itemServices'
import '@/pages/Styles/home.scss'
import { Link } from 'react-router-dom'

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
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Crear logica para crear cards con informacion de cada item que ya estamos llamando de la API */}

        {itemData && itemData.map((product) => (
          <div className='card m-4' style={{ width: '18rem' }} key={product.id}>
            <div className='card__img-container'>
              <img src={product.image} className='card-img-top card-foto' alt={product.product_name} />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <div className='text-container mb-5'>
                <p className='card-text'>
                  {product.description}
                </p>
              </div>
              <Link to='/' className='btn btn-primary position-absolute bottom-0 start-0 m-3'>
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
