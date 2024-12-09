import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
 
  return (
   <>

  <Header />
   </>
  )
}

export default Browse