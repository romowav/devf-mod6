import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SearchProvider } from './context/SearchContext'
import Header from './components/Header/Header'
import RoutesIndex from '@/routes/RoutesIndex'
import './App.css'

function App () {
  return (
    <>
      <SearchProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </AuthProvider>
      </SearchProvider>
    </>
  )
}

export default App
