import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useSearchContext } from '@/hooks/useSearchContext'
import { useState } from 'react'
import './Header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  const { setDataContext } = useSearchContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }
  const [search, setSearch] = useState('')

  const searchData = (value) => {
    fetch('https://ecommerce-json-jwt.onrender.com/items')
      .then((response) => response.json())
      .then((json) => {
        const resultsData = json.filter((product) => {
          return value && product && product.product_name && product.product_name.toLowerCase().includes(value)
        })
        setDataContext(resultsData)
      })
  }

  const handleChange = (value) => {
    setSearch(value)
  }
  const handleKeyDown = () => {
    searchData(search)
    document.getElementById('busqueda').click()
  }

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>
        LOGO
      </NavLink>
      <div className='d-flex' role='search'>
        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' value={search} onChange={(e) => handleChange(e.target.value)} id='searchInput' onKeyDown={e => e.key === 'Enter' ? handleKeyDown() : ''} />
        <NavLink to='/search-details' id='busqueda'>
          <button className='btn btn-outline-success' onClick={() => searchData(search)}>
            Search
          </button>
        </NavLink>
      </div>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>
            Home
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>
            Dashboard
          </NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>
                  Secret
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink to='/' onClick={logout} className='header__item-link'>
                  Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>
                  Login
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>
                  SignUp
                </NavLink>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}

export default Header
