import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcoming from '../Hooks/useUpcoming'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
 
  return (
   <>
  <Header />
  <MainContainer/>
  <SecondaryContainer/>
   </>
  )
}

export default Browse