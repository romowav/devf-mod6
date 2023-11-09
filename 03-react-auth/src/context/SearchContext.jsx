import { createContext, useState } from 'react'

const SearchContext = createContext()

function SearchProvider ({ children }) {
  const [search, setSearch] = useState('')
  const [dataContext, setDataContext] = useState('')

  const data = {
    setDataContext, dataContext, search, setSearch
  }

  return (
    <SearchContext.Provider value={data}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
