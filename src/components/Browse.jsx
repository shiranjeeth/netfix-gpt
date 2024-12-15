import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcoming from '../Hooks/useUpcoming'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showGptSearch = useSelector(store => store.GptSearch.showGPTSearch);
      // useSelector(store => store.{store reducer Key }.{slice initialState key} )
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
 
  return (
   <>
  <Header />
  {
    showGptSearch ?   <GptSearch/> :
    <>
     <MainContainer/>
     <SecondaryContainer/>
    </>
  }
   </>
  )
}

export default Browse