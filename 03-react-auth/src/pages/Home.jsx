import { useState, useEffect } from 'react'
import { getAllItemService } from '@/services/itemServices'
import { useSearchContext } from '@/hooks/useSearchContext'
import '@/pages/Styles/home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const [itemData, setItemData] = useState([])
  const { setSelectedItem } = useSearchContext()
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
      <div className='d-flex flex-row flex-wrap justify-content-center'>
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
              <Link to='/item-details' className='btn btn-success position-absolute bottom-0 start-0 m-3' onClick={() => setSelectedItem(product.id)}>
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
