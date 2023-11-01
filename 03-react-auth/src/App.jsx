import Header from './components/Header/Header'
import './App.css'
import { Dashboard, Home, Login, Secret, SignUp } from '@/pages'

function App () {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <SignUp />
    </>
  )
}

export default App
