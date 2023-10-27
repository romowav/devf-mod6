import './songList.css'
import { useSongContext } from '@/Hooks/useSongContext'

const SongList = () => {
  const { list, loading, setSelectedSong } = useSongContext()
  return (
    <section className='row-container'>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div className='row-song' key={song.id} onClick={() => setSelectedSong(song)}>
            <h3>{song.title}</h3>
            <h4>{song.artist}</h4>
          </div>
        ))}
    </section>
  )
}

export default SongList
