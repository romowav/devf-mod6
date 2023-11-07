import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import './Header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }
  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>
        LOGO
      </NavLink>
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
