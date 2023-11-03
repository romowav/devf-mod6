import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// 1.- crear contexto
const AuthContext = createContext()

// 2.- crear provedor
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null) // datos del usuario sacados de token decodificado (payload)
  const login = (token) => {
    localStorage.setItem('token', token)
    const decoded = jwtDecode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }
  // logica para ahcer logout (borrar localstorage)
  const logout = () => {
    // borrar local storage
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }
  //  como recordar al user y cargar como si ya se hizo el login
  useEffect(() => {
    // recuperar el token del local storage, si no existe regresa null
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
