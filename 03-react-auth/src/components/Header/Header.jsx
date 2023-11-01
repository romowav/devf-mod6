import './Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a className='header__logo' href='/'>LOGO</a>
      <ul className='headre__nav-list'>
        <li className='headre__list-item'>
          <a href='/' className='header__item-link header__item-link--is-active'>Home</a>
        </li>
        <li className='headre__list-item'>
          <a href='/' className='header__item-link'>Dashboard</a>
        </li>
        <li className='headre__list-item'>
          <a href='/' className='header__item-link'>Login</a>
        </li>
        <li className='headre__list-item'>
          <a href='/' className='header__item-link'>Secret</a>
        </li>
        <li className='headre__list-item'>
          <a href='/' className='header__item-link'>SignUp</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
