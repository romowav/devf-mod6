import './Home.css'
import SongDetails from '@/components/SongDetails/SongDetails'
import SongList from '@/components/SongList/SongList.jsx'
import { SongProvider } from '@/context/SongContext'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Lado Izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>Lado Derecho</h2>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}

export default Home
