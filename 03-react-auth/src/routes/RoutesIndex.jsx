import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, SignUp } from '@/pages'
import { useAuthContext } from '@/hooks/useAuthContext'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' />} />
      <Route path='/secret' element={isAuth ? <Secret /> : <Navigate to='/login' />} />
      <Route path='/' />
    </Routes>
  )
}

export default RoutesIndex
