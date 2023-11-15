import { useSearchContext } from '@/hooks/useSearchContext'
import { getOneItemService } from '@/services/itemServices'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemDetails = () => {
  const { selectedItem } = useSearchContext()
  const [oneItemData, setOneItemData] = useState([])

  useEffect(() => {
    const getOneItemData = async () => {
      try {
        const response = await getOneItemService(selectedItem)
        if (response.status === 200) {
          setOneItemData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Item Details', error.message)
      }
    }
    getOneItemData()
  }, [])

  return (
    <>
      <h1>ItemDetails</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        <div className='card m-4' style={{ width: '18rem' }} key={oneItemData.id}>
          <div className='card__img-container'>
            <img src={oneItemData.image} className='card-img-top card-foto' alt={oneItemData.product_name} />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{oneItemData.product_name}</h5>
            <div className='text-container mb-5'>
              <p className='card-text'>
                {oneItemData.description}
              </p>
            </div>
            <Link to='/item-details' className='btn btn-success position-absolute bottom-0 start-0 m-3'>
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetails
