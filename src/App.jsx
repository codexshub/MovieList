import { useMemo } from 'react'
import movies from './/MOVIE_DATA.json'
import BasicTable from './component/Table'

function App() {
  const data = useMemo(() => movies, [])

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]

  return (
    <>
      <BasicTable data={data} columns={movieColumns} />
  
    </>
  )
}

export default App