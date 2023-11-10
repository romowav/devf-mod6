import { createContext, useState } from 'react'

const SearchContext = createContext()

function SearchProvider ({ children }) {
  const [selectedItem, setSelectedItem] = useState('')
  const [dataContext, setDataContext] = useState('')

  const data = {
    setDataContext, dataContext, selectedItem, setSelectedItem
  }

  return (
    <SearchContext.Provider value={data}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
