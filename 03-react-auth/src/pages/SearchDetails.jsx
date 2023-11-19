import { useSearchContext } from '@/hooks/useSearchContext'

import { Link } from 'react-router-dom'
import React from 'react'

const SearchDetails = () => {
  const { dataContext, setSelectedItem } = useSearchContext()

  return (
    <>
      <h1>Search Results</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>

        {dataContext && dataContext.map((product) => (
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
              <Link to={'/item/' + product.id} className='btn btn-success position-absolute bottom-0 start-0 m-3' onClick={() => setSelectedItem(product.id)}>
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchDetails
